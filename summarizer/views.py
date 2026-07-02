from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.core.files.storage import FileSystemStorage
from django.contrib import messages
from django.http import HttpResponse, JsonResponse
from django.core.management import call_command
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
import io
from .models import Summary, PatientProfile, Reminder
from .forms import UserUpdateForm, PatientProfileForm, ReminderForm
from .ai_engine import (
    get_summary_formatted, 
    summarize_image_with_gemini, 
    get_chatbot_response,
    summarize_pdf_with_gemini,
    extract_text_from_file
)
import os
import json
import datetime
import google.generativeai as genai

def check_ai_limit(user):
    profile, _ = PatientProfile.objects.get_or_create(user=user)
    if profile.is_premium:
        return True, profile
    if profile.ai_consultations_used >= 5:
        return False, profile
    return True, profile

# --- CHATBOT ---
@csrf_exempt
@login_required
def chatbot_view(request):
    if request.method == 'POST':
        allowed, profile = check_ai_limit(request.user)
        if not allowed:
            return JsonResponse({'error': 'FREE_LIMIT_REACHED'})
            
        try:
            data = json.loads(request.body)
            user_message = data.get('message', '')
            if not user_message:
                return JsonResponse({'error': 'Empty message'}, status=400)

            system_prompt = f"""You are 'Docipher Copilot', a friendly and empathetic AI medical assistant...
            Patient Context:
            - Name: {profile.user.username}
            - Age: {datetime.date.today().year - profile.date_of_birth.year if profile.date_of_birth else 'Unknown'}
            - Gender: {profile.gender}
            - Allergies: {profile.allergies}
            - Chronic Conditions: {profile.chronic_conditions}
            - Current Meds: {profile.current_medications}
            
            Provide short, actionable, plain-language advice."""

            model = genai.GenerativeModel('gemini-2.5-flash-lite', system_instruction=system_prompt)
            response = model.generate_content(user_message)
            
            # Increment usage
            if not profile.is_premium:
                profile.ai_consultations_used += 1
                profile.save()

            return JsonResponse({'response': response.text})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return render(request, 'summarizer/chat.html')

# --- SUMMARIZER ---
@login_required
def summarizer_view(request):
    summary_result = ""
    uploaded_image_url = request.session.get('last_uploaded_url', None)
    uploaded_file_name = request.session.get('last_uploaded_name', None)
    file_path = request.session.get('last_uploaded_path', None)
    mode = 'patient'

    # Clean up stale session file paths
    if file_path and not os.path.exists(file_path):
        file_path = None
        uploaded_image_url = None
        uploaded_file_name = None
        if 'last_uploaded_path' in request.session: del request.session['last_uploaded_path']
        if 'last_uploaded_url' in request.session: del request.session['last_uploaded_url']
        if 'last_uploaded_name' in request.session: del request.session['last_uploaded_name']
        if 'last_processing_time' in request.session: del request.session['last_processing_time']
        if 'last_file_size' in request.session: del request.session['last_file_size']
        if 'last_parser_type' in request.session: del request.session['last_parser_type']
        request.session.modified = True

    if request.method == 'POST':
        # Clear Button
        if 'clear_file' in request.POST:
            if 'last_uploaded_path' in request.session: del request.session['last_uploaded_path']
            if 'last_uploaded_url' in request.session: del request.session['last_uploaded_url']
            if 'last_uploaded_name' in request.session: del request.session['last_uploaded_name']
            if 'last_processing_time' in request.session: del request.session['last_processing_time']
            if 'last_file_size' in request.session: del request.session['last_file_size']
            if 'last_parser_type' in request.session: del request.session['last_parser_type']
            request.session.modified = True
            messages.info(request, "File cleared.")
            return redirect('summarizer')

        allowed, profile = check_ai_limit(request.user)
        if not allowed:
            messages.error(request, 'You have reached your free AI limit. Please upgrade to Premium.')
            return redirect('pricing')

        mode = request.POST.get('report_type', 'patient')
        uploaded_image = request.FILES.get('document')
        
        # Upload Logic
        if uploaded_image:
            import tempfile
            
            # Save to temporary directory for AI engine
            temp_dir = tempfile.gettempdir()
            file_path = os.path.join(temp_dir, f"docipher_{uploaded_image.name}")
            
            with open(file_path, 'wb+') as destination:
                for chunk in uploaded_image.chunks():
                    destination.write(chunk)
            
            # Save to default storage (Cloudinary) for UI display
            try:
                uploaded_image.seek(0)
                from django.core.files.storage import default_storage
                saved_name = default_storage.save(uploaded_image.name, uploaded_image)
                uploaded_image_url = default_storage.url(saved_name)
            except Exception:
                uploaded_image_url = ""
                
            uploaded_file_name = uploaded_image.name
            request.session['last_uploaded_path'] = file_path
            request.session['last_uploaded_url'] = uploaded_image_url
            request.session['last_uploaded_name'] = uploaded_file_name
            request.session.modified = True
        elif 'last_uploaded_path' in request.session:
            file_path = request.session['last_uploaded_path']
            if not os.path.exists(file_path):
                file_path = None

        # Generation Logic
        if file_path:
            import time
            start_time = time.time()
            ext = file_path.split('.')[-1].lower()
            
            try:
                size_bytes = os.path.getsize(file_path)
                size_kb = size_bytes / 1024
                if size_kb > 1024:
                    uploaded_file_size = f"{round(size_kb / 1024, 1)} MB"
                else:
                    uploaded_file_size = f"{round(size_kb, 1)} KB"
            except Exception:
                uploaded_file_size = "Unknown size"
                
            parser_type = "AI Medical Reader"
            
            try:
                if ext in ['jpg', 'jpeg', 'png', 'webp', 'bmp', 'tiff', 'gif']:
                    parser_type = "Gemini Vision OCR"
                    summary_result = summarize_image_with_gemini(file_path, mode=mode)
                elif ext == 'pdf':
                    text = extract_text_from_file(file_path)
                    if len(text.strip()) > 30:
                        parser_type = "Local PDF Text Parser + AI"
                        summary_result = get_summary_formatted(text, mode=mode)
                    else:
                        parser_type = "Gemini PDF Multimodal OCR"
                        summary_result = summarize_pdf_with_gemini(file_path, mode=mode)
                elif ext in ['docx', 'xlsx', 'xls', 'csv', 'txt', 'md', 'rtf', 'html', 'xml', 'json']:
                    parser_type = f"{ext.upper()} Document Reader + AI"
                    text = extract_text_from_file(file_path)
                    if text.strip():
                        summary_result = get_summary_formatted(text, mode=mode)
                    else:
                        summary_result = "<div class='alert alert-warning'>This document could not be read or is empty.</div>"
                else:
                    summary_result = "<div class='alert alert-warning'>Format not supported.</div>"
                    parser_type = "Unsupported"
                
                # Save to database
                if summary_result and "Error" not in summary_result and "Format not supported" not in summary_result:
                    Summary.objects.create(
                        user=request.user,
                        original_text=f"Report Mode: {mode}",
                        summary_text=summary_result
                    )
                    
                    if not profile.is_premium:
                        profile.ai_consultations_used += 1
                        profile.save()

            except Exception as e:
                summary_result = f"<div class='alert alert-danger'>Error: {str(e)}</div>"
                
            processing_time = round(time.time() - start_time, 2)
            request.session['last_processing_time'] = processing_time
            request.session['last_file_size'] = uploaded_file_size
            request.session['last_parser_type'] = parser_type
            request.session.modified = True

    processing_time = request.session.get('last_processing_time', None)
    uploaded_file_size = request.session.get('last_file_size', None)
    parser_type = request.session.get('last_parser_type', None)

    is_image = False
    if file_path:
        ext = file_path.split('.')[-1].lower()
        is_image = ext in ['jpg', 'jpeg', 'png', 'webp', 'bmp', 'tiff', 'gif']

    context = {
        'summary': summary_result,
        'uploaded_image_url': uploaded_image_url,
        'uploaded_file_name': uploaded_file_name,
        'uploaded_file_size': uploaded_file_size,
        'processing_time': processing_time,
        'parser_type': parser_type,
        'is_image': is_image,
        'mode': mode
    }
    return render(request, 'summarizer/index.html', context)


# --- OTHER VIEWS ---
def landing_view(request): 
    if request.user.is_authenticated:
        return redirect('dashboard')
    return render(request, 'summarizer/landing_page.html')

@login_required
def dashboard_view(request):
    summary_count = Summary.objects.filter(user=request.user).count()
    reminders = Reminder.objects.filter(user=request.user).order_by('reminder_time')
    reminder_count = reminders.count()
    recent_summaries = Summary.objects.filter(user=request.user).order_by('-created_at')[:5]
    
    try:
        profile = PatientProfile.objects.get(user=request.user)
        bmi = None
        if profile.height and profile.weight:
            height_m = profile.height / 100
            bmi = round(float(profile.weight) / (height_m * height_m), 1)
    except PatientProfile.DoesNotExist:
        profile = None
        bmi = None
        
    import random
    heart_rate_data = [random.randint(60, 100) for _ in range(7)]
    bp_systolic_data = [random.randint(110, 130) for _ in range(7)]
    bp_diastolic_data = [random.randint(70, 85) for _ in range(7)]
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    context = {
        'summary_count': summary_count,
        'reminder_count': reminder_count,
        'recent_summaries': recent_summaries,
        'profile': profile,
        'bmi': bmi,
        'upcoming_reminders': reminders[:5],
        'chart_data': {
            'labels': days,
            'heart_rate': heart_rate_data,
            'systolic': bp_systolic_data,
            'diastolic': bp_diastolic_data,
        }
    }
    return render(request, 'summarizer/dashboard.html', context)

def about_view(request): return render(request, 'summarizer/about.html')
def contact_view(request):
    if request.method == 'POST':
        messages.success(request, 'Message sent!')
        return redirect('contact')
    return render(request, 'summarizer/contact.html')

def privacy_policy_view(request): return render(request, 'summarizer/privacy.html')
def terms_of_service_view(request): return render(request, 'summarizer/terms.html')
def hipaa_compliance_view(request): return render(request, 'summarizer/hipaa.html')
def security_view(request): return render(request, 'summarizer/security.html')

@login_required
def download_summary_pdf(request):
    from django.template.loader import get_template
    from xhtml2pdf import pisa
    if request.method == 'POST':
        context = {'summary_text': request.POST.get('summary_text', ''), 'image_url': request.POST.get('image_url', ''), 'user': request.user}
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="summary_{request.user.username}.pdf"'
        pisa_status = pisa.CreatePDF(get_template('summarizer/summary_pdf.html').render(context), dest=response)
        if pisa_status.err: return HttpResponse('PDF Error', status=500)
        return response
    return HttpResponse('Method not allowed', status=405)

@login_required
def confirm_reminder_view(request, id):
    reminder = get_object_or_404(Reminder, id=id, user=request.user)
    if not reminder.taken_today:
        reminder.taken_today = True
        reminder.save()
        profile, _ = PatientProfile.objects.get_or_create(user=request.user)
        profile.points += 10
        if profile.points >= profile.level * 50:
            profile.level += 1
            messages.success(request, f"🎉 Level Up! You are now Level {profile.level}! You earned 10 points.")
        else:
            messages.success(request, "Confirmed! +10 Points!")
        profile.save()
    else:
        messages.info(request, "You already confirmed taking this medicine today.")
    return redirect('rewards')

def pricing_view(request):
    profile = None
    if request.user.is_authenticated:
        profile, _ = PatientProfile.objects.get_or_create(user=request.user)
    return render(request, 'summarizer/pricing.html', {'profile': profile})

@login_required
def upgrade_premium_view(request):
    if request.method == 'POST':
        profile, _ = PatientProfile.objects.get_or_create(user=request.user)
        profile.is_premium = True
        profile.save()
        messages.success(request, 'Payment Successful! You are now a Premium user!')
        return redirect('dashboard')
    return redirect('pricing')

@login_required
def rewards_view(request):
    profile, _ = PatientProfile.objects.get_or_create(user=request.user)
    progress_percentage = (profile.points % 50) / 50 * 100
    return render(request, 'summarizer/rewards.html', {'profile': profile, 'progress': progress_percentage})

@login_required
def game_match_view(request):
    return render(request, 'summarizer/game_match.html')

@login_required
@require_POST
def add_game_points(request):
    try:
        data = json.loads(request.body)
        points_to_add = int(data.get('points', 10))
        
        profile, _ = PatientProfile.objects.get_or_create(user=request.user)
        profile.points += points_to_add
        profile.level = (profile.points // 50) + 1
        profile.save()
        
        return JsonResponse({'status': 'success', 'new_points': profile.points, 'new_level': profile.level})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


@login_required
def profile_view(request):
    profile, _ = PatientProfile.objects.get_or_create(user=request.user)
    if request.method == 'POST':
        u_form = UserUpdateForm(request.POST, instance=request.user)
        p_form = PatientProfileForm(request.POST, request.FILES, instance=profile)
        if u_form.is_valid() and p_form.is_valid():
            u_form.save(); p_form.save()
            messages.success(request, 'Profile updated!')
            return redirect('profile')
    else:
        u_form = UserUpdateForm(instance=request.user)
        p_form = PatientProfileForm(instance=profile)
    return render(request, 'summarizer/profile.html', {'user_form': u_form, 'profile_form': p_form, 'completeness_percentage': 50})

@login_required
def reminder_view(request):
    if request.method == 'POST':
        if 'delete_reminder' in request.POST:
            Reminder.objects.filter(id=request.POST.get('delete_reminder'), user=request.user).delete()
        else:
            form = ReminderForm(request.POST)
            if form.is_valid():
                obj = form.save(commit=False)
                obj.user = request.user
                obj.save()
        return redirect('reminders')
    return render(request, 'summarizer/reminders.html', {'form': ReminderForm(), 'reminders': Reminder.objects.filter(user=request.user)})

@login_required
def summary_history(request):
    return render(request, 'summarizer/summary_history.html', {'summaries': Summary.objects.filter(user=request.user).order_by('-created_at')})

@login_required
def summary_detail_view(request, id):
    summary = get_object_or_404(Summary, id=id, user=request.user)
    return render(request, 'summarizer/summary_detail.html', {'item': summary})

@login_required
def delete_summary_view(request, id):
    if request.method == 'POST':
        summary = get_object_or_404(Summary, id=id, user=request.user)
        summary.delete()
        messages.success(request, 'Report successfully deleted.')
    return redirect('history')

@login_required
def download_profile_pdf(request): return HttpResponse("PDF Logic")
def register(request):
    if request.method == 'POST':
        from django.contrib.auth.models import User
        
        first_name = request.POST.get('first_name', '')
        last_name = request.POST.get('last_name', '')
        username = request.POST.get('username', '')
        email = request.POST.get('email', '')
        p1 = request.POST.get('password1', '')
        p2 = request.POST.get('password2', '')
        
        if p1 != p2:
            messages.error(request, "Passwords do not match.")
            return render(request, 'registration/register.html')
            
        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists.")
            return render(request, 'registration/register.html')
            
        user = User.objects.create_user(username=username, email=email, password=p1)
        user.first_name = first_name
        user.last_name = last_name
        user.save()
        
        # Log them in automatically after registration
        auth_login(request, user)
        messages.success(request, "Account created successfully!")
        return redirect('dashboard')
        
    return render(request, 'registration/register.html')

def admin_login_view(request):
    if request.user.is_authenticated and request.user.is_staff:
        return redirect('custom_admin')
        
    if request.method == 'POST':
        u = request.POST.get('username')
        p = request.POST.get('password')
        user = authenticate(request, username=u, password=p)
        if user is not None and user.is_staff:
            auth_login(request, user)
            return redirect('custom_admin')
        else:
            messages.error(request, "Invalid admin credentials or you don't have staff access.")
            
    return render(request, 'summarizer/admin_login.html')

def admin_logout_view(request):
    auth_logout(request)
    return redirect('admin_login')

@user_passes_test(lambda u: u.is_active and u.is_staff, login_url='admin_login')
def custom_admin_view(request):
    from django.contrib.auth.models import User
    total_users = User.objects.count()
    premium_users = PatientProfile.objects.filter(is_premium=True).count()
    total_summaries = Summary.objects.count()
    total_reminders = Reminder.objects.count()
    
    recent_users = User.objects.order_by('-date_joined')[:10]
    recent_summaries = Summary.objects.order_by('-created_at')[:5]
    
    context = {
        'total_users': total_users,
        'premium_users': premium_users,
        'total_summaries': total_summaries,
        'total_reminders': total_reminders,
        'recent_users': recent_users,
        'recent_summaries': recent_summaries,
    }
    return render(request, 'summarizer/custom_admin.html', context)

@user_passes_test(lambda u: u.is_active and u.is_staff, login_url='admin_login')
def admin_users_view(request):
    from django.contrib.auth.models import User
    users = User.objects.all().order_by('-date_joined')
    return render(request, 'summarizer/admin_users.html', {'users': users})

@user_passes_test(lambda u: u.is_active and u.is_staff, login_url='admin_login')
def admin_summaries_view(request):
    summaries = Summary.objects.all().order_by('-created_at')
    return render(request, 'summarizer/admin_summaries.html', {'summaries': summaries})

@user_passes_test(lambda u: u.is_active and u.is_staff, login_url='admin_login')
def admin_reminders_view(request):
    reminders = Reminder.objects.all().order_by('-reminder_time')
    return render(request, 'summarizer/admin_reminders.html', {'reminders': reminders})

@user_passes_test(lambda u: u.is_active and u.is_staff, login_url='admin_login')
def admin_settings_view(request):
    return render(request, 'summarizer/admin_settings.html')

@csrf_exempt
def trigger_send_reminders(request):
    """
    Endpoint for Vercel/Cron-Job.org to trigger the send_reminders management command.
    """
    if request.method not in ['GET', 'POST']:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
        
    try:
        out = io.StringIO()
        call_command('send_reminders', stdout=out)
        output = out.getvalue()
        return JsonResponse({'status': 'success', 'message': output})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)
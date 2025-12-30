from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.core.files.storage import FileSystemStorage
from django.contrib import messages
from django.http import HttpResponse, JsonResponse
from .models import Summary, PatientProfile, Reminder
from .forms import UserUpdateForm, PatientProfileForm, ReminderForm
from .ai_engine import get_summary_formatted, summarize_image_with_gemini, get_chatbot_response
import os
import json

# --- CHATBOT ---
@login_required
def chatbot_view(request):
    if request.method == 'POST':
        try:
            body = json.loads(request.body)
            user_message = body.get('message', '')
            # Simple call to robust engine
            ai_response = get_chatbot_response(user_message)
            return JsonResponse({'response': ai_response})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return render(request, 'summarizer/chat.html')

# --- SUMMARIZER ---
@login_required
def summarizer_view(request):
    summary_result = ""
    uploaded_image_url = request.session.get('last_uploaded_url', None)
    mode = 'patient'

    if request.method == 'POST':
        # Clear Button
        if 'clear_file' in request.POST:
            if 'last_uploaded_path' in request.session: del request.session['last_uploaded_path']
            if 'last_uploaded_url' in request.session: del request.session['last_uploaded_url']
            request.session.modified = True
            messages.info(request, "File cleared.")
            return redirect('summarizer')

        mode = request.POST.get('report_type', 'patient')
        uploaded_image = request.FILES.get('document')
        file_path = None
        
        # Upload Logic
        if uploaded_image:
            fs = FileSystemStorage()
            filename = fs.save(uploaded_image.name, uploaded_image)
            uploaded_image_url = fs.url(filename)
            file_path = fs.path(filename)
            request.session['last_uploaded_path'] = file_path
            request.session['last_uploaded_url'] = uploaded_image_url
            request.session.modified = True
        elif 'last_uploaded_path' in request.session:
            file_path = request.session['last_uploaded_path']
            if not os.path.exists(file_path):
                file_path = None
        
        # Generation Logic
        if file_path:
            ext = file_path.split('.')[-1].lower()
            try:
                if ext in ['jpg', 'jpeg', 'png', 'webp']:
                    summary_result = summarize_image_with_gemini(file_path, mode=mode)
                elif ext in ['txt']:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        summary_result = get_summary_formatted(f.read(), mode=mode)
                else:
                    summary_result = "<div class='alert alert-warning'>Format not supported.</div>"
                
                # --- CRITICAL FIX HERE ---
                # We now save to 'summary_text' because that is what your database has.
                if summary_result and "Error" not in summary_result:
                    Summary.objects.create(
                        user=request.user,
                        original_text=f"Report Mode: {mode}", # Storing mode in original_text field
                        summary_text=summary_result           # Storing result in summary_text field
                    )

            except Exception as e:
                summary_result = f"<div class='alert alert-danger'>Error: {str(e)}</div>"

    context = {
        'summary': summary_result,
        'uploaded_image_url': uploaded_image_url,
        'mode': mode
    }
    return render(request, 'summarizer/index.html', context)

# --- OTHER VIEWS (Standard) ---
def landing_view(request): return render(request, 'summarizer/landing_page.html')
def about_view(request): return render(request, 'summarizer/about.html')
def contact_view(request):
    if request.method == 'POST':
        messages.success(request, 'Message sent!')
        return redirect('contact')
    return render(request, 'summarizer/contact.html')

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
def download_profile_pdf(request): return HttpResponse("PDF Logic")
def register(request): return render(request, 'registration/register.html', {})
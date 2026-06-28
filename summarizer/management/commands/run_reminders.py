import time
from django.core.management.base import BaseCommand
from django.core.mail import send_mail
from django.conf import settings
from summarizer.models import Reminder
from django.utils import timezone

class Command(BaseCommand):
    help = 'Runs the continuous reminder email service.'

    def handle(self, *args, **options):
        self.stdout.write("Starting background reminder service... Press Ctrl+C to stop.")
        
        while True:
            now = timezone.now()
            today = now.date()
            current_time = now.time()
            
            # Reset taken_today for a new day
            reminders_to_reset = Reminder.objects.exclude(last_reset_date=today)
            for r in reminders_to_reset:
                r.taken_today = False
                r.last_reset_date = today
                r.save()
            
            # Find reminders that are due:
            # - active
            # - not taken today
            # - reminder_time <= current_time
            due_reminders = Reminder.objects.filter(
                is_active=True,
                taken_today=False,
                reminder_time__lte=current_time
            )
            
            for reminder in due_reminders:
                # Check if we sent an email in the last 1 minute
                should_send = False
                if not reminder.last_sent:
                    should_send = True
                else:
                    diff = now - reminder.last_sent
                    if diff.total_seconds() >= 60:
                        should_send = True
                
                if should_send:
                    user_email = reminder.user.email
                    if user_email:
                        confirm_link = f"http://127.0.0.1:8000/reminders/confirm/{reminder.id}/"
                        subject = f"URGENT: Time to take your {reminder.medicine_name}"
                        message = f"""Hi {reminder.user.username},

This is your reminder to take your medicine: {reminder.medicine_name} ({reminder.dosage}).

Please click the link below to confirm you have taken it. We will keep reminding you every minute until you confirm!

Confirm link: {confirm_link}

Stay healthy,
Docipher AI
"""
                        try:
                            send_mail(
                                subject,
                                message,
                                settings.EMAIL_HOST_USER,
                                [user_email],
                                fail_silently=False,
                            )
                            self.stdout.write(f"[{now.strftime('%H:%M:%S')}] Sent reminder for {reminder.medicine_name} to {user_email}")
                            reminder.last_sent = now
                            reminder.save()
                        except Exception as e:
                            self.stdout.write(f"[{now.strftime('%H:%M:%S')}] Error sending email to {user_email}: {str(e)}")
                    else:
                        self.stdout.write(f"User {reminder.user.username} has no email address.")

            # Sleep for 10 seconds before checking again
            time.sleep(10)

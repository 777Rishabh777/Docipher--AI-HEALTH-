from django.core.management.base import BaseCommand
from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone
from summarizer.models import Reminder

class Command(BaseCommand):
    help = 'Checks for due reminders and sends email notifications in the correct timezone'

    def handle(self, *args, **options):
        now_local = timezone.localtime(timezone.now())
        current_time = now_local.time()

        self.stdout.write(f"Checking for reminders at local time: {now_local.strftime('%I:%M %p')}...")

        reminders_due = Reminder.objects.filter(
            is_active=True,
            reminder_time__hour=current_time.hour,
            reminder_time__minute=current_time.minute
        )

        if not reminders_due:
            self.stdout.write('No reminders are due at this time.')
            return

        for reminder in reminders_due:
            subject = f"Reminder: Time to take your medicine - {reminder.medicine_name}"
            message = (
                f"Hello {reminder.user.username},\n\n"
                f"This is a reminder to take your medicine:\n\n"
                f"Medicine: {reminder.medicine_name}\n"
                f"Dosage: {reminder.dosage or 'N/A'}\n"
                f"Time: {reminder.reminder_time.strftime('%I:%M %p')}\n\n"
                f"Stay healthy!\n- Docipher Team"
            )
            from_email = settings.EMAIL_HOST_USER
            recipient_list = [reminder.user.email]

            try:
                send_mail(subject, message, from_email, recipient_list)
                self.stdout.write(self.style.SUCCESS(
                    f"Successfully sent reminder for '{reminder.medicine_name}' to {reminder.user.email}"
                ))
            except Exception as e:
                self.stdout.write(self.style.ERROR(
                    f"Failed to send email to {reminder.user.email}. Error: {e}"
                ))
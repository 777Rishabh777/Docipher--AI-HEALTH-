# my_script.py
import os
import django

# IMPORTANT: Replace 'medical_project' with the name of your project's main folder
# (the one that contains settings.py).
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'medical_project.settings')

# This command loads your project's settings.
django.setup()

# --- Django is now ready to use! ---


# Now you can safely import your models and write your code below.
from django.contrib.auth.models import User
from summarizer.models import PatientProfile

def test_database():
    # Example code to test if it's working
    user_count = User.objects.count()
    print(f"Found {user_count} user(s) in the database.")

    first_user = User.objects.first()
    if first_user:
        print(f"The first user is: {first_user.username}")

# Run your function
if __name__ == "__main__":
    test_database()
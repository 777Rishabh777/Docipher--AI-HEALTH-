from django.db import models
from django.contrib.auth.models import User

class Summary(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    original_text = models.TextField()  # We will store the "Mode" here
    summary_text = models.TextField()   # We will store the AI Result here
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Summary for {self.user.username}"

class Reminder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    medicine_name = models.CharField(max_length=100)
    dosage = models.CharField(max_length=50, blank=True, help_text="e.g., '500mg', '1 tablet'")
    reminder_time = models.TimeField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"'{self.medicine_name}' reminder for {self.user.username}"

class PatientProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(default='default.jpg', upload_to='profile_pics', blank=True)
    date_of_birth = models.DateField("Date of Birth (YYYY-MM-DD)", null=True, blank=True)
    gender = models.CharField(max_length=20, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')], blank=True)
    marital_status = models.CharField(max_length=20, choices=[('Single', 'Single'), ('Married', 'Married'), ('Divorced', 'Divorced'), ('Widowed', 'Widowed')], blank=True)
    occupation = models.CharField(max_length=100, blank=True)
    contact_number = models.CharField("Contact Number", max_length=20, blank=True)
    address = models.TextField("Full Address", blank=True)
    height = models.PositiveIntegerField("Height (cm)", null=True, blank=True)
    weight = models.DecimalField("Weight (kg)", max_digits=5, decimal_places=1, null=True, blank=True)
    BLOOD_GROUP_CHOICES = [
        ('A+', 'A+'), ('A-', 'A-'), ('B+', 'B+'), ('B-', 'B-'),
        ('AB+', 'AB+'), ('AB-', 'AB-'), ('O+', 'O+'), ('O-', 'O-'),
        ('Unknown', 'Unknown'),
    ]
    blood_group = models.CharField("Blood Group", max_length=10, choices=BLOOD_GROUP_CHOICES, blank=True, default='Unknown')
    primary_care_physician = models.CharField("Primary Doctor's Name", max_length=100, blank=True)
    physician_contact = models.CharField("Doctor's Contact", max_length=20, blank=True)
    allergies = models.TextField("Known Allergies", blank=True)
    chronic_conditions = models.TextField("Chronic Conditions", blank=True)
    past_surgeries = models.TextField("Past Surgeries", blank=True)
    family_medical_history = models.TextField("Family Medical History", blank=True)
    immunization_history = models.TextField("Immunization History", blank=True)
    current_medications = models.TextField("Current Medications", blank=True)
    past_major_illnesses = models.TextField("Past Major Illnesses", blank=True)
    smoking_status = models.CharField(max_length=20, choices=[('Never', 'Never'), ('Former', 'Former'), ('Current', 'Current')], blank=True)
    alcohol_consumption = models.CharField(max_length=20, choices=[('None', 'None'), ('Socially', 'Socially'), ('Regularly', 'Regularly')], blank=True)
    dietary_notes = models.TextField("Dietary Notes", blank=True)
    emergency_contact_name = models.CharField("Emergency Contact Name", max_length=100, blank=True)
    emergency_contact_phone = models.CharField("Emergency Contact Phone", max_length=20, blank=True)

    def __str__(self):
        return f"Profile for {self.user.username}"
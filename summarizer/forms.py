from django import forms
from django.contrib.auth.models import User
from .models import PatientProfile, Reminder

class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']

class PatientProfileForm(forms.ModelForm):
    date_of_birth = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}), required=False)

    class Meta:
        model = PatientProfile
        fields = [
            # Personal
            'profile_picture', 'date_of_birth', 'gender', 'marital_status', 'occupation',
            'contact_number', 'address',
            # Medical Vitals
            'height', 'weight', 'blood_group', 'primary_care_physician', 'physician_contact',
            # Medical History
            'allergies', 'chronic_conditions', 'past_surgeries', 'family_medical_history',
            'immunization_history', 'current_medications', 'past_major_illnesses',
            # Lifestyle
            'smoking_status', 'alcohol_consumption', 'dietary_notes',
            # Emergency
            'emergency_contact_name', 'emergency_contact_phone'
        ]
        widgets = {
            # Make text areas larger
            'address': forms.Textarea(attrs={'rows': 3}),
            'allergies': forms.Textarea(attrs={'rows': 4}),
            'chronic_conditions': forms.Textarea(attrs={'rows': 4}),
            'past_surgeries': forms.Textarea(attrs={'rows': 4}),
            'family_medical_history': forms.Textarea(attrs={'rows': 4}),
            'immunization_history': forms.Textarea(attrs={'rows': 4}),
            'current_medications': forms.Textarea(attrs={'rows': 4}),
            'past_major_illnesses': forms.Textarea(attrs={'rows': 4}),
            'dietary_notes': forms.Textarea(attrs={'rows': 3}),
        }
        
class ReminderForm(forms.ModelForm):
    reminder_time = forms.TimeField(widget=forms.TimeInput(attrs={'type': 'time'}))
    class Meta:
        model = Reminder
        fields = ['medicine_name', 'dosage', 'reminder_time']


class ImageUploadForm(forms.Form):
    image = forms.ImageField(required=False)
    # mode: patient-basic, doctor-specialist, report-full
    MODE_CHOICES = [
        ('patient', 'Patient (basic) Summary'),
        ('doctor', 'Doctor (specialist) Summary'),
        ('report', 'Full Report (PDF/Text)')
    ]
    output_mode = forms.ChoiceField(choices=MODE_CHOICES, initial='patient', widget=forms.RadioSelect)
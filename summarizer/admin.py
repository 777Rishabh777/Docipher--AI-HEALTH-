from django.contrib import admin
from .models import Summary, Reminder, PatientProfile
from django.utils.html import format_html

# Customize the overall Admin Site Headers
admin.site.site_header = "Docipher Advanced Medical Console"
admin.site.site_title = "Docipher Admin Portal"
admin.site.index_title = "Welcome to the Medical Tech Operations Center"

@admin.register(PatientProfile)
class PatientProfileAdmin(admin.ModelAdmin):
    list_display = ('user_link', 'is_premium', 'points', 'level', 'blood_group', 'contact_number')
    list_filter = ('is_premium', 'blood_group', 'gender', 'marital_status')
    search_fields = ('user__username', 'user__email', 'contact_number', 'primary_care_physician')
    readonly_fields = ('user',)
    
    fieldsets = (
        ('Account Information', {
            'fields': ('user', 'profile_picture')
        }),
        ('Demographics & Contact', {
            'fields': ('date_of_birth', 'gender', 'marital_status', 'occupation', 'contact_number', 'address', 'emergency_contact_name', 'emergency_contact_phone')
        }),
        ('Medical Vitals & Physiology', {
            'fields': ('height', 'weight', 'blood_group')
        }),
        ('Clinical History', {
            'classes': ('collapse',),
            'fields': ('allergies', 'chronic_conditions', 'past_surgeries', 'family_medical_history', 'immunization_history', 'past_major_illnesses')
        }),
        ('Current Care', {
            'fields': ('primary_care_physician', 'physician_contact', 'current_medications', 'dietary_notes')
        }),
        ('Social Habits', {
            'classes': ('collapse',),
            'fields': ('smoking_status', 'alcohol_consumption')
        }),
        ('Platform Data (Freemium & Gamification)', {
            'fields': ('is_premium', 'ai_consultations_used', 'points', 'level')
        }),
    )

    def user_link(self, obj):
        return format_html("<b><span style='color: #0ea5e9;'>{}</span></b>", obj.user.username)
    user_link.short_description = "Patient Username"


@admin.register(Summary)
class SummaryAdmin(admin.ModelAdmin):
    list_display = ('id', 'user_link', 'mode_badge', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('user__username', 'original_text', 'summary_text')
    date_hierarchy = 'created_at'
    readonly_fields = ('created_at',)

    def user_link(self, obj):
        return format_html("<b>{}</b>", obj.user.username)
    user_link.short_description = "Patient"

    def mode_badge(self, obj):
        # original_text contains "Report Mode: patient" or similar
        return format_html("<span style='background-color:#10b981; color:white; padding:3px 8px; border-radius:12px; font-size:11px; font-weight:bold;'>{}</span>", obj.original_text[:50])
    mode_badge.short_description = "Generation Mode"


@admin.register(Reminder)
class ReminderAdmin(admin.ModelAdmin):
    list_display = ('medicine_name', 'user_link', 'reminder_time', 'is_active', 'taken_status')
    list_filter = ('is_active', 'taken_today', 'reminder_time')
    search_fields = ('medicine_name', 'user__username')
    
    def user_link(self, obj):
        return obj.user.username
    user_link.short_description = "Patient"

    def taken_status(self, obj):
        if obj.taken_today:
            return format_html("<span style='color:#10b981;'><i class='fas fa-check-circle'></i> Taken</span>")
        return format_html("<span style='color:#ef4444;'><i class='fas fa-times-circle'></i> Pending</span>")
    taken_status.short_description = "Today's Status"
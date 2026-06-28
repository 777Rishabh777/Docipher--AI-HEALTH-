
from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing_view, name='home'),
    path('dashboard/', views.dashboard_view, name='dashboard'),
    path('about/', views.about_view, name='about'),
    path('contact/', views.contact_view, name='contact'),
    path('summarizer/', views.summarizer_view, name='summarizer'),
    path('chat/', views.chatbot_view, name='chatbot'),
    path('history/', views.summary_history, name='history'),
    path('history/<int:id>/', views.summary_detail_view, name='summary_detail'),
    path('history/delete/<int:id>/', views.delete_summary_view, name='delete_summary'),
    path('profile/', views.profile_view, name='profile'),
    path('reminders/', views.reminder_view, name='reminders'),
    path('reminders/confirm/<int:id>/', views.confirm_reminder_view, name='confirm_reminder'),
    path('pricing/', views.pricing_view, name='pricing'),
    path('upgrade/', views.upgrade_premium_view, name='upgrade_premium'),
    path('rewards/', views.rewards_view, name='rewards'),
    path('games/match/', views.game_match_view, name='game_match'),
    path('games/api/add_points/', views.add_game_points, name='add_game_points'),
    path('profile/download/', views.download_profile_pdf, name='download_profile_pdf'),
    path('summarizer/download/', views.download_summary_pdf, name='download_summary_pdf'),
    
    # Legal Pages
    path('privacy/', views.privacy_policy_view, name='privacy_policy'),
    path('terms/', views.terms_of_service_view, name='terms_of_service'),
    path('hipaa/', views.hipaa_compliance_view, name='hipaa_compliance'),
    path('security/', views.security_view, name='security'),

    # Custom Admin Portal
    path('admin/login/', views.admin_login_view, name='admin_login'),
    path('admin/logout/', views.admin_logout_view, name='admin_logout'),
    path('admin/', views.custom_admin_view, name='custom_admin'),
    path('admin/users/', views.admin_users_view, name='admin_users'),
    path('admin/summaries/', views.admin_summaries_view, name='admin_summaries'),
    path('admin/reminders/', views.admin_reminders_view, name='admin_reminders'),
    path('admin/settings/', views.admin_settings_view, name='admin_settings'),
    
    # Background Tasks Endpoint for Vercel / Cron-Job.org
    path('tasks/send-reminders/', views.trigger_send_reminders, name='trigger_send_reminders'),
]

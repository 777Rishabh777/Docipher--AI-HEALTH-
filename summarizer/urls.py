
from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing_view, name='home'),
    path('about/', views.about_view, name='about'),
    path('contact/', views.contact_view, name='contact'),
    path('summarizer/', views.summarizer_view, name='summarizer'),
    path('chat/', views.chatbot_view, name='chatbot'),
    path('history/', views.summary_history, name='history'),
    path('profile/', views.profile_view, name='profile'),
    path('reminders/', views.reminder_view, name='reminders'),
    path('profile/download/', views.download_profile_pdf, name='download_profile_pdf'),
    path('summarizer/download/', views.download_summary_pdf, name='download_summary_pdf'),
]

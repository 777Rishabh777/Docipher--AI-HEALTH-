

from django.contrib import admin
from django.urls import path, include
from summarizer import views as summarizer_views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/register/', summarizer_views.register, name='register'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('', include('summarizer.urls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
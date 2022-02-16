from django.urls import path
from . import views


urlpatterns = [
    path('<int:announcementId>/', views.announcement, name='announcement'),
]

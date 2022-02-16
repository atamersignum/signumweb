from django.shortcuts import render

from announcement.models import Announcement

def announcement(request, announcementId):
    announcement = Announcement.objects.filter(id=announcementId)
    return render(request, 'announcement/announcement.html',{"announcement":announcement.first()})

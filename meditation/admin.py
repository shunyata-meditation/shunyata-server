from django.contrib import admin

from meditation.models import MeditationSession


@admin.register(MeditationSession)
class MeditationSessionAdmin(admin.ModelAdmin):
    list_display = ["id", "user", "start_time", "end_time", "duration"]
    list_filter = ["start_time", "user"]
    search_fields = ["user__username", "user__email"]
    date_hierarchy = "start_time"

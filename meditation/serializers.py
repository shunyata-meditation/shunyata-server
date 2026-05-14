from rest_framework import serializers

from meditation.models import MeditationSession


class MeditationSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeditationSession
        fields = [
            "id",
            "user",
            "start_time",
            "end_time",
            "duration",
            "meditation_type",
            "completed",
            "notes",
        ]
        read_only_fields = ["user"]

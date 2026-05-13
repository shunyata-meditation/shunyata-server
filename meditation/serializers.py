from rest_framework import serializers

from meditation.models import MeditationSession


class MeditationSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeditationSession
        fields = ["id", "user", "start_time", "end_time", "duration"]
        read_only_fields = ["user"]

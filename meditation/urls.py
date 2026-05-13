from rest_framework.routers import DefaultRouter

from meditation.views import MeditationSessionViewSet

router = DefaultRouter()
router.register("sessions", MeditationSessionViewSet, basename="meditation-session")

urlpatterns = router.urls

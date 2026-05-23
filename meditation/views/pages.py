from django.conf import settings
from django.shortcuts import render


def index(request):
    return render(request, "meditation/index.html")


def register_page(request):
    return render(request, "meditation/register.html")


def timer_page(request):
    return render(request, "meditation/timer.html")


def stats_page(request):
    return render(request, "meditation/stats.html")


def login_page(request):
    context = {"allowed_redirect_domains": settings.ALLOWED_REDIRECT_DOMAINS}
    return render(request, "meditation/login.html", context)

# src/app/urls.py

from django.urls import path
from app.controllers import user_views

urlpatterns = [
    path('users/', user_views.create_user),
    path('users/<int:user_id>/', user_views.get_user_by_id),
    path('inicio/', user_views.inicio),
]


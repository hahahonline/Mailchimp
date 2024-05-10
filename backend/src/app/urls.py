# src/app/urls.py

from django.urls import path
from app.controllers import user_views

urlpatterns = [
    path('signup/', user_views.signup, name='signup'),
    path('login/', user_views.login, name='login'),
    path('logout/', user_views.logout, name='logout'),
    path('', user_views.home, name='home'),  
    path('login_success/', user_views.login_success, name='login_success'), 
    path('signup_success/', user_views.signup_success, name='signup_success'),  # adicione esta linha
]


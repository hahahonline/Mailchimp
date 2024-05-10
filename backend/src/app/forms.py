# app/forms.py

from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from app.models.user import User

class SignUpForm(UserCreationForm):
    password1 = forms.CharField(label='Senha', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirmação de Senha', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('username', 'password1', 'password2', )
        
class LoginForm(AuthenticationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'validate',}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'validate',}))
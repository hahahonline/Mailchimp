from django.contrib import messages
from django.contrib.auth import authenticate, login as django_login, logout as django_logout
from django.shortcuts import render, redirect
from app.forms import SignUpForm, LoginForm
from django.contrib.auth import get_user_model
User = get_user_model()



def signup(request):
    storage = messages.get_messages(request)
    storage.used = True
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            if User.objects.filter(username=username).exists():
                messages.error(request, 'Usuário já existe.')
            else:
                user = form.save()
                user.is_active = True
                user.save()
                django_login(request, user)
                messages.success(request, 'Cadastro realizado com sucesso.')
                return redirect('signup_success')  # Redirecione para a página inicial após o cadastro
        else:
            for field, errors in form.errors.items():
                for error in errors:
                    messages.error(request, f"{field}: {error}")
    else:
        form = SignUpForm()
    return render(request, 'app/signup.html', {'form': form})

def login(request):
    storage = messages.get_messages(request)
    storage.used = True
    if request.method == 'POST':
        form = LoginForm(request, request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                django_login(request, user)
                messages.success(request, 'Login realizado com sucesso.')
                return redirect('login_success')
            else:
                messages.error(request, 'Login falhou. Por favor, tente novamente.')
    else:
        form = LoginForm()
    return render(request, 'app/login.html', {'form': form})

def logout(request):
    django_logout(request)
    return redirect('login')  # Redirecione para a página de login após o logout

def home(request):
    return render(request, 'app/home.html')

def signup_success(request):
    return render(request, 'app/signup_success.html')

def login_success(request):
    return render(request, 'app/login_success.html')
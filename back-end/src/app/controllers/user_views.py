# src/app/controllers/user_views.py

from django.http import JsonResponse
from django.http import HttpResponse

def create_user(request):
    # Implemente a lógica para criar um novo usuário
    return JsonResponse({'message': 'User created'}, status=201)

def get_user_by_id(request, user_id):
    # Implemente a lógica para obter um usuário por ID
    return JsonResponse({'message': f'Get user with id {user_id}'})

def inicio(request):
    return HttpResponse("Bem-vindo à página inicial!")
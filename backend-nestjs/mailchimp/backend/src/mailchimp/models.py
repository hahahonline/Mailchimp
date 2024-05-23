# mailchimp/models.py

from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
from app.models.user import User

class CustomUser(AbstractUser):
    groups = models.ManyToManyField(Group, related_name='customuser_groups')
    user_permissions = models.ManyToManyField(Permission, related_name='customuser_user_permissions')
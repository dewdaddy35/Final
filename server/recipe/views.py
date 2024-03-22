from django.shortcuts import render
from rest_framework import viewsets
from .models import Recipe
from .serializers import RecipeSerializer

# Create your views here.

# POST, GET, Get/id, PUT, PATCH, DELETE
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer



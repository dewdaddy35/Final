from django.shortcuts import render
from rest_framework import viewsets
from .models import Recipe
from .serializers import RecipeSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

# Create your views here.

# POST, GET, Get/id, PUT, PATCH, DELETE
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    @action(detail=False, methods=["GET"])
    def mine(self, request):
        if not request.user.is_authenticated:
            return Response({'status':'Bad Request. User needs to be logged in'}, status=400)
        
        liked = request.user.liked_recipes
        serializer = RecipeSerializer(liked, many=True)
        return Response(serializer.data, status=200)


    @action(detail=True, methods=['POST'])
    def like(self, request, pk=None):

        if not request.user.is_authenticated:
            return Response({'status':'Bad Request. User needs to be logged in'}, status=400)
        
        record = Recipe.objects.get(pk=pk)
        record.liked_by.add(request.user)
        record.save()

        return Response({'status': 'recipe liked'}, status=200)


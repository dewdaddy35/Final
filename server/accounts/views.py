from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomUserSerializer
from rest_framework import viewsets
from .models import CustomUser
from rest_framework.decorators import action, api_view

@api_view(["POST"])
def user_register(request):
    data = request.data

    email = data.get("email")   
    serializer = CustomUserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


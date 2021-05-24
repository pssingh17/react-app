from django.shortcuts import render

from rest_framework import viewsets
from .serializers import ContactBookSerializer
from .models import ContactBook
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class ContactBookView(viewsets.ModelViewSet):
    serializer_class = ContactBookSerializer
    queryset = ContactBook.objects.all()
    authentication_classes = [SessionAuthentication]
    # permission_classes = [IsAuthenticated]  
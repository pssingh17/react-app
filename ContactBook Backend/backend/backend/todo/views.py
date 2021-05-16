from django.shortcuts import render

from rest_framework import viewsets
from .serializers import ContactBookSerializer
from .models import ContactBook

# Create your views here.

class ContactBookView(viewsets.ModelViewSet):
    serializer_class = ContactBookSerializer
    queryset = ContactBook.objects.all()
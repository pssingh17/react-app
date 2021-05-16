from rest_framework import serializers
from .models import ContactBook

class ContactBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactBook
        fields = ('id', 'name', 'email', 'phone')
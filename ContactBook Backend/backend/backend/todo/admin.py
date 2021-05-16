from django.contrib import admin
from .models import ContactBook

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone')

# Register your models here.

admin.site.register(ContactBook, ContactAdmin)
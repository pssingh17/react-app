from django.db import models

# Create your models here.
from django.db import models

# Create your models here.

class ContactBook(models.Model):
    name = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    phone = models.CharField(max_length=12)

    def _str_(self):
        return self.name
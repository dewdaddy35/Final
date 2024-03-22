from django.db import models

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=250)
    steps = models.TextField()
    cooktime = models.CharField(max_length=250)
    method = models.CharField(max_length=250)
    ingredients = models.TextField()
    image = models.ImageField(upload_to='posts/', null=True, blank=True)


    def __str__(self):
        return self.title
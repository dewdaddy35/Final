from django.db import models


class FoodType(models.IntegerChoices):
    SEAFOOD = 1,
    PORK = 2,
    BEEF = 3,
    POULTRY = 4,
    Pizza = 5,
    Beef_Pork = 6

class CookingStyle(models.IntegerChoices):
    GRILLED = 1,
    SMOKED = 2

class SkillLevel(models.IntegerChoices):
    BEGINNER = 1,
    INTERMEDIATE = 2,
    EXPERT = 3


# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=250)
    steps = models.TextField()
    cooktime = models.CharField(max_length=250)
    image = models.ImageField(upload_to='recipes/', null=True, blank=True)    
    ingredients = models.TextField()
    food_type = models.IntegerField(choices = FoodType.choices, null=True, default=1)
    cooking_style = models.IntegerField(choices = CookingStyle.choices, null=True, default=1)
    skill_level = models.IntegerField(choices = SkillLevel.choices, null=True, default=1)


    def __str__(self):
        return self.title


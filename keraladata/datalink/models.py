from django.db import models

# Create your models here.
class coronaData(models.Model):
  date=models.DateField(primary_key=True)
  active=models.IntegerField()
  recovered=models.IntegerField()
  death=models.IntegerField()

  def __str__(self):
     return str(self.date)
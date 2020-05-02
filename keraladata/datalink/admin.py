from django.contrib import admin
from .models import coronaData
# Register your models here.
class DataappAdmin(admin.ModelAdmin):
  list_display=('date',)
  ordering=('date',)

admin.site.register(coronaData,DataappAdmin)
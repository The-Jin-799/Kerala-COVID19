from django.contrib import admin
from .models import coronaData
# Register your models here.
class DataappAdmin(admin.ModelAdmin):
  list_display=('date','active','recovered','death')
  ordering=('date',)

admin.site.register(coronaData,DataappAdmin)
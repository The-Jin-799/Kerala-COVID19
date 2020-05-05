from django.urls import path,register_converter
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from .regexconverter import DateConverter

register_converter(DateConverter, 'datefield') 

urlpatterns=[
  path('entry/',views.all_data),
  path('entry/<datefield:date>/',views.single_data),
  path('status/',views.total_status),
  path('today/',views.today),
]

urlpatterns=format_suffix_patterns(urlpatterns)
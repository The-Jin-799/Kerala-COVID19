from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import coronaData
from .serializers import coronaDataSerializer
from django.db.models import Max

# Create your views here.

@api_view(['GET'])
def all_data(request, format=None):
  data=coronaData.objects.all()
  serial=coronaDataSerializer(data,many=True)
  return Response(serial.data)

@api_view(['GET'])
def total_status(request, format=None):
   data=coronaData.objects.all()
   ta=0
   tr=0
   ca=0
   de=0
   for d in data:
      de=de+d.death
      ta=ta+d.active
      tr=tr+d.recovered
   ca=ta-tr
   return Response({'total active':ta,'total recovered':tr,'currently active':ca,'total death':de})

@api_view(['GET'])
def today(request, format=None):
   d=coronaData.objects.all().aggregate(Max('date'))
   datemax=d['date__max']
   entry=coronaData.objects.get(pk=datemax)
   serial=coronaDataSerializer(entry)
   return Response(serial.data)

@api_view(['GET'])
def single_data(request, date, format=None):
  try:
     data=coronaData.objects.get(pk=date)
  except coronaData.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
  serial=coronaDataSerializer(data)
  return Response(serial.data)
from rest_framework import serializers
from .models import coronaData

class coronaDataSerializer(serializers.ModelSerializer):
   class Meta:
       model=coronaData
       fields=['date','active','recovered','death']
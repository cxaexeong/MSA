from rest_framework import serializers
from vp.models import *


class RoomSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Room
        fields = ['id','oi_code','c_code','name','location','rating','reviews','price','start_date','end_date','imgUrl']

class FlightSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Flight
        fields = ['id','oi_code','c_code','depart_airline','depart_dep_airport','depart_dest_airport','depart_etd','depart_eta','depart_et','depart_via','return_airline','return_dep_airport','return_dest_airport','return_etd','return_eta','return_et','return_via','price','imgUrl1','imgUrl2']

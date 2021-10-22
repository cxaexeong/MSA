from rest_framework import serializers
from mypage.models import *
from vp.models import *
from vp.serializers import RoomSerializer, FlightSerializer

# HyperlinkedModelSerializer로 하면 에러나는데 이유를 모르겠음 외래키때문인가
class RoomReservationSerializer(serializers.ModelSerializer):
    # drf에서 join

    class Meta:
        model = RoomReservation
        fields = ['id','room_id','user_id','oi_code','c_code']


class FlightReservationSerializer(serializers.ModelSerializer):

    class Meta:
        model = FlightReservation
        fields = ['id','flight_id','user_id','oi_code','c_code']

class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = ['id','user_id','title','contents', 'start_date', 'end_date']
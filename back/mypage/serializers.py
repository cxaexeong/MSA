from rest_framework import serializers
from mypage.models import *
from vp.serializers import RoomSerializer, FlightSerializer

# HyperlinkedModelSerializer로 하면 에러나는데 이유를 모르겠음 외래키때문인가
class RoomReservationSerializer(serializers.ModelSerializer):
    # drf에서 join
    room_id = RoomSerializer(read_only=True)

    class Meta:
        model = RoomReservation
        fields = ['id','room_id','user_id','oi_code','c_code']


class FlightReservationSerializer(serializers.ModelSerializer):
    # drf에서 join
    flight_id = FlightSerializer(read_only=True)

    class Meta:
        model = FlightReservation
        fields = ['id','flight_id','user_id','oi_code','c_code']
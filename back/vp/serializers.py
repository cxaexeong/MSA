from rest_framework import serializers
from vp.models import *

class UserTempSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserTemp
        fields = ['id','email']

class RoomSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Room
        fields = ['id','name','location','imgUrl','ocode','icode']

# HyperlinkedModelSerializer로 하면 에러나는데 이유를 모르겠음 외래키때문인가
class RoomReservationSerializer(serializers.ModelSerializer):
    # drf에서 join
    room_id = RoomSerializer(read_only=True)

    class Meta:
        model = RoomReservation
        fields = ['id','room_id','user_id','start_date','end_date']
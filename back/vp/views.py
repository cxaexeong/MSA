from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from vp.models import *
from vp.serializers import *

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

@api_view(['GET','POST'])
def room_reserve_list(request, uid):
    # rooms = Room.objects.all()
    room_reservation = RoomReservation.objects.filter(user_id=uid)
    serializer = RoomReservationSerializer(room_reservation ,many=True)
    return Response(serializer.data)


@api_view(['DELETE'])
def room_reserve_delete(request, pk):
    room = RoomReservation.objects.get(id=pk)
    room.delete()
    return Response({"Message: Success"})

@api_view(['GET'])
def room_detail(request, uid):
    pass

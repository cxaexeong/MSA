from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from vp.models import *
from vp.serializers import *
from django.db.models import Count, Q

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

# @api_view(['GET','POST'])
# def room_reserve_list(request, uid, oi, c):
#     # rooms = Room.objects.all()
#     print(uid)
#     print(oi)
#     print(c)
#     # if oi == "empty":
#     #     room_reservation = RoomReservation.objects.filter(user_id=uid,c_code=c)
#     room_reservation = RoomReservation.objects.filter(user_id=uid, oi_code=oi, c_code=c)
#     print(room_reservation)
#     serializer = RoomReservationSerializer(room_reservation ,many=True)
#     return Response(serializer.data)
#
#
# @api_view(['DELETE'])
# def room_reserve_delete(request, pk):
#     room = RoomReservation.objects.get(id=pk)
#     room.delete()
#     return Response({"Message: Success"})

@api_view(['GET'])
def room_detail(request, uid):
    pass

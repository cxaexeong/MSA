from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from mypage.models import *
from mypage.serializers import *
from django.db.models import Count, Q

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

@api_view(['GET','POST'])
def room_reserve_list(request, uid, oi, c):
    if oi == "99" and c == "99":
        room_reservation = RoomReservation.objects.filter(user_id=uid)
    elif c == "99":
        room_reservation = RoomReservation.objects.filter(user_id=uid, oi_code=oi)
    else:
        room_reservation = RoomReservation.objects.filter(user_id=uid, oi_code=oi, c_code=c)

    print(room_reservation)

    serializer = RoomReservationSerializer(room_reservation ,many=True)
    return Response(serializer.data)

@api_view(['GET','DELETE'])
def room_reserve_delete(request,pk):
    room = RoomReservation.objects.get(id=pk)
    print(room)

    room.delete()
    return Response({"Message: Success"})

@api_view(['GET','POST'])
def flight_reserve_list(request, uid, oi, c):
    if oi == "99" and c == "99":
        flight_reservation = FlightReservation.objects.filter(user_id=uid)
    elif c == "99":
        flight_reservation = FlightReservation.objects.filter(user_id=uid, oi_code=oi)
    else:
        flight_reservation = FlightReservation.objects.filter(user_id=uid, oi_code=oi, c_code=c)

    print(flight_reservation[0])

    serializer = FlightReservationSerializer(flight_reservation ,many=True)
    print(serializer.data)

    return Response(serializer.data)

@api_view(['GET','DELETE'])
def flight_reserve_delete(request,pk):
    flight = FlightReservation.objects.get(id=pk)
    print(flight)

    flight.delete()
    return Response({"Message: Success"})


# Create your views here.

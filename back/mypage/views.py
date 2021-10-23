from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from mypage.serializers import *

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

@api_view(['GET','POST'])
def room_reserve_list(request, uid, oi, c):
    if oi == "99" and c == "99":
        room_reservation = Room.objects.filter(id__in=RoomReservation.objects.filter(user_id=uid).values('room_id'))
    elif c == "99":
        room_reservation = Room.objects.filter(id__in=RoomReservation.objects.filter(user_id=uid, oi_code=oi).values('room_id'))
    else:
        room_reservation = Room.objects.filter(id__in=RoomReservation.objects.filter(user_id=uid), oi_code=oi, c_code=c.values('room_id'))

    serializer = RoomSerializer(room_reservation ,many=True)
    return Response(serializer.data)

@api_view(['GET','DELETE'])
def room_reserve_delete(request,uid,rid):
    print(uid,rid)
    room = RoomReservation.objects.get(user_id=uid,room_id=rid)
    room.delete()
    return Response({"Message: Success"})

@api_view(['GET','POST'])
def flight_reserve_list(request, uid, oi, c):
    if oi == "99" and c == "99":
        flight_reservation = Flight.objects.filter(id__in=FlightReservation.objects.filter(user_id=uid).values('flight_id'))
    elif c == "99":
        flight_reservation = Flight.objects.filter(
            id__in=FlightReservation.objects.filter(user_id=uid, oi_code=oi).values('flight_id'))

    else:
        flight_reservation = Flight.objects.filter(id__in=FlightReservation.objects.filter(user_id=uid), oi_code=oi,
                                               c_code=c.values('flight_id'))

    serializer = FlightSerializer(flight_reservation, many=True)

    return Response(serializer.data)

@api_view(['GET','DELETE'])
def flight_reserve_delete(request,uid,fid):
    flight = FlightReservation.objects.get(user_id=uid,flight_id=fid)
    flight.delete()
    return Response({"Message: Success"})


@api_view(['GET','POST'])
def todo_list(request, uid):
    print(uid);
    todos = Todo.objects.filter(user_id=uid)
    serializer = TodoSerializer(todos, many=True)
    print(serializer.data)
    return Response(serializer.data)


@api_view(['GET'])
def todo_detail(pk):
    todo = Todo.objects.get(id=pk)
    serializer = TodoSerializer(todo, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def todo_create(request, uid):
    print(uid)
    print(request.data)
    serializer = TodoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response({"message": "Success!"})

@api_view(['PUT'])
def todo_update(request, pk):
    todo = Todo.objects.get(id=pk)
    serializer = TodoSerializer(instance=todo, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response({"message": "Success!"})


@api_view(['DELETE'])
def todo_delete(request, pk):
    print(pk)
    todo = Todo.objects.get(id=pk)
    todo.delete()
    return Response({"message": "Success!"})
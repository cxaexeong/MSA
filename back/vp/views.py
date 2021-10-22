from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from vp.models import *
from vp.serializers import *
from mypage.serializers import *
from django.db.models import Count, Q
from django.forms.models import model_to_dict

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


# 항공 전체목록 보여주기
@api_view(['GET'])
def airport_list(request, oi, c):
    # 전체목록을 불러오기 때문에 orm용어 all() 사용
    if oi == "99" and c == "99":
        airport_list = Flight.objects.all()
    elif c == "99":
        airport_list = Flight.objects.filter(oi_code=oi)
    else:
        airport_list = Flight.objects.filter(oi_code=oi, c_code=c)
    serializer = FlightSerializer(airport_list, many=True)

    # print(FlightReservation.objects.filter(user_id=2).values('flight_id'))
    # print(Flight.objects.filter(id__in=FlightReservation.objects.filter(user_id=1).values('flight_id')))
    return Response(serializer.data)

# @api_view(['POST'])
# def todo_create(request, uid):
#     print(uid)
#     print(request.data)
#     serializer = TodoSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response({"message": "Success!"})

@api_view(['POST'])
def airport_reservation(request,pk):
    # {'flight_id': '10', 'user_id': '1', 'oi_code': '01', 'c_code': '01'}
    print(request.data)
    flight = Flight.objects.get(id=pk)
    # print(model_to_dict(flight))
    reservation = {'flight_id': flight, 'user_id': '1', 'oi_code': '01', 'c_code': '01'}
    # print(reservation)
    serializer = FlightReservationSerializer(data=reservation)
    # serializer = FlightReservationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save

    return Response({"Message: Success"})

# 숙소
@api_view(['GET'])
def house_list(request, oi, c):
    print(oi, c)
    if oi == "99" and c == "99":
        house_list = Room.objects.all()
    elif c == "99":
        house_list = Room.objects.filter(oi_code=oi)
    else:
        house_list = Room.objects.filter(oi_code=oi, c_code=c)

    serializer = RoomSerializer(house_list, many=True)

    return Response(serializer.data)

@api_view(['POST'])
def house_reservation(request):
    serializer = RoomReservationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response({"Message: Success"})

@api_view(['GET'])
def airport_detail(request, uid):
    pass

@api_view(['GET'])
def room_detail(request, uid):
    pass

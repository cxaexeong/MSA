from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from mypage.serializers import *

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


@api_view(['GET'])
def airport_list(request, oi, c, start, end):
    if oi == "99" and c == "99":
        airport_list = Flight.objects.filter(depart_etd__icontains=start, return_etd__icontains=end)
    elif c == "99":
        airport_list = Flight.objects.filter(oi_code=oi, depart_etd__icontains=start, return_etd__icontains=end)
    else:
        airport_list = Flight.objects.filter(oi_code=oi, c_code=c, depart_etd__icontains=start, return_etd__icontains=end)
    serializer = FlightSerializer(airport_list, many=True)

    return Response(serializer.data)

@api_view(['POST'])
def airport_reservation(request):
    serializer = FlightReservationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response({"Message: Success"})

# 숙소
@api_view(['GET'])
def house_list(request, oi, c, start, end):
    if oi == "99" and c == "99":
        house_list = Room.objects.filter(start_date__icontains=start, end_date__icontains=end)
    elif c == "99":
        house_list = Room.objects.filter(oi_code=oi, start_date__icontains=start, end_date__icontains=end)
    else:
        house_list = Room.objects.filter(oi_code=oi, c_code=c, start_date__icontains=start, end_date__icontains=end)

    serializer = RoomSerializer(house_list, many=True)

    return Response(serializer.data)

@api_view(['POST'])
def house_reservation(request):
    print(request.data)
    serializer = RoomReservationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response({"Message: Success"})


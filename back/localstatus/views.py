from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from localstatus.serializers import *


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


@api_view(['GET'])
def localstatus_list(request,oi):
    if oi == '9':
        status_list = ProductDetail.objects.all();
    else:
        status_list = ProductDetail.objects.filter(oi_code=oi);

    serializer = LocalDetailSerializer(status_list, many=True)
    return Response(serializer.data)



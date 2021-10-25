from rest_framework import serializers
from localstatus.models import *


class LocalstatusSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'date', 'imgUrl']


class LocalDetailSerializer(serializers.ModelSerializer):
    # drf에서 join
    product_id = LocalstatusSerializer(read_only=True)
    class Meta:
        model = ProductDetail
        fields = ['id','status_code', 'oi_code', 'product_id','comment','stage']


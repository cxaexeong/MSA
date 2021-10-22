from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Product)
admin.site.register(ProductDetail)
# admin.site.register(Flight)
# admin.site.register(FlightReservation)

from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(UserTemp)
admin.site.register(Room)
admin.site.register(RoomReservation)
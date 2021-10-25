from django.urls import path

from . import views
import django.urls
urlpatterns = [
    # django.urls.path('<str:uid>/<str:oi>/<str:c>/', views.room_reserve_list, name="room_reserve_list"),
    django.urls.path('airport/<str:oi>/<str:c>/<str:start>/<str:end>/<str:s>/', views.airport_list, name="airport_list"),
    django.urls.path('house/<str:oi>/<str:c>/<str:start>/<str:end>/<str:s>/', views.house_list, name="house_list"),
    django.urls.path('airreservation/', views.airport_reservation, name="airport_reservation"),
    django.urls.path('housereservation/', views.house_reservation, name="house_reservation"),
]
from django.urls import path

from . import views
import django.urls
urlpatterns = [
    django.urls.path('<str:uid>/', views.room_reserve_list, name="room_reserve_list"),
    django.urls.path('roomreservation/delete/<int:pk>/', views.room_reserve_delete, name="room_reserve_delete"),

    # django.urls.path('<str:uid>/detail', views.room_detail, name="room_datail"),
]
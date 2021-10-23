from django.urls import path

from . import views
import django.urls

# 문자열 두개 나오면 못찾음 : ????????
urlpatterns = [
    django.urls.path('room/<int:uid>/<str:oi>/<str:c>/', views.room_reserve_list, name="room_reserve_list"),
    django.urls.path('room/delete/<int:uid>/<int:rid>/', views.room_reserve_delete, name="room_reserve_delete"),
    django.urls.path('flight/<int:uid>/<str:oi>/<str:c>/', views.flight_reserve_list, name="flight_reserve_list"),
    django.urls.path('flight/delete/<int:uid>/<int:fid>/', views.flight_reserve_delete, name="flight_reserve_delete"),
    django.urls.path('todolist/<int:uid>/', views.todo_list, name="todo_list"),
    django.urls.path('create/<int:uid>/', views.todo_create, name="todo_create"),
    django.urls.path('detail/<int:pk>/', views.todo_detail, name="todo_detail"),
    django.urls.path('update/<int:pk>/', views.todo_update, name="todo_update"),
    django.urls.path('delete/<int:pk>/', views.todo_delete, name="todo_delete"),
]
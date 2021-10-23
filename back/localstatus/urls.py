from django.urls import path

from . import views
import django.urls
urlpatterns = [
    django.urls.path('<str:oi>/', views.localstatus_list, name="localstatus_list"),
    # django.urls.path('<int:pk>/', views.localstatus_list, name="localstatus_list"),
    django.urls.path('detail/<int:pk>/', views.localstatus_detail, name="localstatus_detail"),
]
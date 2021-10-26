from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.UserList.as_view()),
    path('current/', views.current_user),
    path("auth/profile/<int:user_pk>/", views.ProfileAPI.as_view()),
    path("auth/profile/<int:user_pk>/update/", views.ProfileUpdateAPI.as_view()),
    path("auth/profile/<int:id>/delete/", views.ProfileDelteAPI.as_view()),
    path('password_reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    path('password_reset_done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('password_reset_confirm/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('password_reset_complete/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
]

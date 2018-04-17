from django.urls import path

from dogsitter import views

urlpatterns = [
    path('', views.UserProfileList.as_view()),
    path('<int:pk>/', views.UserProfileDetail.as_view()),
    path('addUserProfile/', views.AddUserProfile.as_view()),
    # path('<str:email>/', views.UserProfileDetailByEmail.as_view()),
    path('login/', views.UserProfileAuthView.as_view()),
    path('UserStatus/addUserStatus/', views.AddUserStatus.as_view()),
    path('UserStatus/AllUserStatusList/', views.UserStatusList.as_view()),
]
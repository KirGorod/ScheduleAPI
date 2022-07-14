from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    # path('workers/', views.workerList, name='workers-list'),
    #path('worker/<str:pk>/appointments/', views.customerAppointment, name='appointment'),
    path('customers/', views.CustomerListView.as_view(), name='customer-list'),
    path('customer/<str:pk>/', views.CustomerDetailView.as_view(), name='customer-detail'),
    path('schedule/', views.ScheduleDetailView.as_view(), name='schedule-detail'),
    path('workers/', views.WorkerListView.as_view(), name='worker-list'),
    path('specializations/', views.get_specializations, name='specializations'),
    path('location/', views.LocationDetailView.as_view(), name='location-list'),
    path('worker/<str:pk>/', views.WorkerDetailView.as_view(), name='worker-detail'),
    path('appointments/', views.AppointmentListView.as_view(), name='appointment-list'),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test')
    #path('add-appointment/', views.addAppointment, name='add-appointment'),
]
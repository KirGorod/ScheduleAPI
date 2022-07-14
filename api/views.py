from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from .serializers import (
    WorkerSerializer,
    AppointmentSerializer,
    AppointmentPostSerializer,
    CustomerSerializer,
    ScheduleSerializer,
    LocationSerializer)
from .models import Worker, Appointment, Customer, Schedule, Location

from .serializers import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import permission_classes

from django.contrib.auth import get_user_model
User = get_user_model()


class CustomerListView(generics.ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class CustomerDetailView(generics.RetrieveAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class ScheduleDetailView(generics.ListAPIView):
    serializer_class = ScheduleSerializer

    def get_queryset(self):
        queryset = Schedule.objects.all()
        worker = self.request.query_params.get('worker')
        location = self.request.query_params.get('location')
        if worker is not None:
            queryset = queryset.filter(worker__id=worker)
        if location is not None:
            queryset = queryset.filter(location__id=location)
        return queryset


class LocationDetailView(generics.ListAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class WorkerListView(generics.ListAPIView):
    queryset = Worker.objects.all()
    serializer_class = WorkerSerializer

    def get_queryset(self):
        queryset = Worker.objects.all()
        specialization = self.request.query_params.get('specialization')
        if specialization is not None:
            queryset = queryset.filter(specialization=specialization)
        
        return queryset


class WorkerDetailView(generics.RetrieveAPIView):
    queryset = Worker.objects.all()
    serializer_class = WorkerSerializer

@api_view(['GET'])
def get_specializations(request):
    if request.method == 'GET':
        specializations = Worker.objects.values_list('specialization', flat=True).distinct()
        print(specializations)

        return Response(list(set(specializations)))


class AppointmentListView(generics.ListAPIView):
    serializer_class = AppointmentSerializer

    def get_queryset(self):
        queryset = Appointment.objects.all()
        worker = self.request.query_params.get('worker')
        if worker is not None:
            queryset = queryset.filter(worker__id=worker)
        return queryset

    def post(self, request, *args, **kwargs):
        serializer = AppointmentPostSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    
        return Response({'message': 'Unknown error ocured.'}, status=status.HTTP_400_BAD_REQUEST)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)

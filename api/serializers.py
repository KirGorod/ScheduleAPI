from rest_framework import serializers
from rest_framework.serializers import ValidationError
from .models import Customer, Worker, Appointment, Schedule, Location

from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from datetime import datetime

from django.contrib.auth import get_user_model
User = get_user_model()


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'first_name', 'last_name', 'email']


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'


class WorkerSerializer(serializers.ModelSerializer):
    schedules = ScheduleSerializer(source='schedule_set', many=True)
    class Meta:
        model = Worker
        fields = ['id', 'first_name', 'last_name', 'specialization', 'info', 'slogan', 'avatar', 'schedules']


class AppointmentSerializer(serializers.ModelSerializer):
    customer_data = CustomerSerializer(source='customer')
    class Meta:
        model = Appointment
        fields = ['id', 'start_time', 'end_time', 'date', 'worker', 'customer_data']


class AppointmentPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'start_time', 'end_time', 'date', 'worker', 'customer']

    def validate(self, data):
        print(data)
        #days_dict = {'Sun': 6, 'Mon': 0, 'Tue': 1, 'Wed': 2, 'Thu': 3, 'Fri': 4, 'Sat': 5}
        days_dict = {6: 'Sun', 0: 'Mon', 1: 'Tue', 2: 'Wed', 3: 'Thu', 4: 'Fri', 5: 'Sat'}

        now = datetime.now()
        if now >= datetime.combine(data['date'], data['start_time']):
            raise ValidationError("You are trying to add appointment in the past... Plaese, pick another date!")

        schedules = Schedule.objects.filter(worker=data['worker'])
        weekday = data['date'].weekday()
        days = {day.weekday for day in schedules}
        if days_dict[weekday] not in days:
            raise ValidationError("Worker is not working this day...")

        schedules = schedules.filter(weekday=days_dict[weekday])
        for schedule in schedules:
            start = schedule.start_time
            end = schedule.end_time
            if start <= data['start_time'] <= end:
                continue
            else:
                raise ValidationError("Selected appointment time is not on worker's worktime, please choose another...")

        appointments = Appointment.objects.filter(date=data['date'], worker=data['worker'])
        for appointment in appointments:
            start = appointment.start_time
            end = appointment.end_time
            if (start <= data['start_time'] < end) or (start < data['end_time'] <= end):
                raise ValidationError("This appointment time is already reserved, please pick another time...")
                 
        return data



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        # ...
        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Customer
        fields = ('username', 'first_name', 'last_name', 'password', 'password2')

    def validate(self, attrs):
        print("attrs: ", attrs)
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        print("validated data: ", validated_data)
        customer = Customer.objects.create(
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )

        customer.set_password(validated_data['password'])
        customer.save()

        return customer
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError


days = (
    ('Sun', 'Sunday'),
    ('Mon', 'Monday'),
    ('Tue', 'Tuesday'),
    ('Wed', 'Wednesday'),
    ('Thu', 'Thursday'),
    ('Fri', 'Friday'),
    ('Sat', 'Saturday')
)


class User(AbstractUser):
    first_name = models.CharField('First name', max_length=100)
    last_name = models.CharField('Last name', max_length=100)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Worker(User):
    specialization = models.CharField('Specialization', max_length=100)
    slogan = models.CharField('Slogan', max_length=255, blank=True, null=True)
    session_duration = models.IntegerField(
        'Session duration (minutes)',
        null=True,
        blank=True)
    avatar = models.ImageField()
    info = models.TextField('Information', max_length=1250, blank=True)

    class Meta:
        ordering = ['specialization', 'last_name']

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Customer(User):
    class Meta:
        ordering = ['last_name']

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Appointment(models.Model):
    start_time = models.TimeField('Start time')
    end_time = models.TimeField('End time')
    date = models.DateField()
    customer = models.ForeignKey(
        Customer,
        on_delete=models.SET_NULL,
        null=True)
    worker = models.ForeignKey(Worker, on_delete=models.SET_NULL, null=True)

    class Meta:
        ordering = ['start_time']

    def __str__(self):
        return str(self.start_time)


class Location(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return f"{self.name}"


class Schedule(models.Model):
    worker = models.ForeignKey(Worker, on_delete=models.CASCADE)
    location = models.ForeignKey(
        Location,
        on_delete=models.SET_NULL,
        null=True)
    weekday = models.CharField(max_length=3, choices=days)
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
        return f"{self.worker.first_name} {self.worker.last_name} schedule: {self.weekday}, {self.start_time} - {self.end_time}"

    def clean(self):
        qs = Schedule.objects.filter(
            weekday=self.weekday,
            location=self.location)
        for item in qs:
            if item.start_time <= self.start_time <= item.end_time or item.start_time <= self.end_time <= item.end_time:
                raise ValidationError("This time is already taken by another worker at current Location...")
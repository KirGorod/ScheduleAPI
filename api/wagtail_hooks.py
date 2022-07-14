from wagtail.contrib.modeladmin.options import (
    ModelAdmin,
    ModelAdminGroup,
    modeladmin_register
)

from .models import Worker, Schedule, Location, Appointment, Customer, User


class WorkerAdmin(ModelAdmin):
    model = Worker
    search_fields = ('last_name',)
    menu_label = "Workers"  
    menu_icon = "pick" 
    menu_order = 000
    list_filter = ('specialization',)
    add_to_settings_menu = False
    exclude_from_explorer = False


class ScheduleAdmin(ModelAdmin):
    model = Schedule
    menu_label = "Schedules"  
    menu_icon = "edit" 
    menu_order = 100
    list_display = ('worker', 'location', 'weekday', 'start_time', 'end_time')
    list_filter = ('worker__specialization', 'location', 'weekday', 'worker')
    add_to_settings_menu = False
    exclude_from_explorer = False


class LocationAdmin(ModelAdmin):
    model = Location
    menu_label = "Locations"
    menu_icon = 'edit'
    menu_order = 200
    list_display = ('name',)
    add_to_settings_menu = False
    exclude_from_explorer = False


class AppointmentAdmin(ModelAdmin):
    model = Appointment
    menu_label = "Appointments"
    menu_icon = 'pick'
    menu_order = 300
    list_display = ('customer', 'worker', 'date', 'start_time', 'end_time')
    add_to_settings_menu = False
    exclude_from_explorer = False


class CustomerAdmin(ModelAdmin):
    model = Customer
    search_fields = ('last_name',)
    menu_label = 'Customers',
    menu_icon = 'pick'
    menu_order = 400
    list_display = ('first_name', 'last_name', 'email')
    add_to_settings_menu = False
    exclude_from_explorer = False


class UserAdmin(ModelAdmin):
    model = User
    menu_label = 'Users'
    menu_icon = "pick" 
    menu_order = 500
    search_fields = ('last_name',)
    list_display = ('first_name', 'last_name', 'email')
    add_to_settings_menu = False
    exclude_from_explorer = False


class WorkerGroup(ModelAdminGroup):
    menu_label = "Models" 
    menu_icon = "pick"
    menu_order = 600
    items = (
        WorkerAdmin,
        ScheduleAdmin,
        LocationAdmin,
        AppointmentAdmin,
        CustomerAdmin,
        UserAdmin)


modeladmin_register(WorkerGroup)
# ScheduleAPI

## 1. Installation: 
1. Clone project:
```git clone https://github.com/KirGorod/ScheduleAPI.git```
2. Install dependencies:
```
python -m venv venv
./venv/Scripts/activate
pip install -r requirements.txt
```
3. Configure django beckend server:
```
python manage.py makemigrations api
python manage.py migrate
python manage.py createsuperuser
```

## 2. Server startup:
1. Start backend server:
```
python manage.py runserver
```
2. Start frontend node server:
```
cd frontend/
serve -s build
```

## 3. API endpoints:
```
http://127.0.0.1:8000/api/customers/ ['GET'] - get all customers
http://127.0.0.1:8000/api/customers/<id>/ ['GET'] - get customer by id
http://127.0.0.1:8000/api/schedule/ ['GET'] - get all schedules
http://127.0.0.1:8000/api/schedule?worker=id ['GET'] - filter schedule by worker's id
http://127.0.0.1:8000/api/location/ ['GET'] - get location list
http://127.0.0.1:8000/api/workers/ ['GET'] - get worker's list
http://127.0.0.1:8000/api/worker/<id>/ ['GET'] - get single worker
http://127.0.0.1:8000/api/appointments/ ['GET'] - get appointments list
http://127.0.0.1:8000/api/token/ - get login token
http://127.0.0.1:8000/api/token/refresh/ - update token
http://127.0.0.1:8000/api/register/ ['POST'] - register customer
http://127.0.0.1:8000/api/test/ ['GET', 'POST'] - token testing endpoint
```
?offset&limit params are available

## 4. Site Administration:
1. Log in to http://127.0.0.1:8000/admin/ as superuser
2. Proceed to Models
3. Add worker's location
4. Add worker
5. Add worker's schedule

## 5. Site usage:
1. Go to http://127.0.0.1:3000/ and register User, then Log in
2. Go to http://127.0.0.1:3000/workers and click on calendar, choose day and make appointment.

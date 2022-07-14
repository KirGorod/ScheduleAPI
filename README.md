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

## 2. Usage:
1. Start backend server:
```python manage.py runserver```
2. Start frontend node server:
```
cd frontend/
serve -s build
```

from django.db import models

# Create your models here.
class RoomReservation(models.Model):
    # id 자동생성
    room_id = models.ForeignKey("vp.Room", related_name="room", on_delete=models.CASCADE, db_column="room_id")
    user_id = models.ForeignKey("vp.UserTemp", related_name="userroom", on_delete=models.CASCADE, db_column="user_id")
    oi_code = models.CharField(max_length=4)
    c_code = models.CharField(max_length=4)


class FlightReservation(models.Model):
    # id 자동생성
    flight_id = models.ForeignKey("vp.Flight", related_name="flight", on_delete=models.CASCADE, db_column="flight_id")
    user_id = models.ForeignKey("vp.UserTemp", related_name="userflight", on_delete=models.CASCADE, db_column="user_id")
    oi_code = models.CharField(max_length=4)
    c_code = models.CharField(max_length=4)


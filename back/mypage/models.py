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

class Todo(models.Model):
    user_id = models.ForeignKey("vp.UserTemp", related_name="usertodo", on_delete=models.CASCADE, db_column="user_id")
    title = models.CharField(max_length=50)
    contents = models.CharField(max_length=500)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.title

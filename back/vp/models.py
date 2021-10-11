from django.db import models

# Create your models here.
class UserTemp(models.Model):
    # 회원가입/로그인기능 구현하면 수
    # uid = models.CharField(max_length=10)
    # pw = models.CharField(max_length=10)
    email = models.CharField(max_length=20)

    def __str__(self):
        return self.email

class Room(models.Model):
    # id 자동생성
    name = models.CharField(max_length=20)
    location = models.CharField(max_length=10)
    imgUrl = models.CharField(max_length=100)
    ocode = models.CharField(max_length=4)
    icode = models.CharField(max_length=4)

    def __str__(self):
        return self.name

class RoomReservation(models.Model):
    # id 자동생성
    room_id = models.ForeignKey("Room", related_name="room", on_delete=models.CASCADE, db_column="room_id")
    user_id = models.ForeignKey("UserTemp", related_name="usertemp", on_delete=models.CASCADE, db_column="user_id")
    start_date = models.DateField()
    end_date = models.DateField()


class Flight(models.Model):
    oi_code = models.CharField(max_length=4)
    c_code = models.CharField(max_length=4)
    depart_airline = models.CharField(max_length=10)
    depart_dep_airport = models.CharField(max_length=10)
    depart_dest_airport = models.CharField(max_length=10)
    depart_etd = models.DateTimeField()
    depart_eta = models.DateTimeField()
    depart_et = models.CharField(max_length=10)
    depart_via = models.CharField(max_length=20)
    return_airline = models.CharField(max_length=10)
    return_dep_airport = models.CharField(max_length=10)
    return_dest_airport = models.CharField(max_length=10)
    return_etd = models.DateTimeField()
    return_eta = models.DateTimeField()
    return_et = models.CharField(max_length=10)
    return_via = models.CharField(max_length=20)
    price = models.CharField(max_length=10)
    imgUrl1 = models.CharField(max_length=50)
    imgUrl2 = models.CharField(max_length=50)

    def __str__(self):
        return self.depart_dest_airport
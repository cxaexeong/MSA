from django.db import models



class Room(models.Model):
    oi_code = models.CharField(max_length=4)
    c_code = models.CharField(max_length=4)
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=100)
    rating = models.FloatField()
    reviews = models.IntegerField()
    price = models.CharField(max_length=10)
    start_date = models.DateField()
    end_date = models.DateField()
    imgUrl = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Flight(models.Model):
    oi_code = models.CharField(max_length=4)
    c_code = models.CharField(max_length=4)
    depart_airline = models.CharField(max_length=20)
    depart_dep_airport = models.CharField(max_length=20)
    depart_dest_airport = models.CharField(max_length=20)
    depart_etd = models.DateTimeField()
    depart_eta = models.DateTimeField()
    depart_et = models.CharField(max_length=10)
    depart_via = models.CharField(max_length=30)
    return_airline = models.CharField(max_length=20)
    return_dep_airport = models.CharField(max_length=20)
    return_dest_airport = models.CharField(max_length=20)
    return_etd = models.DateTimeField()
    return_eta = models.DateTimeField()
    return_et = models.CharField(max_length=10)
    return_via = models.CharField(max_length=30)
    price = models.CharField(max_length=10)
    imgUrl1 = models.CharField(max_length=100)
    imgUrl2 = models.CharField(max_length=100)

    def __str__(self):
        return self.depart_dest_airport
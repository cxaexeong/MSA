from django.db import models


class Product(models.Model):
    # product_id = models.CharField(max_length=5, primary_key=True, verbose_name='국가별 아이디')
    name = models.CharField(max_length=20, verbose_name='국가명')
    date = models.DateTimeField(max_length=10, verbose_name='시행날짜')
    imgUrl = models.CharField(max_length=100, verbose_name='URL')

    def __str__(self):
        return self.name


class ProductDetail(models.Model):
    oi_code = models.CharField(max_length=4,default='')
    stage = models.CharField(max_length=10, verbose_name='단계')
    comment = models.CharField(max_length=500, verbose_name='추가설명')
    product_id = models.ForeignKey("Product", related_name="product_id",
                                   on_delete=models.CASCADE, db_column="product_id")

    def __str__(self):
        return self.stage

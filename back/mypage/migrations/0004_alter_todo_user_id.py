# Generated by Django 3.2.8 on 2021-10-22 06:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('mypage', '0003_auto_20211022_0118'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='user_id',
            field=models.ForeignKey(db_column='user_id', on_delete=django.db.models.deletion.CASCADE, related_name='usertodo', to=settings.AUTH_USER_MODEL),
        ),
    ]

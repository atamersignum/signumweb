# Generated by Django 3.2 on 2022-01-01 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('signum', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='picture',
            name='code',
            field=models.CharField(max_length=50, verbose_name='Resim Kodu'),
        ),
    ]
# Generated by Django 3.2 on 2022-02-11 09:29

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('announcement', '0004_alter_announcement_header'),
    ]

    operations = [
        migrations.AlterField(
            model_name='announcement',
            name='rich_text',
            field=ckeditor.fields.RichTextField(verbose_name='Html Metin'),
        ),
    ]

from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.




class Picture(models.Model):

    code = models.CharField(null=False, blank=False, max_length=50, verbose_name='Resim Kodu')
    header = models.CharField(null=False, blank=False, max_length=200, verbose_name="Başlık")
    file_link = models.FileField(upload_to='announcements', blank=True, null=True, verbose_name="Resim")
    isactive = models.BooleanField(null=False, blank=False, default=False, verbose_name='Aktif')
    subject = RichTextField()
    def __str__(self):
        return self.header


class Posts(models.Model):

    code = models.CharField(null=False, blank=False, max_length=50, verbose_name='Kod')
    header = models.CharField(null=False, blank=False, max_length=200, verbose_name="Başlık")
    file_link = models.FileField(upload_to='announcements', blank=True, null=True, verbose_name="Resim")
    isactive = models.BooleanField(null=False, blank=False, default=False, verbose_name='Aktif')
    subject = RichTextField()
    def __str__(self):
        return self.header
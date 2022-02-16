from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.




class Announcement(models.Model):

    header = models.CharField(null=False, blank=False, max_length=220, verbose_name="Başlık")
    text = models.TextField(null=False, blank=False, verbose_name="Duyuru Metni")
    file_link = models.FileField(upload_to='announcements', blank=True, null=True, verbose_name="Resim")
    isactive = models.BooleanField(null=False, blank=False, default=False, verbose_name='Aktif')
    rich_text = RichTextField(verbose_name='Html Metin')
    show_rich_text = models.BooleanField(null=False, blank=False, default=False, verbose_name='Tam Metni HTML Göster')
    publish_date = models.DateTimeField(null=True, blank=True,verbose_name='İlk Yayın Tarihi')
    
    def __str__(self):
        return self.header

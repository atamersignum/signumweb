from pydoc import classname
from django.urls import path
from . import views


urlpatterns = [
    path('', views.anasayfa, name='anasayfa'),
    path('alan_yonetimi/', views.alan_yonetimi, name='alan_yonetimi'),
    path('varlik_yonetimi/', views.varlik_yonetimi, name='varlik_yonetimi'),
    path('avm_yonetimi/', views.avm_yonetimi, name='avm_yonetimi'),
    path('bakim_onarim_yonetimi/', views.bakim_onarim_yonetimi, name='bakim_onarim_yonetimi'),
    path('bina_operasyonlari_ve_teknik_bakim_yonetimi/', views.bina_operasyonlari_ve_teknik_bakim_yonetimi, name='bina_operasyonlari_ve_teknik_bakim_yonetimi'),
    path('denetim_yonetimi/', views.denetim_yonetimi, name='denetim_yonetimi'),
    path('depo_malzeme_yonetimi/', views.depo_malzeme_yonetimi, name='depo_malzeme_yonetimi'),
    path('egilimler/', views.egilimler, name='egilimler'),
    path('enerji_yonetimi/', views.enerji_yonetimi, name='enerji_yonetimi'),
    path('entegre_tesis_yonetimi/', views.entegre_tesis_yonetimi, name='entegre_tesis_yonetimi'),
    path('guvenlik_yonetimi/', views.guvenlik_yonetimi, name='guvenlik_yonetimi'),
    path('haberler_ve_duyurular/', views.haberler_ve_duyurular, name='haberler_ve_duyurular'),
    path('hakedis_yonetimi/', views.hakedis_yonetimi, name='hakedis_yonetimi'),
    path('hakkimizda/', views.hakkimizda, name='hakkimizda'),
    path('hazir_entegrasyonlar/', views.hazir_entegrasyonlar, name='hazir_entegrasyonlar'),
    path('hizmet_yonetimi/', views.hizmet_yonetimi, name='hizmet_yonetimi'),
    path('is_emri_yonetimi/', views.is_emri_yonetimi, name='is_emri_yonetimi'),
    path('kariyer/', views.kariyer, name='kariyer'),
    path('merkezi_servis_masasi/', views.merkezi_servis_masasi, name='merkezi_servis_masasi'),
    path('merkezi_yardim_masasi/', views.merkezi_yardim_masasi, name='merkezi_yardim_masasi'),
    path('performans_tabanli_hizmet_sozlesme_yonetimi/', views.performans_tabanli_hizmet_sozlesme_yonetimi, name='performans_tabanli_hizmet_sozlesme_yonetimi'),
    path('personel_yonetimi/', views.personel_yonetimi, name='personel_yonetimi'),
    path('raporlama/', views.raporlama, name='raporlama'),
    path('sozlesme_yonetimi/', views.sozlesme_yonetimi, name='sozlesme_yonetimi'),
    path('windesk_platformu/', views.windesk_platformu, name='windesk_platformu'),
    path('yellowfin_bi_platform/', views.yellowfin_bi_platform, name='yellowfin_bi_platform'),
] 


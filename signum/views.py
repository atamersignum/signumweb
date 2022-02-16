from email import header
from django.shortcuts import render
from  .models import Picture, Posts
from announcement.models import Announcement
# Create your views here.
def anasayfa(request):
    announcements = Announcement.objects.filter(isactive = True).order_by("-publish_date")[:4]
    return render(request, 'signum/index.html',{"announcements":announcements})

def alan_yonetimi(request):
    return render(request, "signum/alan-yonetimi.html",{})

def varlik_yonetimi(request):
    return render(request, "signum/varlik-yonetimi.html",{})

def avm_yonetimi(request):
    return render(request, "signum/avm-yonetimi.html",{})

def bakim_onarim_yonetimi(request):
    return render(request, "signum/bakim-onarim-yonetimi.html",{})

def bina_operasyonlari_ve_teknik_bakim_yonetimi(request):
    return render(request, "signum/bina-operasyonlari-ve-teknik-bakim-yonetimi.html",{})

def denetim_yonetimi(request):
    return render(request, "signum/denetim-yonetimi.html",{})

def depo_malzeme_yonetimi(request):
    return render(request, "signum/depo-malzeme-yonetimi.html",{})

def egilimler(request):
    return render(request, "signum/egilimler.html",{})

def enerji_yonetimi(request):
    return render(request, "signum/enerji-yonetimi",{})

def entegre_tesis_yonetimi(request):
    return render(request, "signum/entegre-tesis-yonetimi.html",{})

def guvenlik_yonetimi(request):
    return render(request, "signum/guvenlik-yonetimi.html",{})

def haberler_ve_duyurular(request):
    return render(request, "signum/haberler-ve-duyurular.html",{})

def hakedis_yonetimi(request):
    return render(request, "signum/hakedis-yonetimi.html",{})

def hakkimizda(request):
    return render(request, "signum/hakkimizda.html",{})

def hazir_entegrasyonlar(request):
    return render(request, "signum/hazir-entegrasyonlar.html",{})

def hizmet_yonetimi(request):
    return render(request, "signum/hizmet-yonetimi.html",{})

def is_emri_yonetimi(request):
    return render(request, "signum/is-emri-yonetimi.html",{})

def kariyer(request):
    return render(request, "signum/kariyer.html",{})

def merkezi_servis_masasi(request):
    return render(request, "signum/merkezi-servis-masasi.html",{})

def merkezi_yardim_masasi(request):
    return render(request, "signum/merkezi-yardim-masasi.html",{})

def performans_tabanli_hizmet_sozlesme_yonetimi(request):
    return render(request, "signum/performans-tabanli-hizmet-sozlesme-yonetimi.html",{})

def personel_yonetimi(request):
    return render(request, "signum/personel-yonetimi.html",{})

def raporlama(request):
    return render(request, "signum/raporlama.html",{})

def sozlesme_yonetimi(request):
    return render(request, "signum/sozlesme_yonetimi.html",{})

def windesk_platformu(request):
    return render(request, "signum/windesk_platformu.html",{})

def yellowfin_bi_platform(request):
    return render(request, "signum/yellowfin_bi_platform.html",{})


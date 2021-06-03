from dashboard import views
from django.conf import settings
from django.views.static import serve
from django.urls import path
from django.conf.urls import url
from django.conf.urls.static import static



urlpatterns = [
    path('index3/', views.index, name='index'),
    path('network/', views.home, name='home'),
    path('modelling/', views.models, name="models"),
    path('ecoli/', views.ecoli, name="ecoli"),
    path('ecoli-model/', views.ecolimodel, name="ecolimodel"),
    path('klebsiella/', views.klebsiella, name="klebsiella"),
    path('kleb-model/', views.klebmodel, name="klebmodel"),
    path('pseudomonas/', views.pseudomonas, name="klebsiella"),
    path('pseudo-model/', views.pseudomodel, name="pseudomodel"),
    path('staphylococcus/', views.staphylococcus, name="staphylococcus"),
    path('staphylo-model/', views.staphylomodel, name="staphylomodel"),
    path('enterobacter/', views.enterobacter, name="enterobacter"),
    path('entero-model/', views.enteromodel, name="enteromodel")
]
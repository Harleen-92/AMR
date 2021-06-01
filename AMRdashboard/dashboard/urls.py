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
    path('ecoli-model/', views.ecolimodel, name="ecolimodel")
]
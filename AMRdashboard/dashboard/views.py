from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'dashboard/index3.html')

def home(request):
    return render(request, 'dashboard/network.html')

def models(request):
    return render(request, 'dashboard/modelling.html')

def ecoli(request):
    return render(request, 'dashboard/ecoli.html')

def ecolimodel(request):
    return render(request, 'dashboard/ecoli-model.html')

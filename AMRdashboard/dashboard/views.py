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

def klebsiella(request):
    return render(request, 'dashboard/klebsiella.html')

def klebmodel(request):
    return render(request, 'dashboard/kleb-model.html')

def pseudomonas(request):
    return render(request, 'dashboard/pseudomonas.html')

def pseudomodel(request):
    return render(request, 'dashboard/pseudo-model.html')

def staphylococcus(request):
    return render(request, 'dashboard/staphylococcus.html')

def staphylomodel(request):
    return render(request, 'dashboard/staphylo-model.html')

def enterobacter(request):
    return render(request, 'dashboard/enterobacter.html')

def enteromodel(request):
    return render(request, 'dashboard/entero-model.html')

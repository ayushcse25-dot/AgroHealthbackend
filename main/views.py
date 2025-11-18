from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Product, Category, Cart, CartItem

def home(request):
    context = {}
    return render(request, 'main/index.html', context)

def product_list(request):
    context = {}
    return render(request, 'main/Aiad.html', context)

def product_detail(request, pk=None):
    context = {}
    return render(request, 'main/cam.html', context)

def cart(request):
    context = {}
    return render(request, 'main/chatbot.html', context)

def about(request):
    return render(request, 'main/info.html')

def contact(request):
    return render(request, 'main/community.html')

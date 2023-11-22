from django.shortcuts import render


from rest_framework import generics
from rest_framework.viewsets import ModelViewSet
from .models import Cliente, Empresa, Arriendo
from .serializers import ArriendoSerializer, ClienteSerializer, EmpresaSerializer

class ArriendoListCreateView(ModelViewSet):
    queryset = Arriendo.objects.all()
    serializer_class = ArriendoSerializer

class ClienteListCreateView(ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class EmpresaListCreateView(ModelViewSet):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer
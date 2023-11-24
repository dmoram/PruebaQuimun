# urls.py

from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import ArriendoListCreateView, ClienteListCreateView, EmpresaListCreateView

router = SimpleRouter()
router.register(r'arriendos', ArriendoListCreateView, basename='arriendos')
router.register(r'clientes', ClienteListCreateView, basename='clientes')
router.register(r'empresas', EmpresaListCreateView, basename='empresas')


urlpatterns = [
    path('', include(router.urls)),
]

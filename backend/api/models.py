from django.db import models

# Create your models here.
class Cliente(models.Model):
    id = models.AutoField(primary_key=True)
    rut = models.CharField(max_length=10)
    name = models.CharField(max_length=50)

class Empresa(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)

class Arriendo(models.Model):
    costo_diario = models.BigIntegerField(default=0)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='arriendos', default=0)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE, related_name='arriendos', default=0)
    dias = models.BigIntegerField(default=0)

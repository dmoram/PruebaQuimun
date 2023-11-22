import json
from django.core.management.base import BaseCommand
from api.models import Cliente, Empresa, Arriendo  

# Comando para poblar la base de datos
class Command(BaseCommand):
    help = 'Populate database with data from JSON file'

    def handle(self, *args, **options):
        path_clientes = 'data/data_clientes.json'
        path_empresas = 'data/data_empresas.json'
        path_arriendos = 'data/data_arriendos.json'

        with open(path_clientes, 'r') as json_file:
            data = json.load(json_file)

            for item in data:
                cliente = Cliente(
                    id=item['id'],
                    rut=item['rut'],
                    name=item['name']
                )
                cliente.save()

        with open(path_empresas, 'r') as json_file:
            data = json.load(json_file)

            for item in data:
                empresa = Empresa(
                    id=item['id'],
                    name=item['name']
                )
                empresa.save()

        with open(path_arriendos, 'r') as json_file:
            data = json.load(json_file)

            for item in data:
                arriendo = Arriendo(
                    cliente_id=item['id_cliente'],
                    empresa_id=item['id_empresa'],
                    costo_diario=item['costo_diario'],
                    dias = item['dias']
                )
                arriendo.save()

        self.stdout.write(self.style.SUCCESS('Base de datos poblada correctamente'))

# populate_db.py
import json
from django.core.management.base import BaseCommand
from .models import Cliente, Empresa, Arriendo  # Reemplaza 'yourapp' con el nombre de tu aplicación

class Command(BaseCommand):
    help = 'Populate database with data from JSON file'

    def handle(self, *args, **options):
        path_clientes = '../data/data_clientes.json'
        path_empresas = '../data/data_empresas.json'
        path_arriendos = '../data/data_arriendos.json'

        with open(path_clientes, 'r') as json_file:
            data = json.load(json_file)

            for item in data:
                cliente = Cliente(
                    id=item['id'],
                    rut=item['rut'],
                    name=item['name']
                )
                cliente.save()

        self.stdout.write(self.style.SUCCESS('Data loaded successfully'))

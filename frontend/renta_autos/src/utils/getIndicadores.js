export function getTotArriendos(data, empresa) {
  return data.length;
}

export function getClienteMayorMonto(data, empresa) {
  return "Juanito";
}

export function getClienteMenorMonto(data, empresa) {
  return "Sideral";
}

export function getTotIngresos(data, empresa) {
  let tot_ingresos = 0;
  data.forEach((registro) => {
    tot_ingresos += registro.costo_diario * registro.dias;
  });

  return tot_ingresos;
}

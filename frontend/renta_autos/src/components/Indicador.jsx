import React from 'react';

export default function Indicador({ nombre, valor }) {
  const estiloIndicador = {
    border: '2px solid red',
    padding: '30px',
    textAlign: 'center',
    borderRadius: 10
  };

  const estiloValor = {
    fontSize: '30px', // Ajusta el tamaño del valor según tus necesidades
  };

  const estiloNombre = {
    fontSize: '20px', // Ajusta el tamaño del nombre según tus necesidades
    marginTop: '15px', // Ajusta el margen superior según tus necesidades
  };

  return (
    <div style={estiloIndicador}>
      <div style={estiloValor}>{valor}</div>
      <div style={estiloNombre}>{nombre}</div>
    </div>
  );
}

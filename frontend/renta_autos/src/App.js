import React, { useEffect, useState } from "react";
import { getClientes, getArriendos, getEmpresas } from "./api/apiRequests";
import Header from "./components/Header";
import {
  getTotArriendos,
  getClienteMayorMonto,
  getClienteMenorMonto,
  getTotIngresos,
} from "./utils/getIndicadores";
import Indicador from "./components/Indicador";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import GraficoCircular from "./components/GraficoCircular";
import GraficoBarra from "./components/GraficoBarra";

function App() {
  const [datos, setDatos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [empresas, setEmpresas] = useState([]);
  const [arriendos, setArriendos] = useState([]);
  const [totArriendos, setTotArriendos] = useState(0);
  const [clienteMayorMonto, setClienteMayorMonto] = useState("");
  const [clienteMenorMonto, setClienteMenorMonto] = useState("");
  const [totIngresos, setTotIngresos] = useState(0);
  useEffect(() => {
    async function loadData() {
      try {
        const res = await getArriendos();
        setArriendos(res.data);
        setTotArriendos(getTotArriendos(res.data, 1));
        setTotIngresos(getTotIngresos(res.data, 1));

        const res2 = await getClientes();
        setClientes(res2.data);
        setClienteMayorMonto(getClienteMayorMonto(res.data, 1));
        setClienteMenorMonto(getClienteMenorMonto(res.data, 1));

        const res3 = await getEmpresas();
        setEmpresas(res3.data);
        console.log(res3.data)
        setTotArriendos(getTotArriendos(res.data, 1));
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    }

    loadData();
  }, []);

  const indicadoresStyle = {
    backgroundColor: "#77867f",
    padding: "20px",
    textAlign: "center",
    fontSize: "18px",
    marginTop: "30px",
  };

  return (
    <>
      <Header />
      <div
        style={{
          fontFamily: "Helvetica Neue, Arial, sans-serif",
          fontSize: 25,
          fontWeight: "bold",
          color: "#edf2f4",
          marginTop: "50PX",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Dashboard de Administración
      </div>
      {/*
      <div>
        {datos.map((dato) => (
          <div key={dato.id}>
            <h1>{dato.dias}</h1>
            <p>{dato.empresa}</p>
          </div>
        ))}
        {totArriendos}
      </div>
      */}
      <div style={indicadoresStyle}>
        <h2>Indicadores</h2>
        {/* Agrega aquí los elementos de indicadores y sus estilos si es necesario */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Indicador nombre="Total arriendos mensual" valor={totArriendos} />
          <Indicador
            nombre="Cliente con mayor monto en arriendo"
            valor={clienteMayorMonto}
          />
          <Indicador
            nombre="Cliente con menor monto en arriendo"
            valor={clienteMenorMonto}
          />
          <Indicador
            nombre="Total ingresos del mes"
            valor={"$" + totIngresos}
          />
        </div>
      </div>
      <div style={indicadoresStyle}>
        <h2>Gráficos</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div style={{ width: "90%", height: "90%", padding: "50px" }}>
            <GraficoCircular empresas={empresas}/>
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <GraficoBarra />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

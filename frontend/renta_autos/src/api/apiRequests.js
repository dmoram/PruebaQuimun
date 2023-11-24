import axios from "axios";

export const getClientes = () => {
  return axios.get("http://localhost:8000/api/clientes");
};

export const getArriendos = () => {
  return axios.get("http://localhost:8000/api/arriendos");
};

export const getEmpresas = () => {
    return axios.get("http://localhost:8000/api/empresas");
  };
  

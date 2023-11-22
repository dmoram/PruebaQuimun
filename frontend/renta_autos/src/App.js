import React, {useEffect} from 'react'
import { getClientes } from './api/clientes.api'

function App() {
  useEffect(() => {
    async function loadClientes(){
      const res = await getClientes();
      console.log(res)
    }
    loadClientes();
  }, [])
  return (
    <div>Codigo Lagarto</div>
  )
}

export default App
import React, { useEffect, useState } from "react";
import { ListadoProductos } from "./ListadoProductos";
import { AgregarProducto } from "./AgregarProducto";

const App = () => {
  const [ listado, setListado ] = useState()
  const listarProductos = async() => {
    const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/tienda/productos`)
                            .then(res => res.json())
    setListado(response)
  }

  useEffect(() => {
    listarProductos()
  }, [])

  return (
    <div>
      <h1>Listado de Productos</h1>
      <AgregarProducto listarProductos={listarProductos}/>
      <ListadoProductos listadoProductos={listado} listarProductos={listarProductos}/>
    </div>
  );
}

export default App
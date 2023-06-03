import React, { useEffect, useState } from "react";
import '../estilos/App.css'
import { ListadoProductos } from "./ListadoProductos";
import { AgregarProducto } from "./AgregarProducto";
import { ModificarListado } from "./ModificarListado";

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
    <div id="app">
      <h1>Modificar Listado de Productos</h1>
      <div id="modificarListado">
        <div id="agregarProducto">
          <AgregarProducto listarProductos={listarProductos}/>
        </div>
        <div id="modListado">
          <ModificarListado setListado={setListado} listadoProductos={listado} listarProductos={listarProductos}/>
        </div>
      </div>
      <h1>Listado de Productos</h1>
      <ListadoProductos listadoProductos={listado} listarProductos={listarProductos}/>
    </div>
  );
}

export default App
import React from "react";
import { ListadoProductos } from "./ListadoProductos";
import { AgregarProducto } from "./AgregarProducto";

const App = () => {
  return (
    <div>
      <h1>Listado de Productos</h1>
      <ListadoProductos />
      <AgregarProducto />
    </div>
  );
}

export default App
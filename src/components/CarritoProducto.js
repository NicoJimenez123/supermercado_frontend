import React from 'react'
import * as carritoHandler from '../funciones/carritoHandler'

const CarritoProducto = ({listadoCarrito, actualizarCarrito}) => {
  return (
    <div id="CarritoProducto">
      <h2>
        Carrito
      </h2>
      <div>
        {
          !listadoCarrito?.length > 0
            ? <div>No hay Productos</div>
            : listadoCarrito?.map((producto, index) => (
              <div key={index}>
                <div>
                  <b>Producto</b>: {producto._id}
                </div>
                <button onClick={() => carritoHandler.eliminarProducto(producto, actualizarCarrito)}>Eliminar</button>
              </div>
            ))
        }
      </div>
      <button onClick={() => carritoHandler.eliminarCarrito(actualizarCarrito)}>Eliminar Carrito</button>
    </div>
  ) 
}

export { CarritoProducto }
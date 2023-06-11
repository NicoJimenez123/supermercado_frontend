import React from 'react'
import * as carritoHandler from '../funciones/carritoHandler'

const CarritoProducto = ({listadoCarrito, actualizarCarrito}) => {
  return (
    <div id="CarritoProducto">
      <div>
        { !listadoCarrito?.length > 0 
            ? <div> </div>
            : 
            <div>
              <h2>Carrito</h2>
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Botones</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    listadoCarrito?.map((producto, index) => (
                      <tr key={index}>
                        <td> <b>Producto</b>: {producto.nombre} </td>
                        <td>
                          <b>Cantidad</b>: {producto.cantidad}
                        </td>
                        <td>
                          <button onClick={() => carritoHandler.eliminarProducto(producto, actualizarCarrito)} >Eliminar</button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <button onClick={() => carritoHandler.eliminarCarrito(actualizarCarrito)}>Eliminar Carrito</button>
            </div>
        }
      </div>
    </div>
  )
}

export { CarritoProducto }
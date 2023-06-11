import axios from 'axios'
import React from 'react'
import { listadoDePropiedades } from '../services/config'
import { anadirProducto } from '../funciones/carritoHandler'
const ListadoProductos = ({listadoProductos, listarProductos}) => {

  const modificarStock = () => {
    let stock = prompt("Ingrese el Stock")
    return { stock }
  }


  const borrarProducto = async (productoID) => {
    let response = await axios.delete(`http://${process.env.REACT_APP_BACKEND_IP}/tienda/productos/`+ productoID).then(res => res)
    listarProductos()
    console.log(response)
  }

  const cambiarStock = async (productoID) => {
    let { stock } = modificarStock()
    let response = await axios.put(`http://${process.env.REACT_APP_BACKEND_IP}/tienda/productos/`+ productoID, {stock}).then(res => res.data)
    listarProductos()
    console.log(response)
  }

  const obtenerListadoProductos = () => {
    if(listadoProductos?.length > 0) {
      return (
        <table>
          <thead>
            <tr>
              { 
                listadoDePropiedades.map(prop => (
                  <th key={prop.propiedad}>{prop.propiedad_nombre}</th>
                ))
              }
              <th>Botones</th>
            </tr>
          </thead>
          <tbody>
            {
              listadoProductos.map(producto => (
                <tr key={producto._id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.prese}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.stock }</td>
                  <td id="botonesProducto">
                    <button onClick={() => borrarProducto(producto._id)}>Borrar Producto</button>
                    <button onClick={() => cambiarStock(producto._id)}>Modificar Stock</button>
                    <button onClick={() => anadirProducto(producto)}>Añadir al Carrito</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      )
    } else {
      return (
        <div>
          No hay Productos
        </div>
      )
    }
  }

  return (
    <div>
      {obtenerListadoProductos()}  
    </div>
  )
}

export { ListadoProductos }
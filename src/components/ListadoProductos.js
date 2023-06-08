import axios from 'axios'
import React from 'react'

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
        listadoProductos.map(producto => (
          <ul key={producto._id}>
            <li>{producto.nombre}</li>
            <li>{producto.prese}</li>
            <li>{producto.precio}</li>
            <li>{producto.stock }</li>
            <button onClick={() => borrarProducto(producto._id)}>Borrar Producto</button>
            <button onClick={() => cambiarStock(producto)}>Modificar Stock</button>
          </ul>
        ))
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
import axios from 'axios'
import React from 'react'

const ListadoProductos = ({listadoProductos, listarProductos}) => {

  const borrarProducto = async (productoID) => {
    let response = await axios.delete(`http://${process.env.REACT_APP_BACKEND_IP}/tienda/productos/`+ productoID).then(res => res.status)
    listarProductos()
    console.log(response)
  }

  const obtenerListadoProductos = () => {
    if(listadoProductos) {
      return (
        listadoProductos.map(producto => (
          <ul key={producto.id}>
            <li>{producto.nombre}</li>
            <li>{producto.prese}</li>
            <li>{producto.precio}</li>
            <li>{producto.stock ? 'Tiene Stock' : 'Sin Stock'}</li>
            <button onClick={() => borrarProducto(producto.id)}>Borrar Producto</button>
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
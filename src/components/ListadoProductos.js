import React, { useEffect, useState } from 'react'

const ListadoProductos = () => {
  const [ listado, setListado ] = useState([])
  const obtenerListado = async () => {
    const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/tienda/productos`)
    const data = await response.json()
    console.log(data)
    setListado(data)
  }
  useEffect( () => {
    obtenerListado()
  }, [])
  return (
    <div>
      <div>
        { listado.map((producto) => (
          <ul key={producto.id}>
            <li>{producto.nombre}</li>
            <li>{producto.prese}</li>
            <li>{producto.precio}</li>
            <li>{producto.stock ? 'Tiene Stock' : 'Sin Stock'}</li>
          </ul>
        ))}
      </div>  
    </div>
  )
}

export { ListadoProductos }
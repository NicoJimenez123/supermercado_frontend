import React, { useState } from 'react'
import axios from 'axios'

const AgregarProducto = () => {
  const [ producto, setProducto ] = useState({})

  const crearProducto = () => {
    let nombre = prompt("Ingrese el Nombre del Producto:")
    let prese = prompt("Ingrese el Peso")
    let precio = prompt("Ingrese el Precio")
    let stock = prompt("Ingrese el Stock")
    return { nombre, prese, precio, stock }
  }

  const añadirProducto = async() => {
    let { nombre, prese, precio, stock } = crearProducto()
    let response = await axios.post(`http://${process.env.REACT_APP_BACKEND_IP}/tienda/productos`, {
      nombre, prese, precio, stock
    }).then(res => res.data)
    setProducto(response)
  }

  return (
    <div>
      <button onClick={añadirProducto}>Añadir Producto</button>
      <div>
        Ultimo Producto agregado: {producto.nombre}
      </div>
    </div>
  )
}

export { AgregarProducto }
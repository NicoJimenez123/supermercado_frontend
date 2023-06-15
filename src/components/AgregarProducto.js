import React, { useState } from 'react'
import axios from 'axios'

const AgregarProducto = ({ listarProductos }) => {
  
  const [nombre, setNombre] = useState('');
  const [prese, setPrese] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');

  const crearProducto = () => {
    return { nombre, prese, precio, stock };
  };


const handleChange = (e) => {
  setNombre(e.currentTarget.value)
}
const handleChange2 = (e) => {
  setPrese(e.currentTarget.value)
}
const handleChange3 = (e) => {
  setPrecio(e.currentTarget.value)
}
const handleChange4 = (e) => {
  setStock(e.currentTarget.value)
}



  const añadirProducto = async() => {
    let { nombre, prese, precio, stock } = crearProducto()
    let response = await axios.post(`http://${process.env.REACT_APP_BACKEND_IP}/tienda/productos`, {
      nombre, prese, precio, stock
    }).then(res => res.data);
    listarProductos();
    
    
  }

  return (

    <div >
    <form onSubmit={añadirProducto} >
    <input value={nombre} type="text" onChange={handleChange} placeholder="Ingrese Nombre"/>
    <br/>
    <input value={prese} type="text" onChange={handleChange2} placeholder="Ingrese Presentación"/>
    <br/>
    <input value={precio} type="text" onChange={handleChange3} placeholder="Ingrese Precio"/>
    <br/>
    <input value={stock} type="text" onChange={handleChange4} placeholder="Ingrese Stock"/>
    <br/>
    <button >Cargar Producto</button > 
    </form>
    </div>

  )
}

export { AgregarProducto }
import { listadoDePropiedades } from "../services/config"

const anadirProducto = (producto, funcionActualizarCarrito) => {
  let listado = JSON.parse(localStorage.getItem('carrito')) || []
  listado.push(producto)
  localStorage.setItem('carrito', JSON.stringify(listado))
  funcionActualizarCarrito()
}

const eliminarProducto = (producto, funcionActualizarCarrito) => {
  let listado = JSON.parse(localStorage.getItem('carrito')) || []
  let p = listado.find(p => p._id === producto._id)
  listado.splice(listado.indexOf(p), 1)
  localStorage.setItem('carrito', JSON.stringify(listado))
  funcionActualizarCarrito()
}

const guardarCarrito = (listadoProductos) => {
  localStorage.setItem('carrito', JSON.stringify(listadoProductos))
}

const listarCarrito = () => {
  return JSON.parse(localStorage.getItem('carrito'))
}

const incrementarUnidadesProducto = (producto) => {
  console.log("Incrementar Producto: ", producto)
}

const decrementarUnidadesProducto = (producto) => {
  console.log("Decrementar Producto: ", producto)
}

const eliminarCarrito = (funcionActualizarCarrito) => {
  localStorage.clear()
  funcionActualizarCarrito()
}

export { anadirProducto, eliminarProducto, listarCarrito, incrementarUnidadesProducto, decrementarUnidadesProducto, guardarCarrito, eliminarCarrito }
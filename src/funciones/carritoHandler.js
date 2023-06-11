import { listadoDePropiedades } from "../services/config"

const anadirProducto = (producto) => {
  console.log("Añadir Producto: ", producto)
}

const eliminarProducto = (producto) => {
  console.log("Eliminar Producto: ", producto)
}

const listarCarrito = () => {
  console.log("Listar Productos")
}

const incrementarUnidadesProducto = (producto) => {
  console.log("Incrementar Producto: ", producto)
}

const decrementarUnidadesProducto = (producto) => {
  console.log("Decrementar Producto: ", producto)
}

export { anadirProducto, eliminarProducto, listarCarrito, incrementarUnidadesProducto, decrementarUnidadesProducto }
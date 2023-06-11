const axios = require('axios')

const apiBackend = () => {
  const api = axios.create({
    baseURL: `http://${process.env.REACT_APP_BACKEND_IP}`
  })
  return api 
}

const listadoDePropiedades = [
  {propiedad: "nombre", propiedad_nombre: "Nombre"},
  {propiedad: "prese", propiedad_nombre: "Peso"},
  {propiedad: "precio", propiedad_nombre: "Precio"},
  {propiedad: "stock", propiedad_nombre: "Stock"},
]

export { apiBackend, listadoDePropiedades }
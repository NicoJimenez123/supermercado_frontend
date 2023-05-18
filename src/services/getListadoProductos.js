const getListadoProductos = async () => {
  const { apiBackend } = require('./config')
  await apiBackend().get('/tienda/productos')
    .then(res => res.data)
}

export { getListadoProductos }
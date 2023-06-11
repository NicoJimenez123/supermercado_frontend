import React, { useState } from 'react'
import { listadoDePropiedades } from '../services/config'

const ModificarListado = ({setListado, listadoProductos, listarProductos}) => {
  const [ propiedad, setPropiedad] = useState(listadoDePropiedades[0].propiedad) // Seteo la 1ra propiedad como predeterminada
  const [ valorFiltro, setValorFiltro] = useState("")

  const filtrar = () => {
    const listaFiltrada = listadoProductos.filter(p => {
      return p[propiedad].includes(valorFiltro)
    })
    setListado(listaFiltrada)
  }

  const reiniciarFiltros = () => {
    listarProductos()
  }

  return (
    <div>
      <select name="propiedades" id='propiedades' onChange={e => setPropiedad(e.target.value)}>
        {
          listadoDePropiedades.map((p, index) =>
            <option key={index} value={p.propiedad}>{p.propiedad_nombre}</option>)
        }
      </select>
      <input name="valorFiltro" placeholder='Ingresar Valor' value={valorFiltro} onChange={e => setValorFiltro(e.target.value)}/>
      <br></br>
      <button onClick={filtrar}>Filtrar</button>
      <button onClick={reiniciarFiltros}>Reiniciar Filtrado</button>
    </div>
  )
}

export { ModificarListado }
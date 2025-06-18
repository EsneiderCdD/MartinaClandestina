import { useState } from 'react'
import DishSelector from '../DishSelector/DishSelector'
import OrderSummary from '../OrderSummary/OrderSummary'

const DayMenu = ({ dia, menu }) => {
  const [seleccion, setSeleccion] = useState({})

  const manejarSeleccion = (categoria, opcion) => {
    setSeleccion((prev) => ({
      ...prev,
      [categoria]: opcion
    }))
  }

  return (
    <div>
      <h2>Menú del {dia}</h2>

      {Object.entries(menu).map(([categoria, opciones]) => (
        <DishSelector
          key={categoria}
          categoria={categoria}
          opciones={opciones}
          seleccionActual={seleccion[categoria]}
          onSeleccionar={(opcion) => manejarSeleccion(categoria, opcion)}
        />
      ))}

      <hr />

      <OrderSummary seleccion={seleccion} dia={dia} />
      {/* <ul>
        {Object.entries(seleccion).map(([categoria, opcion]) => (
          <li key={categoria}>
            {categoria}: {opcion}
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default DayMenu

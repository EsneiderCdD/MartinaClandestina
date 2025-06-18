import { useState } from 'react'
import DishSelector from '../DishSelector/DishSelector'
import OrderSummary from '../OrderSummary/OrderSummary'
import styles from './DayMenu.module.css'

const DayMenu = ({ dia, menu }) => {
  const [seleccion, setSeleccion] = useState({})

  const manejarSeleccion = (categoria, opcion) => {
    setSeleccion((prev) => ({
      ...prev,
      [categoria]: opcion
    }))
  }

  return (
    <div className={styles.contenedor}>
      <h2 className={styles.titulo}>Menú del {dia}</h2>

      {Object.entries(menu).map(([categoria, opciones]) => (
        <div key={categoria} className={styles.bloque}>
          <div className={styles.categoria}>
            <h3 className={styles.categoriaTitulo}>{categoria}</h3>
          </div>

          <DishSelector
            categoria={categoria}
            opciones={opciones}
            seleccionActual={seleccion[categoria]}
            onSeleccionar={(opcion) => manejarSeleccion(categoria, opcion)}
          />
        </div>
      ))}

      <OrderSummary seleccion={seleccion} dia={dia} />
    </div>
  )
}

export default DayMenu

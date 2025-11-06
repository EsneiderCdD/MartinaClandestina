import { useState } from 'react'
import DishSelector from '../DishSelector/DishSelector'
import OrderSummary from '../OrderSummary/OrderSummary'
import OrderQuantitySelector from '../OrderQuantitySelector/OrderQuantitySelector'
import styles from './DayMenu.module.css'
import MyC from '../../assets/images/MyC.png'
import { useTransition } from '../../transition/TransitionContext'

const DayMenu = ({ dia, menu }) => {
  const [cantidadPedidos, setCantidadPedidos] = useState(1)
  const [selecciones, setSelecciones] = useState([{}])
  const [pedidoActivo, setPedidoActivo] = useState(0)
  const { setTargetPath } = useTransition()

  const manejarSeleccion = (categoria, opcion) => {
    setSelecciones((prev) => {
      const nuevasSelecciones = [...prev]
      nuevasSelecciones[pedidoActivo] = {
        ...nuevasSelecciones[pedidoActivo],
        [categoria]: opcion
      }
      return nuevasSelecciones
    })
  }

  const manejarCantidad = (nuevaCantidad) => {
    if (nuevaCantidad < 1) return

    setCantidadPedidos(nuevaCantidad)
    setSelecciones((prev) => {
      if (nuevaCantidad > prev.length) {
        return [...prev, ...Array(nuevaCantidad - prev.length).fill({})]
      } else {
        return prev.slice(0, nuevaCantidad)
      }
    })
    if (pedidoActivo >= nuevaCantidad) {
      setPedidoActivo(nuevaCantidad - 1)
    }
  }

  const esViernes = dia.toLowerCase() === 'viernes'

  return (
    <div className={styles.contenedor}>
      <img src={MyC} alt="Logo" className={styles.logo} />

      <button className={styles.botonAtras} onClick={() => setTargetPath('/')}>
        ←
      </button>

      <h2 className={styles.titulo}>Menú del {dia}</h2>

      <OrderQuantitySelector cantidad={cantidadPedidos} setCantidad={manejarCantidad} />

      <div className={styles.pedidosSelector}>
        {Array.from({ length: cantidadPedidos }).map((_, index) => (
          <button
            key={index}
            className={`${styles.pedidoBoton} ${pedidoActivo === index ? styles.activo : ''}`}
            onClick={() => setPedidoActivo(index)}
          >
            Pedido {index + 1}
          </button>
        ))}
      </div>

      <div className={styles.bloque}>
        {esViernes ? (
          <>
            <DishSelector
              categoria="Opción"
              opciones={[
                ...menu.MENÚ.map((op) => `MENÚ: ${op}`),
                ...menu.ESPECIAL.map((op) => `ESPECIAL: ${op}`)
              ]}
              seleccionActual={selecciones[pedidoActivo]?.['Opción ']}
              onSeleccionar={(opcion) => manejarSeleccion('Opción ', opcion)}
            />
            <DishSelector
              categoria="Bebidas"
              opciones={menu.Bebidas}
              seleccionActual={selecciones[pedidoActivo]?.['Bebidas']}
              onSeleccionar={(opcion) => manejarSeleccion('Bebidas', opcion)}
            />
          </>
        ) : (
          Object.entries(menu).map(([categoria, opciones]) => (
            <DishSelector
              key={categoria}
              categoria={categoria}
              opciones={opciones}
              seleccionActual={selecciones[pedidoActivo]?.[categoria]}
              onSeleccionar={(opcion) => manejarSeleccion(categoria, opcion)}
            />
          ))
        )}
      </div>

      <OrderSummary selecciones={selecciones} dia={dia} />
    </div>
  )
}

export default DayMenu

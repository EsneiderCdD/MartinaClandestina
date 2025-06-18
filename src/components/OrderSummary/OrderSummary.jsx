import { generarMensaje } from '../../utils/generateOrderMessage'
import styles from './OrderSummary.module.css'

const OrderSummary = ({ seleccion, dia }) => {
  const mensaje = generarMensaje(seleccion, dia)

  const pedidoIncompleto = Object.values(seleccion).some(valor => !valor)

  if (Object.keys(seleccion).length === 0) {
    return <p className={styles.alerta}>Aún no has seleccionado nada.</p>
  }

  return (
    <div className={styles.contenedor}>
      <h3 className={styles.titulo}>Resumen del Pedido</h3>

      <ul className={styles.lista}>
        {Object.entries(seleccion).map(([categoria, opcion]) => (
          <li key={categoria}>
            {categoria}: {opcion}
          </li>
        ))}
      </ul>

      {!pedidoIncompleto ? (
        <a
          href={mensaje}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.enlace}
        >
          Enviar pedido por WhatsApp
        </a>
      ) : (
        <p className={styles.alerta}>Selecciona todas las opciones para continuar.</p>
      )}
    </div>
  )
}

export default OrderSummary

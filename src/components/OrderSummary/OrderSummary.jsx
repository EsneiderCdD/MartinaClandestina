import { generarMensaje } from '../../utils/generateOrderMessage'
import styles from './OrderSummary.module.css'

const OrderSummary = ({ selecciones, dia }) => {
  const mensaje = generarMensaje(selecciones, dia)

  const pedidosIncompletos = selecciones.some(seleccion =>
    Object.values(seleccion).some(valor => !valor)
  )

  return (
    <div className={styles.contenedor}>
      <h3 className={styles.titulo}>Resumen del Pedido</h3>

      {selecciones.map((seleccion, index) => (
        <div key={index} className={styles.pedido}>
          <h4 className={styles.subtitulo}>Pedido {index + 1}</h4>
          <ul className={styles.lista}>
            {Object.entries(seleccion).map(([categoria, opcion]) => (
              <li key={categoria}>{categoria}: {opcion}</li>
            ))}
          </ul>
        </div>
      ))}

      {!pedidosIncompletos ? (
        <a
          href={mensaje}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.enlace}
        >
          Enviar pedidos por WhatsApp
        </a>
      ) : (
        <p className={styles.alerta}>Selecciona todas las opciones para todos los pedidos.</p>
      )}
    </div>
  )
}

export default OrderSummary

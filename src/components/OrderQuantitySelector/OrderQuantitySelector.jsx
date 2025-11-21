import styles from './OrderQuantitySelector.module.css'

const OrderQuantitySelector = ({ cantidad, setCantidad }) => {
  const aumentar = () => setCantidad(cantidad + 1)
  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1)
  }

  return (
    <div className={styles.selector}>
      <button onClick={disminuir} className={styles.boton}>-</button>
      <span className={styles.cantidad}>Pedido(s): {cantidad}</span>
      <button onClick={aumentar} className={styles.boton}>+</button>
    </div>
  )
}

export default OrderQuantitySelector

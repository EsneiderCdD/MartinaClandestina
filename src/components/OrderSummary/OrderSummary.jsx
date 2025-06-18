import { generarMensaje } from '../../utils/generateOrderMessage'

const OrderSummary = ({ seleccion, dia }) => {
  const mensaje = generarMensaje(seleccion, dia)

  const pedidoIncompleto = Object.values(seleccion).some(valor => !valor)

  if (Object.keys(seleccion).length === 0) {
    return <p>Aún no has seleccionado nada.</p>
  }

  return (
    <div>
      <h3>Resumen del Pedido</h3>
      <ul>
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
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: 'green',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px'
          }}
        >
          Enviar pedido por WhatsApp
        </a>
      ) : (
        <p style={{ color: 'red' }}>Selecciona todas las opciones para continuar.</p>
      )}
    </div>
  )
}

export default OrderSummary

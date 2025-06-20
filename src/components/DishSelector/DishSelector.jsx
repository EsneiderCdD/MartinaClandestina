import styles from './DishSelector.module.css'

const DishSelector = ({ categoria, opciones, seleccionActual, onSeleccionar }) => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.categoria}>
        <h3 className={styles.titulo}>{categoria.toUpperCase()}</h3>
      </div>
      <ul className={styles.lista}>
        {opciones.map((opcion, index) => (
          <li key={index}>
            <button
              className={`${styles.boton} ${
                seleccionActual === opcion ? styles.botonSeleccionado : ''
              }`}
              onClick={() => onSeleccionar(opcion)}
            >
              {opcion}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DishSelector

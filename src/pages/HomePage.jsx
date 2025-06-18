import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']

const HomePage = () => {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Selecciona el día</h1>
      <div className={styles.lista}>
        {dias.map((dia) => (
          <Link
            key={dia}
            to={`/menu/${dia}`}
            className={styles.enlace}
          >
            Menú de {dia.charAt(0).toUpperCase() + dia.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage

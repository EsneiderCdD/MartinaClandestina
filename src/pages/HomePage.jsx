import AnimatedLink from '../router/AnimatedLink'
import styles from './HomePage.module.css'
import Logo from '../assets/images/Logo.png'
import MC from '../assets/images/MC.png'

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']

const HomePage = () => {
  const hoy = new Date().getDay()
  const indiceHoy = hoy >= 1 && hoy <= 5 ? hoy - 1 : null

  return (
    <div className={styles.contenedor}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <img src={MC} className={styles.mc} />
      <div className={styles.lista}>
        <AnimatedLink to="/more" className={styles.enlace}>
          Conocer Más
        </AnimatedLink>

        {dias.map((dia, index) => (
          <AnimatedLink
            key={dia}
            to={`/menu/${dia}`}
            className={`${styles.enlace} ${index === indiceHoy ? styles.activo : ''}`}
          >
            Menú del {dia.charAt(0).toUpperCase() + dia.slice(1)}
          </AnimatedLink>
        ))}

        <AnimatedLink to="/about" className={styles.enlace}>
          Sobre Nosotras
        </AnimatedLink>
      </div>
    </div>
  )
}

export default HomePage

import AnimatedLink from '../router/AnimatedLink'
import styles from './HomePage.module.css'
import Logo from '../assets/images/logo.png'
import MC from '../assets/images/MC.png'

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']

const HomePage = () => (
  <div className={styles.contenedor}>
    <img src={Logo} alt="Logo" className={styles.logo} />
    <img src={MC} className={styles.mc} />
    <div className={styles.lista}>
      <AnimatedLink to="/more" className={styles.enlace}>
        Conocer Más
      </AnimatedLink>
      {dias.map((dia) => (
        <AnimatedLink key={dia} to={`/menu/${dia}`} className={styles.enlace}>
          Menú de {dia.charAt(0).toUpperCase() + dia.slice(1)}
        </AnimatedLink>
      ))}
      <AnimatedLink to="/about" className={styles.enlace}>
        Sobre Nosotros
      </AnimatedLink>

    </div>
  </div>
)

export default HomePage

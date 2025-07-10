import styles from '../components/DayMenu/DayMenu.module.css'
import MyC from '../assets/images/MyC.png';
const AboutPage = () => {
  return (
    <div className={styles.contenedor}>
      <img src={MyC} alt="Logo" className={styles.logo} />
      <h2 className={styles.titulo}>Sobre Nosotros</h2>

      <div className={styles.bloque}>
        <h3 className={styles.subtitulo}>Nuestra Historia</h3>
        <p>Somos un equipo apasionado por brindar los mejores menús diarios a nuestros clientes...</p>

        <h3 className={styles.subtitulo}>Nuestra Misión</h3>
        <p>Ofrecer alimentos frescos, variados y saludables con un servicio de calidad.</p>

        <h3 className={styles.subtitulo}>Nuestro Equipo</h3>
        <p>Contamos con chefs y personal comprometido en hacer de cada comida una experiencia especial.</p>
      </div>
    </div>
  )
}

export default AboutPage

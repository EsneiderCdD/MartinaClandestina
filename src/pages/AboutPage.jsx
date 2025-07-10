import styles from '../components/DayMenu/DayMenu.module.css'
import MyC from '../assets/images/MyC.png';
import martina from '../assets/images/martina.png';

const AboutPage = () => {
  return (
    <div className={styles.contenedor}>
      <img src={MyC} alt="Logo" className={styles.logo} />
      <h2 className={styles.titulo}>Sobre Nosotras</h2>

      <div className={styles.bloque}>
        <img className={styles.imagen} src={martina} alt="Imagen 1" />

       <h3 className={styles.subtitulo}>Nuestra Historia</h3>
        <p>
          Este proyecto de Cocina Saludable nace como un homenaje a Martina, nuestra bisabuela, una mujer fuerte y resiliente que, a pesar de no saber leer ni escribir, sacó adelante a su familia con amor y dedicación a través de la comida. Su ejemplo marcó profundamente a nuestra chef Mónica, quien ha perfeccionado sus habilidades culinarias a lo largo de los años, y junto a nosotras, sus hijas, aporta a este emprendimiento que honra el legado de mujeres luchadoras, combinando tradición, pasión y servicio para brindar experiencias significativas a cada cliente.
        </p>

      </div>
    </div>
  )
}

export default AboutPage

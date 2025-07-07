import styles from '../components/DayMenu/DayMenu.module.css'

const MoreInfoPage = () => {
  return (
    <div className={styles.contenedor}>
      <h2 className={styles.titulo}>Conocer Más</h2>

      <div className={styles.bloque}>
        <h3 className={styles.subtitulo}>Nuestros Ingredientes</h3>
        <p>Seleccionamos cuidadosamente cada ingrediente para garantizar frescura y calidad.</p>

        <h3 className={styles.subtitulo}>Procesos de Cocina</h3>
        <p>Nuestros procesos siguen estándares de seguridad e higiene, asegurando platos deliciosos y saludables.</p>

        <h3 className={styles.subtitulo}>Compromiso con el Cliente</h3>
        <p>Nos esforzamos cada día para mejorar nuestro servicio y superar las expectativas de nuestros clientes.</p>
      </div>
    </div>
  )
}

export default MoreInfoPage

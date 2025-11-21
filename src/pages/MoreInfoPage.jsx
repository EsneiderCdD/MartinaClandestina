import styles from './MoreInfoPage.module.css'
import MC1 from '../assets/images/MC1.webp';
import MC4 from '../assets/images/MC4.webp';
import MC3 from '../assets/images/MC3.webp';
import MC5 from '../assets/images/MC5.webp';
import MC6 from '../assets/images/MC6.webp';
import MC7 from '../assets/images/MC7.webp';
import MC8 from '../assets/images/MC8.webp';
import MC9 from '../assets/images/MC9.webp';
import MyC from '../assets/images/MyC.png';
import { useTransition } from '../transition/TransitionContext';

const MoreInfoPage = () => {
  const { setTargetPath } = useTransition();

  return (
    <div className={styles.contenedor}>
      <img src={MyC} alt="Logo" className={styles.logo} />

      <button className={styles.botonAtras} onClick={() => setTargetPath('/')}>
        ←
      </button>

      <h2 className={styles.titulo}>Conocer Más</h2>

      <div className={styles.bloque}>
        <img className={styles.imagen} src={MC1} alt="Imagen 1" />
        <img className={styles.imagen} src={MC4} alt="Imagen 2" />
      </div>

      <div className={styles.bloque}>
        <img className={styles.imagen} src={MC3} alt="Imagen 3" />
        <img className={styles.imagen} src={MC5} alt="Imagen 4" />
      </div>

      <div className={styles.bloque}>
        <img className={styles.imagen} src={MC6} alt="Imagen 5" />
        <img className={styles.imagen} src={MC7} alt="Imagen 6" />
      </div>

      <div className={styles.bloque}>
        <img className={styles.imagen} src={MC8} alt="Imagen 7" />
        <img className={styles.imagen} src={MC9} alt="Imagen 8" />
      </div>
    </div>
  )
}

export default MoreInfoPage

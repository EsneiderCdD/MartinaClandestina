// src/transition/TransitionOverlay.jsx

import { AnimatePresence, motion } from 'framer-motion'
import styles from './TransitionOverlay.module.css'
import Logo from '../assets/images/Logo.png'   // ← importa tu logo aquí
import { useTransition } from './TransitionContext'

const TransitionOverlay = ({ show }) => {
  const { targetPath } = useTransition()

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.overlay}
          initial={{ y: '-100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className={styles.logoContainer}>
            <img src={Logo} alt="Logo" className={styles.logo} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TransitionOverlay

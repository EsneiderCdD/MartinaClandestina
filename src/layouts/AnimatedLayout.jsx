import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTransition } from '../transition/TransitionContext'
import TransitionOverlay from '../transition/TransitionOverlay'

const AnimatedLayout = ({ children }) => {
  const navigate = useNavigate()
  const { targetPath, setTargetPath } = useTransition()
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    if (!targetPath) return

    setShowOverlay(true)

    const navTimer = setTimeout(() => {
      navigate(targetPath)
    }, 600)

    const hideTimer = setTimeout(() => {
      setShowOverlay(false)
      setTargetPath(null)
    }, 1200)

    return () => {
      clearTimeout(navTimer)
      clearTimeout(hideTimer)
    }
  }, [targetPath])

  return (
    <>
      <TransitionOverlay show={showOverlay} />
      {children}
    </>
  )
}

export default AnimatedLayout

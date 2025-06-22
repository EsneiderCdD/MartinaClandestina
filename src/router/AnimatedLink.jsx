import { useTransition } from '../transition/TransitionContext'

const AnimatedLink = ({ to, children, className }) => {
  const { setTargetPath } = useTransition()

  const handleClick = (e) => {
    e.preventDefault()
    setTargetPath(to)
  }

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

export default AnimatedLink

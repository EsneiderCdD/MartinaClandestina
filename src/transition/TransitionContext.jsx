import { createContext, useState, useContext } from 'react'

const TransitionContext = createContext()

export const TransitionProvider = ({ children }) => {
  const [targetPath, setTargetPath] = useState(null)
  return (
    <TransitionContext.Provider value={{ targetPath, setTargetPath }}>
      {children}
    </TransitionContext.Provider>
  )
}

export const useTransition = () => useContext(TransitionContext)

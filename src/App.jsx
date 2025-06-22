import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MenuPage from './pages/MenuPage'
import AnimatedLayout from './layouts/AnimatedLayout'
import { TransitionProvider } from './transition/TransitionContext'

function App() {
  return (
    <TransitionProvider>
      <AnimatedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu/:dia" element={<MenuPage />} />
        </Routes>
      </AnimatedLayout>
    </TransitionProvider>
  )
}

export default App

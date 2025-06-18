import { useParams } from 'react-router-dom'
import { menus } from '../data/menus'
import DayMenu from '../components/DayMenu/DayMenu'

const MenuPage = () => {
  const { dia } = useParams()
  const menu = menus[dia]

  if (!menu) {
    return (
      <div>
        <h1>Menú no encontrado</h1>
        <p>El menú para el día "{dia}" no está disponible.</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Menú para {dia}</h1>
      <DayMenu dia={dia} menu={menu} />
    </div>
  )
}

export default MenuPage

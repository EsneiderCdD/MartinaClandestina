import { useParams } from "react-router-dom";
import { menus } from "../data/menus";
import DayMenu from '../components/DayMenu';

const MenuPage = () => {
    const { dia } = useParams()
    const menu = menus[dia]

    if (!menu) return <h1>Menu no encontrado</h1>

    return (
        <div>
            <h1>
                Menú del dia: {dia}
            </h1>
            <DayMenu menu={menu} />
        </div>
    )
}
export default MenuPage
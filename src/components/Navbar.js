import {Link} from 'react-router-dom'
import pokemon from 'pokemontcgsdk'
const Navbar = ({pokemon}) => {
    return (
        <div>
            <ul>
                <li>
                    <Link to ={"/"}>Home</Link>
                </li>
                <li>
                    <Link to ={"/cards"}>Productos</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;
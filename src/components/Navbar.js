import { Link } from "react-router-dom";
import pokemon from "pokemontcgsdk";
import Logo from "./Logo";
import "./navbar.css";
const Navbar = ({ pokemon }) => {
    return (
        <header className="header">
            <nav className="navbar">
                <Link to={"/"}>
                    <Logo />
                </Link>
                <ul className="nav-link-container">
                    <li className="nav-link">
                        <Link to={"/cards"}>Productos</Link>
                    </li>
                    <li className="nav-link">
                        <Link to={"/Cart"}>Carrito</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Navbar;

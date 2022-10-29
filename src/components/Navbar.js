import { Link } from "react-router-dom";
import pokemon from "pokemontcgsdk";
import Logo from "./Logo";
import '../App.css'
import img from '../img/img'
const Navbar = ({ pokemon }) => {
    return (
        <header>
            <nav className="bg-menu movil sticky-top bg-nav">
                <Link to={"/"}>
                    <Logo />
                </Link>
                <ul className="nav-link-container">
                    <li className="nav-link">
                        <Link to={"/cards"} className='font-mod'>Productos</Link>
                    </li>
                    <li class="cart-container-mod">
                        <Link to={"/Cart"} className=' carthero__cta'><img src={img.cart} className='cart-img'/></Link>
                    </li>
                </ul>
            </nav>
        </header>
        /*
        <nav class="navbar navbar-expand-lg navbar-light bg-menu movil sticky-top">
            <div class="container-fluid">
              <a href="../index.html" class="logo"><img src="../assets/img/logo2.png" alt="" class="logo"></a>
                <button class="navbar-toggler border-nav bg-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav align-items-center bg-nav">
                        <li class="nav-item">
                            <a class="nav-link font-mod" href="#">Cartas</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link font-mod" href="#">Accesorios</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link font-mod" href="#">Contacto</a>
                        </li>
                        <li class="cart-container-mod">
                          <a class="cart hero__cta" id="open">
                            <img src="../assets/img/bx-cart.svg" alt="" class="cart-img">
                            <span class="cart-total">0</span>
                          </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        */
    );
};
export default Navbar;

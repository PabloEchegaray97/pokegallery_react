import { Link } from "react-router-dom";

import Logo from "./Logo";
import '../App.css'
import img from '../img/img'
import { CartContext } from '../context/CartContext'
import {useContext } from 'react';
const Navbar = () => {
    const {cartLenght} = useContext(CartContext);
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-menu movil sticky-top">
            <div className="container-fluid">
              <Link to={"/"}>
                    <Logo />
                </Link>
                <button className="navbar-toggler border-nav bg-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center bg-nav">
                        <li className="nav-item">
                            <Link to={"/Products"} className=' nav-link font-mod'>Productos</Link>
                        </li>
                        
                        <li className="cart-container-mod">
                          <Link to={"/Cart"} className=' carthero__cta'>
                            <img src={img.cart} alt="" className="cart-img"/>
                            <span className="cart-total">{cartLenght}</span>
                          </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>
        
    );
};
export default Navbar;

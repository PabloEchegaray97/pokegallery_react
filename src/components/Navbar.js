import { Link } from "react-router-dom";
import pokemon from "pokemontcgsdk";
import Logo from "./Logo";
import '../App.css'
import img from '../img/img'
import { CartContext } from '../context/CartContext'
import { useState, useContext } from 'react';
const Navbar = ({ pokemon }) => {
    const {cartLenght} = useContext(CartContext);
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-menu movil sticky-top">
            <div class="container-fluid">
              <Link to={"/"}>
                    <Logo />
                </Link>
                <button class="navbar-toggler border-nav bg-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav align-items-center bg-nav">
                        <li class="nav-item">
                            <Link to={"/cards"} className=' nav-link font-mod'>Productos</Link>
                        </li>
                        
                        <li class="cart-container-mod">
                          <Link to={"/Cart"} className=' carthero__cta'>
                            <img src={img.cart} alt="" class="cart-img"/>
                            <span class="cart-total">{cartLenght}</span>
                          </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>
        /*
        <nav class="navbar navbar-expand-lg navbar-light bg-menu movil sticky-top">
            <div class="container-fluid">
              <Link to={"/"}>
                    <Logo />
                </Link>
                <button class="navbar-toggler border-nav bg-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav align-items-center bg-nav">
                        <li class="nav-item">
                            <Link to={"/cards"} className=' nav-link font-mod'>Productos</Link>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link font-mod" href="#">Accesorios</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link font-mod" href="#">Contacto</a>
                        </li>
                        <li class="cart-container-mod">
                          <Link to={"/Cart"} className=' carthero__cta'>
                            <img src={img.cart} alt="" class="cart-img">
                            <span class="cart-total">0</span>
                          </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        */
    );
};
export default Navbar;

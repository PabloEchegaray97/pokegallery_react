import img from '../img/img'
import '../App.css'

import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-text-container">
                    <h2 className="hero-title">Tu colección de cartas pokémon en un solo lugar</h2>

                </div>
                <div className="container-img">
                    <img src={img.pikachu_gif} alt="" className="hero-img" />
                </div>

            </div>

            <div className="banner">
                <img src={img.banner_silver_tempest} alt="" className="banner-img" />
                <h4 className="title">¡Descubre los ultimos lanzamientos!</h4>
                <Link to={`/cards`}><button class="banner-btn">VER CARTAS</button></Link>
            </div>
            <div className="banner banner-2">
                <img src={img.banner_pin_snorlax} alt="" className="banner-img" />
                <div className="title-abs">
                    <h4 className="title">¿Necesitas un pin de snorlax mas grande? Te cubrimos</h4>
                    <button className="banner-btn banner-btn-abs">COMPRAR</button>
                </div>
            </div>




            <h4 className="title title-bold">Explora mas productos</h4>
            <div className="more-products">
                <div className="btn">
                    <div className="product-container">
                        <div className="img-container">
                            <img src={img.juguetes} alt="" className="product-img" />
                        </div>
                        <span className="product-text">JUGUETES</span>
                    </div>
                </div>
                <div className='btn'>
                    <div className="product-container">
                        <div className="img-container img-container-mod">
                            <img src={img.pins} alt="" className="product-img" />
                        </div>
                        <span className="product-text">PINS</span>
                    </div>
                </div>
                <Link to='/cards' className='btn'>
                    <div className="product-container">
                        <div className="img-container img-container-mod2">
                            <img src={img.cartas} alt="" className="product-img" />
                        </div>
                        <span className="product-text">CARTAS</span>
                    </div>
                </Link>
                <div className='btn'>
                    <div className="product-container">
                        <div className="img-container img-container-mod3">
                            <img src={img.peluches} alt="" className="product-img" />
                        </div>
                        <span className="product-text">PELUCHES</span>
                    </div>
                </div>
                
            </div>
        
        </>
    )
}
export default Home;
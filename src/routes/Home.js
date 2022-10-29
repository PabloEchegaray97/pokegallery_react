import img from '../img/img'
import '../App.css'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <>
            <div class="hero">
                <div class="hero-text-container">
                    <h2 class="hero-title">Tu colección de cartas pokémon en un solo lugar</h2>

                </div>
                <div class="container-img">
                    <img src={img.pikachu_gif} alt="" class="hero-img" />
                </div>

            </div>

            <div class="banner">
                <img src={img.banner_silver_tempest} alt="" class="banner-img" />
                <h4 class="title">¡Descubre los ultimos lanzamientos!</h4>
                <a href="./pages/cards.html"><button class="banner-btn">VER CARTAS</button></a>
            </div>
            <div class="banner banner-2">
                <img src={img.banner_pin_snorlax} alt="" class="banner-img" />
                <div class="title-abs">
                    <h4 class="title">¿Necesitas un pin de snorlax mas grande? Te cubrimos</h4>
                    <button class="banner-btn banner-btn-abs">COMPRAR</button>
                </div>
            </div>




            <h4 class="title title-bold">Explora mas productos</h4>
            <div class="more-products">
                <a href="#">
                    <div class="product-container">
                        <div class="img-container">
                            <img src={img.juguetes} alt="" class="product-img" />
                        </div>
                        <span class="product-text">JUGUETES</span>
                    </div>
                </a>
                <a href="#">
                    <div class="product-container">
                        <div class="img-container img-container-mod">
                            <img src={img.pins} alt="" class="product-img" />
                        </div>
                        <span class="product-text">PINS</span>
                    </div>
                </a>
                <a href="./pages/cards.html">
                    <div class="product-container">
                        <div class="img-container img-container-mod2">
                            <img src={img.cartas} alt="" class="product-img" />
                        </div>
                        <span class="product-text">CARTAS</span>
                    </div>
                </a>
                <a href="#">
                    <div class="product-container">
                        <div class="img-container img-container-mod3">
                            <img src={img.peluches} alt="" class="product-img" />
                        </div>
                        <span class="product-text">PELUCHES</span>
                    </div>
                </a>
            </div>
        
        </>
    )
}
export default Home;
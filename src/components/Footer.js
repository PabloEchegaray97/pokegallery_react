import 'boxicons'
import '../App.css'
import '../img/img'
import img from '../img/img'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact">
                <div className="logo-container">

                    <img src={img.pokeball_gif} alt="" className="logo-footer"/>
                        <span className="logo-title">PokeGallery</span>
                </div>
                <ul className="list">


                    <li className="list__item"><i className='bx bxs-map'></i>San Martín 1923 - Ciudad de Mendoza</li>
                    <li className="list__item"><i className='bx bxs-phone' ></i>+54 0800 000 000</li>
                    <li className="list__item"><i className='bx bxs-envelope' ></i>pokegallery@unmail.com</li>
                </ul>
            </div>
            <div className="footer-section">
                <h5 className="footer-title">Productos</h5>
                <ul className="list">
                    <li className="list__item"><div><Link to='/cards' className='link-footer'>Cartas</Link></div></li>
                    <li className="list__item"><div>Juguetes</div></li>
                    <li className="list__item"><div>Llaveros</div></li>
                    <li className="list__item"><div>Accesorios</div></li>
                    <li className="list__item"><div>Peluches</div></li>
                </ul>
            </div>
            <div className="footer-section">
                <h5 className="footer-title">Social</h5>
                <div className="footer-links">
                <i class='bx bx-mod bxl-linkedin-square'></i>
                <i class='bx bx-mod bxl-github'></i>
                <i class='bx bx-mod bxl-instagram-alt'></i>
                


                </div>
            </div>
        </footer>
    )
}
export default Footer;
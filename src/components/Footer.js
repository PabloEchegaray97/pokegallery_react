import 'boxicons'
import '../App.css'
import '../img/img'
import img from '../img/img'

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
                    <li className="list__item"><a href="#" >Cartas</a></li>
                    <li className="list__item"><a href="#" >Juguetes</a></li>
                    <li className="list__item"><a href="#" >Llaveros</a></li>
                    <li className="list__item"><a href="#" >Accesorios</a></li>
                    <li className="list__item"><a href="#" >Peluches</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h5 className="footer-title">Social</h5>
                <div className="footer-links">
                <box-icon name='linkedin-square' type='logo' color='#ffffff' size='lg' ></box-icon>
                <box-icon name='github' type='logo' color='#ffffff' size='lg'></box-icon>
                <box-icon name='instagram' type='logo' color='#ffffff' size='lg'></box-icon>


                </div>
            </div>
        </footer>
    )
}
export default Footer;
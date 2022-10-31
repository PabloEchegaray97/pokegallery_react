import img from '../img/img'
const Banner = () => {
    return(
        <div className="banner">
            <img src={img.banner_silver_tempest} alt="" className="banner-img"/>
            <h4 className="title">¡Nuestros ultimos lanzamientos!</h4>

        </div>
    )
}
export default Banner;
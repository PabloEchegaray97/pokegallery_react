import { Link } from 'react-router-dom';
const Item = ({item}) => {
    return(
        <div className="card card-mod">
                        <div className="img">
                            <img className="img-item" src={item.img} alt=""/>
                        </div>
                        <span className="card-name">{item.name}</span>
                        
                        <div className="card-text">
                            <span>$<span className="price-tag">{item.price}</span></span>
                            <p className ="card-title">{item.name}</p>
                        </div>
                        <Link to= {`/Detail/TCG-cards/${item}`}>Ir a detalle</Link>

        </div>
    )
}
export default Item;
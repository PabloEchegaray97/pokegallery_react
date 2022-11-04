import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { CartContext } from '../../context/CartContext'

const Item = ({item}) => {

    const { addProductToCart } = useContext(CartContext);

    const buttonClickHandler = () => {

        addProductToCart({
            id: item.id,
            name: item.name,
            price: item.price,

        }, 1);


    }


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
                        <Link to= {`/TCG-cards/${item.id}`}>Ir a detalle</Link>
                        <button className="agregar-carrito add-to" id="${element.id}" onClick={buttonClickHandler}><span className="prueba"></span>Adquirir</button>
        </div>
    )
}
export default Item;
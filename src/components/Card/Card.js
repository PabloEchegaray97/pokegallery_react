import '../../App.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { CartContext } from '../../context/CartContext'

const Card = ({ pokemon }) => {

    const { addProductToCart } = useContext(CartContext);

    const buttonClickHandler = () => {

        addProductToCart({
            id: pokemon.id,
            name: pokemon.name,
            price: pokemon.cardmarket.prices.averageSellPrice,

        }, 1);


    }
    const classesImg = `img ${pokemon.rarity}`
    const classesRarity = `rarity ${pokemon.rarity}`
    return (
        
        <div className="card">
                        <div className={classesImg}>
                            <img className="img-item" src={pokemon.images.small} alt=""/>
                        </div>
                        <span className="card-name">{pokemon.name}</span>
                        <div className={classesRarity}>
                            {pokemon.rarity}
                        </div>
                        <div className="card-text">
                            <span>$<span className="price-tag">${pokemon.cardmarket.prices.trendPrice}</span></span>
                            <p className ="card-title">{pokemon.name}</p>
                        </div>
                            <Link to= {`/Detail/${pokemon.id}`}>Ir a detalle</Link>
                        <button className="agregar-carrito add-to" id="${element.id}" onClick={buttonClickHandler}><span className="prueba"></span>Adquirir</button>
        </div>    
    );

}
export default Card;
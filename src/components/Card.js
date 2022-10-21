import './Card.css';
import { Link } from 'react-router-dom';
import {useState} from 'react';
const Card = ({pokemon}) => {

    const [product, setProduct]= useState([]);

    const addItem = (item) => {
        console.log(item.name)
        setProduct([...product, item.name]);
    }

    const buttonClickHandler = () => {
        addItem(pokemon)
        console.log("agregue:"+ pokemon.name);
      
    }
    return(
    <div>
    <div className='card'>
        <div className ="card-img-container">
        <img  className="card-img" src={pokemon.images.small} />
        </div>
        <span className='card-rarity'>{pokemon.rarity}</span>
        <span className="card-title">{pokemon.name}</span>
        <div>
            <span>$</span><span className='card-price'>{pokemon.cardmarket.prices.lowPrice}</span>
        </div>
        
        <Link to ={`/detail/${pokemon.id}`}>Ir a detalle</Link>
        <button className="agregar-carrito add-to" id="${cardId}" onClick={buttonClickHandler}><span className="prueba" id="${idPokeball}"></span>Adquirir</button>
    </div>
    <div>
        Tests:
        <span>{product}</span>
    </div>
    </div>
    );

}
export default Card;
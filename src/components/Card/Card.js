import './Card.css';
import { Link } from 'react-router-dom';
import {useState, useContext} from 'react';

import {CartContext} from '../../context/CartContext'

const Card = ({pokemon}) => {

    // const [product, setProduct]= useState([]);

    // const addItem = (item) => {
    //     console.log(item)
    //     setProduct([...product, item]);
    // }

    // const buttonClickHandler = () => {
    //     addItem(pokemon)
    //     console.log("agregue:"+ pokemon.name);
      
    // }
    
    const {addProductToCart} = useContext (CartContext);

    const buttonClickHandler = () => {
        
        addProductToCart({
            id: pokemon.id,
            name:pokemon.name,
            price: pokemon.cardmarket.prices.averageSellPrice,
           
        }, 1);


    }

    return(
    
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
        <button className="agregar-carrito add-to" id="${cardId}" onClick={buttonClickHandler} ><span className="prueba" id="${idPokeball}"></span>Adquirir</button>
        
    </div>
    
    
    );

}
export default Card;
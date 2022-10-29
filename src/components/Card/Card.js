import '../../App.css';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

import { CartContext } from '../../context/CartContext'

const Card = ({ pokemon }) => {

    // const [product, setProduct]= useState([]);

    // const addItem = (item) => {
    //     console.log(item)
    //     setProduct([...product, item]);
    // }

    // const buttonClickHandler = () => {
    //     addItem(pokemon)
    //     console.log("agregue:"+ pokemon.name);

    // }

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
        

        
        <div class="card">
                        <div className={classesImg}>
                            <img class="img-item" src={pokemon.images.small} alt=""/>
                        </div>
                        <span class="card-name">{pokemon.name}</span>
                        <div class={classesRarity}>
                            {pokemon.rarity}
                        </div>
                        <div class="card-text">
                            <span>$<span class="price-tag">${pokemon.cardmarket.prices.trendPrice}</span></span>
                            <p class ="card-title">{pokemon.name}</p>
                        </div>
                        <button class="agregar-carrito add-to" id="${element.id}"><span class="prueba"></span>Adquirir</button>
        </div>
        
        /*
        <div class="card">
                        <div class=["img", {pokemon.rarity}]>
                            <img class="img-item" src={pokemon.images.small} alt="">
                        </div>
                        <span class="card-name">{pokemon.name}</span>
                        <div class=["rarity",{pokemon.rarity}]>
                            {pokemon.rarity}
                        </div>
                        <div class="card-text">
                            <span>$<span class="price-tag">{pokemon.cardmarket.prices.trendPrice}</span></span>
                            <p class ="card-title">{pokemon.name}</p>
                        </div>
                        <button class="agregar-carrito add-to" id="${element.id}"><span class="prueba" id="${idPokeball}"></span>Adquirir</button>
        </div>
        
        
        
        */
        
        
        
    );

}
export default Card;
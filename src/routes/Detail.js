import './detail.scss'
import {CartContext} from '../context/CartContext';
import { useContext} from 'react';


let quantity = 0;
const Detail = ({pokemon}) => {
    const classesImg = `img ${pokemon.rarity}`
    const classesRarity = `rarity ${pokemon.rarity}`
    const {addProductToCart} = useContext(CartContext);
    if (pokemon===undefined) {
        return <p>cargando...</p>
    }

    const inputChangeHandler = (ev) => {
        if (ev.target.value !== 'Cantidad') {
            quantity = ev.target.value;
        }
    }
    const buttonClickHandler = () => {
        if (quantity == 0 || quantity == 'Cantidad') {
        console.log("no hay cantidad seleccionada")
            alert("Debes seleccionar una cantidad para poder añadir el articulo al carrito")
        } else {
            
            addProductToCart(
                {
                    id: pokemon.id,
                    name:pokemon.name,
                    price: pokemon.cardmarket.prices.averageSellPrice,

                },parseInt(quantity))
        }
    }
    
    return (
        <>
        <div className='card-detail'>
            
            <h3 className='card-detail-title'>{pokemon.name}</h3>
            <div className={classesImg}>
            <img src ={pokemon.images?.small} className='card-img card-img-mod img-item' />
            </div>
            <div>

            <select className="form-select" onClick={inputChangeHandler} aria-label="Default select example">
                            <option defaultValue="0">Cantidad</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
            </select>
            <button className="agregar-carrito add-to" id="${cardId}" onClick={buttonClickHandler} ><span className="prueba" id="${idPokeball}"></span>Adquirir</button>
            </div>
        </div>
        </>

        /* 
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
                            <select className="form-select" onClick={inputChangeHandler} aria-label="Default select example">
                            <option defaultValue="0">Cantidad</option>
                            <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        <button className="agregar-carrito add-to" id="${element.id}" onClick={buttonClickHandler}><span className="prueba"></span>Adquirir</button>
        </div>    
        
        
        
        */
    )
}
export default Detail;
import './detail.scss'
import {CartContext} from '../context/CartContext';
import { useContext} from 'react';


let quantity = 0;
const Detail = ({pokemon}) => {
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
            console.log(pokemon.quantity)
            alert("Debes seleccionar una cantidad para poder añadir el articulo al carrito")
        } else {
            console.log(pokemon)
            addProductToCart(
                {
                    id: pokemon.id,
                    name:pokemon.name,
                    price: pokemon.cardmarket.prices.averageSellPrice,
                   
                },parseInt(quantity))
        }
    }
    
    console.log(pokemon);
    return (
        <>
        <div className='card'>
            
            <div>{pokemon.name}</div>
            <img src ={pokemon.images?.small} />
            <select className="form-select" onClick={inputChangeHandler} aria-label="Default select example">
                            <option defaultValue="0">Cantidad</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
            </select>
            <button className="agregar-carrito add-to" id="${cardId}" onClick={buttonClickHandler} ><span className="prueba" id="${idPokeball}"></span>Adquirir</button>
        </div>
        </>
    )
}
export default Detail;
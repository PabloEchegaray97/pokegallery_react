import './Card.css';

const Card = ({pokemon}) => {
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
        <button className="agregar-carrito add-to" id="${cardId}"><span className="prueba" id="${idPokeball}"></span>Adquirir</button>
    </div>
    );

}
export default Card;
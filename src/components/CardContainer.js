import pokemon from 'pokemontcgsdk'
import {useEffect,useState} from 'react';
import Card from './Card';
import './CardContainer.css';
pokemon.configure({
    apiKey: '0a62f8bc-55ae-4e7f-86fe-49da8aaf6ca9'
})

const CardContainer = () => {
    const [data, setData] = useState([]);
    const [pagina, setPagina] = useState(3);

    useEffect(() => {
        pokemon.card.where({
            page: pagina,
            pageSize: 5
        })
            .then((result) => result.data) 
            .then((data) => setData(data));
    }, [pagina])

    const buttonClickHandler = (pageSelect) => {
        if (pageSelect == "prev" && pagina > 1) {
            setPagina(pagina - 1);
        } else {
            setPagina(pagina + 1)
        }
    };

    return (
        <div >
            <h1>PokeGallery</h1>
            <div>
                {!data ? (
                    <h3>Cargando...</h3>
                ) : (
                    <div className='card-container'>
                        {data.map((pokemon) => (
                            <Card pokemon={pokemon}></Card>
                        ))}
                    </div>
                )}
            </div>

            <div>
                {pagina == 1 ? ('') : (
                    <button onClick={() => buttonClickHandler("prev")} >
                        atras
                    </button>
                )}
                <button onClick={() => buttonClickHandler("next")}>
                    siguiente
                </button>
            </div>


        </div>
    )
}

export default CardContainer;
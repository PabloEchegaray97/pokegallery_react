import pokemon from 'pokemontcgsdk'
import {useEffect,useState} from 'react';

import Spinner from 'react-bootstrap/Spinner';
import Card from './Card';
import '../../App.css';
import Banner from '../Banner'
import Filters from '../Filters';


pokemon.configure({
    apiKey: '0a62f8bc-55ae-4e7f-86fe-49da8aaf6ca9'
})

const CardList = () => {
    const [data, setData] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState(undefined);
    
    useEffect(() => {
        if (!filter) {
            
            pokemon.card.where({
                page: pagina,
                pageSize: 30
            })
                .then((result) => result.data) 
                .then((data) => {setData(data)})
                .then(() => {setLoading(false)})
        } else {
            
            pokemon.card.where({
                q: `rarity:${filter}`,
                page: pagina,
                pageSize: 30  
            })
                .then((result) => result.data) 
                .then((data) => {setData(data)})
                .then(() => {setLoading(false)})
        }

    }, [pagina, filter])

    const buttonClickHandler = (pageSelect) => {
        setLoading(true);
        if (pageSelect == "prev" && pagina > 1) {
            setPagina(pagina - 1);
        } else {
            setPagina(pagina + 1)
        }
    };
    console.log(data.length)
    return (
        <>
            <Banner></Banner>
        <div className='container-products'>
                <Filters filter={filter} setFilter={setFilter}></Filters>
            <div className='app'>
                {loading ? (
                    <>
                      <div className="loading-text">
                      </div>
                      <div className='loading-container'>

                      Cargando... 
                      <Spinner animation="grow" variant="danger" />
                      </div>
                    </>

                    ) : (
                    <>
                    
                        {data.map((pokemon) => (
                            <Card key = {pokemon.id} pokemon={pokemon} ></Card>
                            ))}
                    
                    </>
                )}
            </div>

            <div className='w-100 d-flex justify-content-center'>
                {pagina == 1 ? ('') : (
                    <button className="btn p-2 m-2" onClick={() => buttonClickHandler("prev")} >
                        Atras
                    </button>
                )}
                <button className="btn btn-danger p-2 m-2" onClick={() => buttonClickHandler("next")}>
                    Siguiente
                </button>
            </div>


        </div>
                </>
    )
}

export default CardList;
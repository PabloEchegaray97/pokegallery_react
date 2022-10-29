import pokemon from 'pokemontcgsdk'
import {useEffect,useState} from 'react';
import Card from './Card';
import '../../App.css';
import img from '../../img/img'
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
                pageSize: 3
            })
                .then((result) => result.data) 
                .then((data) => {setData(data)})
                .then(() => {setLoading(false)})
        } else {
            
            pokemon.card.where({
                q: `rarity:${filter}`,
                page: pagina,
                pageSize: 3  
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
            <div className='app'>
                <Filters filter={filter} setFilter={setFilter}></Filters>
                {loading ? ( //data.length === 0
                    <h3>Cargando...</h3>
                    ) : (
                    <>
                    
                        {data.map((pokemon) => (
                            <Card key = {pokemon.id} pokemon={pokemon} ></Card>
                            ))}
                    
                    </>
                )}
            </div>

            <div>
                {pagina == 1 ? ('') : (
                    <button className="btn" onClick={() => buttonClickHandler("prev")} >
                        atras
                    </button>
                )}
                <button className="btn" onClick={() => buttonClickHandler("next")}>
                    siguiente
                </button>
            </div>


        </div>
                </>
    )
}

export default CardList;
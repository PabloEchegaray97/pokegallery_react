import logo from './logo.svg';
import './App.css';
import pokemon from 'pokemontcgsdk'
import {useEffect, useState} from 'react';
pokemon.configure({apiKey: '0a62f8bc-55ae-4e7f-86fe-49da8aaf6ca9'})

function App() {
  const [data, setData] = useState([]);
  const [pagina, setPagina] = useState(3);

  useEffect(()=> {
    pokemon.card.where({page:pagina , pageSize: 1 })
    .then((result) => result.data) // "Blastoise"
    .then ((data) => setData(data));
  },[pagina])

  const buttonClickHandler = (num) => {
    if (num==1 && pagina>1) {
      setPagina(pagina - 1);
    } else {
      setPagina(pagina + 1)
    }
  };
return (
  <div className="App">
    <h1>PokeGallery</h1>
    <div>
      {!data ? (
        <h3>Cargando...</h3>
      ) : (
        <div>
          {data.map((pokemon)=> (
          <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.images.small}/>
            <span>{pokemon.rarity}</span>
          </div>
          ))}
        </div>
      )}

      
    </div>
    <div>
      {pagina==1 ? ('') : (
      <button onClick={()=> buttonClickHandler(1)} >
        atras
      </button>
      )}
      <button onClick={()=> buttonClickHandler(2)}>
      siguiente
      </button>
    </div>
  </div>
);
}

export default App;
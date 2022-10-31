import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Detail from "./Detail";
import pokemon from 'pokemontcgsdk'


const DetailContainer = () => {
  const { id } = useParams();
  const [pokemonData, setPokemon] = useState([]);
  


  useEffect(() => {
    pokemon.card.find(id).then((card) => {
      setPokemon(card);
    });
  }, [id]);
  if (!pokemonData) {
    return(<p>Cargando...</p>)
  }
  return(
    <div className='detail-container'>
    <Detail pokemon={pokemonData} ></Detail>
    </div>
  )
};

export default DetailContainer;

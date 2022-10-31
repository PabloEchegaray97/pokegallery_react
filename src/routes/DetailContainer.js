import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Detail from "./Detail";
import pokemon from 'pokemontcgsdk'


const DetailContainer = () => {
  const { id } = useParams();
  const [pokemonData, setPokemon] = useState([]);
  


  useEffect(() => {
    pokemon.card.find(id).then((card) => {
      console.log(card.name);
      setPokemon(card);
    });
  }, [id]);
  if (!pokemonData) {
    return(<p>Cargando...</p>)
  }
  return(
    <>
    <Detail pokemon={pokemonData}></Detail>
    
    </>
  )
};

export default DetailContainer;

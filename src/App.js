import logo from './logo.svg';
import './App.css';
import pokemon from 'pokemontcgsdk'
import {useEffect, useState} from 'react';
import CardContainer from './components/CardContainer';
pokemon.configure({apiKey: '0a62f8bc-55ae-4e7f-86fe-49da8aaf6ca9'})

function App() {
  
return (
  <div className="App">
    <CardContainer></CardContainer>
  </div>
);
}

export default App;
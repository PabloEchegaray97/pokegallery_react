import logo from './logo.svg';
import './App.css';
import pokemon from 'pokemontcgsdk'
import {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Detail from './routes/Detail';
import CardContainer from './components/Card/CardList';
import DetailContainer from './routes/DetailContainer';
import Cart from './routes/Cart'
import { CartProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
pokemon.configure({apiKey: '0a62f8bc-55ae-4e7f-86fe-49da8aaf6ca9'})

function App() {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    setCart(...cart, product);
    console.log(cart)
  }
return (

  <div className="App">

    <BrowserRouter>

    <CartProvider>

    <Navbar pokemon={pokemon}></Navbar>
    <Routes>

      <Route exact path="/" element = {<Home/>}/>
      <Route exact path="/detail" element = {<Detail/>}/>
      <Route exact path="/detail/:id" element = {<DetailContainer/>}/>
      <Route exact path="/cards" element = {<CardContainer/>}/>
      <Route exact path="/Cart" element = {<Cart/>}/>
    </Routes>
  
    
    </CartProvider>

    </BrowserRouter>
  </div>
);
}

export default App;
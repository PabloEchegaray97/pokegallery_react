import { CartContext } from "../context/CartContext";
import {useContext, useState} from 'react';
import img from '../img/img'
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
const Cart = () => {
    const {cart} = useContext (CartContext); 
    const {deleteAllProducts} = useContext (CartContext);
    const {deleteProduct} = useContext (CartContext);
    const total = cart.reduce((acc, product)=> acc += product.price * product.quantity,0).toFixed(2);


    const [count, setCount] = useState (0);

    

    const addQuantity = (product) => {
        if (product.quantity>=1) {
            setCount(product.quantity++);
        }
    }
    const reduceQuantity = (product) => {
        if (product.quantity>1) {
            setCount(product.quantity--);
          
        }
    }
    return(
        <>
        
        <section className="d-flex justify-content-center">
        <div className="modal__container">
            <div className="container cart-container" id="carrito-container">
                <div id="carrito" className="carrito">
                    <table className="table" id="lista-carrito">
                        <thead>
                            <tr>
                                <th>Eliminar</th>
                                <th>Item</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {cart.map((product)=> 
                <tr key={product.id}>
                <td>
                <button className="borrar-producto btn" onClick={()=> deleteProduct(product.id)}>x</button>
                </td>
                <td><Link to={`/Detail/${product.id}`} className="btn">{product.name}</Link></td>
                <td>{product.quantity}<button onClick={()=>reduceQuantity(product)} className='btn'>-</button><button onClick={()=>addQuantity(product)} className='btn'>+</button></td>
                <td>${product.price}</td>
                </tr> )}
                        <tr>
                            <th>Total</th>
                            <th> </th>
                            <th> </th>
                            <th className="total-carrito">{total}</th>
                        </tr>
                        </tbody>
                    </table>
                    <div className="cart-buttons">
                        <button type="button" className="modal__button modal__button--mod" id="vaciar-carrito" onClick={deleteAllProducts}>Vaciar
                            Carrito</button>
                        <Link to={'/Checkout'} className='modal__button' >Comprar</Link>
                    </div>
                </div>
                <div className="cart-status">
                    <img src={img.pokeball_gif} alt="" id="modal-gif" className="modal__gif"/>
                    <p className="modal__text" id="estado-carrito">¡Ya casi los tienes!</p>
                </div>
                
            </div>
        </div>
    </section>
        </>
    


    )
}

export default Cart;
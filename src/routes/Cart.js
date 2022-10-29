import { CartContext } from "../context/CartContext";
import {useContext, useEffect, useState} from 'react';
const Cart = () => {
    const {cart} = useContext (CartContext); 
    const {deleteAllProducts} = useContext (CartContext);
    const {deleteProduct} = useContext (CartContext);


    const [count, setCount] = useState (0);

    

    const addQuantity = (product) => {
        if (product.quantity>=1) {
            setCount(product.quantity++);
            console.log("la cantidad del producto es:" + product.quantity);
        }
    }
    const reduceQuantity = (product) => {
        if (product.quantity>1) {
            setCount(product.quantity--);
          
        }
    }
    return(
        <>
        <div className="margin-top-cart">
            <div>
                {cart.map((product)=> 
                <div key={product.id}>
                    {product.name} cantidad: {`${product.quantity}`}<div><button onClick={()=>reduceQuantity(product)}>-</button><button onClick={()=>addQuantity(product)}>+</button></div><button onClick={()=>deleteProduct(product.id)}>Quitar</button>
                </div> )}
            </div>
            
            <button onClick={deleteAllProducts}>Vaciar carrito</button>
            
        </div>
        <section class="modal">
        <div class="modal__container">
            <div class="container cart-container" id="carrito-container">
                <div id="carrito" class="carrito">
                    <table class="table" id="lista-carrito">
                        <thead>
                            <tr>
                                <th>Eliminar</th>
                                <th>Item</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                            </tr>
                        </tbody>
                        <tr>
                            <th>Total</th>
                            <th> </th>
                            <th> </th>
                            <th class="total-carrito">123213</th>
                        </tr>
                    </table>
                    <div class="cart-buttons">
                        <button type="button" class="modal__button modal__button--mod" id="vaciar-carrito">Vaciar
                            Carrito</button>
                        <button type="button" class="modal__button" id="confirmar-compra">Ir al carrito</button>
                    </div>
                </div>
                <div class="cart-status">

                    <img src="../assets/img/pokeball_static.png" alt="" id="modal-gif" class="modal__gif"/>
                    <p class="modal__text" id="estado-carrito">¡Ya casi los tienes!</p>
                </div>
                <a href="#" class="modal__close">X</a>
            </div>
        </div>
    </section>
        </>
    


    )
}

export default Cart;
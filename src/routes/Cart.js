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
        <div>
            <div>
                {cart.map((product)=> 
                <div key={product.id}>
                    {product.name} cantidad: {`${product.quantity}`}<div><button onClick={()=>reduceQuantity(product)}>-</button><button onClick={()=>addQuantity(product)}>+</button></div><button onClick={()=>deleteProduct(product.id)}>Quitar</button>
                </div> )}
            </div>
            
            <button onClick={deleteAllProducts}>Vaciar carrito</button>

        </div>

    )
}

export default Cart;
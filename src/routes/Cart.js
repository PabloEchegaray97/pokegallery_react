import { CartContext } from "../context/CartContext";
import {useContext} from 'react';
const Cart = () => {
    const {cart} = useContext (CartContext); 
    const {deleteAllProducts} = useContext (CartContext);
    const {deleteProduct} = useContext (CartContext);

    return(
        <div>
            <div>
                {cart.map((product)=> <div key={product.id}>{product.name} cantidad: {`${product.quantity}`}<button onClick={()=>deleteProduct(product.id)}>Quitar</button></div> )}
            </div>
            
            <button onClick={deleteAllProducts}>Vaciar carrito</button>

        </div>

    )
}

export default Cart;
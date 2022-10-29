import React, { useState, useContext } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const cartLenght = cart.length;
    const deleteAllProducts = () => {
        setCart([]);
    }

    const deleteProduct = (id) => {

        const newCart = cart.filter((item) => item.id !== id)
        console.log(newCart)
        setCart(newCart)
    }


    const addProductToCart = (product, quantity) => {
        console.log(product);
        console.log(quantity);
        const productIndex = cart.findIndex(
            (cartProduct) => cartProduct.id === product.id
        );
        if (productIndex > -1) {
            //Si el producto ya está en el carro
            setCart((cart) =>
                cart.map((cartProduct) => {
                    if (cartProduct.id === product.id) {
                        return {
                            ...cartProduct,
                            quantity: cartProduct.quantity + quantity,
                        };
                    }
                    return cartProduct;
                })
            );
        } else {
            //El producto no esta en el carro
            product.quantity = quantity;
            setCart([...cart, product]);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addProductToCart, deleteAllProducts, deleteProduct,cartLenght }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };

import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import {CartContext} from '../context/CartContext';
import { useContext} from 'react';


let quantity = 0;

const ItemDetail = ({ id }) => {
    const [product, setProduct] = useState();
    const {addProductToCart} = useContext(CartContext);
    
    console.log("me traje el id:" +id)
    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, 'items', id);
        console.log(itemRef)
        getDoc(itemRef).then((snapshot) => {
            setProduct({ id: snapshot.id, ...snapshot.data() })
            console.log(snapshot.data())
            
        }
        );
    }, [id]);
    console.log(":D")
    console.log(product)


    const inputChangeHandler = (ev) => {
        if (ev.target.value !== 'Cantidad') {
            quantity = ev.target.value;
        }
    }
    const buttonClickHandler = () => {
        if (quantity == 0 || quantity == 'Cantidad') {
        console.log("no hay cantidad seleccionada")
            alert("Debes seleccionar una cantidad para poder añadir el articulo al carrito")
        } else {
            
            addProductToCart(
                {
                    id: product.id,
                    name:product.name,
                    price: product.price,

                },parseInt(quantity))
        }
    }
    
    return (
        <div className='item-detail'>
        {!product ? (
            <div>Cargando...</div>
        ) : (
        <div className='card-detail'>
            
            <h3 className='card-detail-title'>{product?.name}</h3>
            <div>
            <img src ={product?.img} className='card-img card-img-mod img-item' />
            </div>
            <select className="form-select" onClick={inputChangeHandler} aria-label="Default select example">
                            <option defaultValue="0">Cantidad</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
            </select>
            <button className="agregar-carrito add-to" id="${cardId}" onClick={buttonClickHandler}  ><span className="prueba"></span>Adquirir</button>
        </div>
        )}
        
        </div>
    );

};

export default ItemDetail;

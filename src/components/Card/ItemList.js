import {useEffect, useState} from 'react'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import Item from './Item'

const ItemList = ({products}) => {
    
    console.log(products)
    return (
    <div className='app'>
        {
                <>
                {products.map(product => (
                    <Item item={product} key={product.id}></Item>
                    ))}
                </>
        }
        
    </div>)
}

export default ItemList;
import {useEffect, useState} from 'react'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import Item from './Item'
const ItemList = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = collection (db,'items');
        getDocs(itemsCollection).then((snapshot) => {
        
        const arrproducts = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        setProducts(arrproducts)
        });
    },[])
    console.log(products)


    return (
    <>
        <div>ItemList</div>
        {products.map(product => (
            
            <Item item={product} key={product.id}></Item>
            
        ))}
    </>)
}

export default ItemList;
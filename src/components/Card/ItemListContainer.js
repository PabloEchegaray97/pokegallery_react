import {useEffect, useState} from 'react'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import ItemList from './ItemList'

import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = collection (db,'items');
        getDocs(itemsCollection).then((snapshot) => {
        
        const arrproducts = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        setProducts(arrproducts)
        
        }).finally(() => {
            setLoading(false)
        })
        ;
    },[])
    console.log(products)
    console.log(loading)
    return (
    <div className='container-products'>
        {loading ? (
            <>
            <div className='loading-container'>
            Cargando... 
            <Spinner animation="grow" variant="danger" />
            </div>
            </>
            )  : (
                
                <>
                <ItemList products={products}/>
                </>
            
        )}
        
    </div>)
}

export default ItemListContainer;
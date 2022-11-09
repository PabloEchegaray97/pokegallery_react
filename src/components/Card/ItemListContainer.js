import {useEffect, useState} from 'react'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import ItemList from './ItemList'

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
    return (
    <div className='app'>
        {loading ? (
            <div>Cargando...</div>
            )  : (
                
                <>
                <ItemList products={products}/>
                </>
            
        )}
        
    </div>)
}

export default ItemListContainer;
import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {
    const { id } = useParams();
    console.log(id)
    return (
    <div>
        <ItemDetail id = {id}/>
    </div>
    )
}

export default ItemDetailContainer
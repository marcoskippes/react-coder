import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams} from "react-router-dom";
import arrayProductos from "./json/arrayProductos.json";
import ItemList from "./itemList";


const ItemListContainer = () =>{

    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) =>{
            setTimeout(()=>{
                resolve(id ? arrayProductos.filter(item => item.tipo === id) : arrayProductos);    
            },500)
        });
        promesa.then((data)=>{
            console.log(data)
            setItems(data);
        })
    },[id]);


    return(
        <div className="container">
            <ItemList items={items}/>
        </div>
    )

}

export default ItemListContainer
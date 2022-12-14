import React from "react";
import ItemCount from "./itemCount";

const ItemDetail = ({item}) => {
    return(
        <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.img} className="img-fluid" alt={item.title}/>
                <h1>{item.title}</h1>
                <p>{item.uso}</p>
                <p><b>${item.precio}</b></p>
                <ItemCount stockItems={item.Stock}/>
            </div>
        </div>
    )
}
export default ItemDetail;
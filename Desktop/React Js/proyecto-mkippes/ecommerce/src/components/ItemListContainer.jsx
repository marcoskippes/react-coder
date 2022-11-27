import React from "react";

const ItemListContainer = ({greeting}) =>{

    return(
        <div className="container">
            <div className="row py-10">
                <div className="col-md-12">
                    <div className="alert alert-primary text-center" role="alert">
                    <p>{greeting}</p>
                    </div> 
                </div>
            </div>
        </div>
    )

}

export default ItemListContainer
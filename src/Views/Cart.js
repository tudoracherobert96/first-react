import {Route} from "react-router-dom";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
function Cart(){
    var [pumpkins,setPumpkins] = useState(JSON.parse(localStorage.getItem("pumpkins")) || [])

    useEffect(() =>{
        setPumpkins(JSON.parse(localStorage.getItem("pumpkins")))
    },[]);

    return(
        <div>
            <FontAwesomeIcon
                icon={faShoppingCart}
                style={{backgroundColor:"#E0FFFF",color:"blue",marginLeft:"10px"}}

            />
            <span className="badge badge-pill badge-danger alert-badge">({pumpkins.length})</span>
        </div>
    )
}
export default Cart;
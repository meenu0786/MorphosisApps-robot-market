import React from "react";
import Card from "../../component/productList/card"
import {CardStyle} from "../../styled"

const Cart = ({ cartList }) => {
    const handleRemove = (val) => {
        console.log("valremove",val)
    }

    return (
        <>
            {cartList && cartList.map(item => {
                return <>
                <h2>{item.name}</h2>
                </>
            })}
        </>
    )
}


export default Cart
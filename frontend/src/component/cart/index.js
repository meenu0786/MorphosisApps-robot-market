import React from "react";
import Card from "../productList/card";
import { CartStyle } from "../../styled"

const Cart = ({ cartList, hadleAddItem, hadleSubItem, hadleDelete }) => {
    return (
        <>
            <div className="row">
                {cartList && cartList.map(item => {
                    return <>
                        <div className="col-md-6">
                            <CartStyle >
                                <Card item={item} isCart hadleSubItem={hadleSubItem} hadleAddItem={hadleAddItem} hadleDelete={hadleDelete} />
                            </CartStyle>
                        </div>

                    </>
                })}
            </div>

        </>
    )
}

export default Cart

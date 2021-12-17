import React from "react";
import Card from "../productList/card";
import {CardStyle} from "../../styled"

const Cart = ({ cartList, hadleAddItem, hadleSubItem, hadleDelete }) => {
	return (
		<>
			{cartList && cartList.map(item => {
				return <>
					<CardStyle className="col">
						<Card item={item}  isCart hadleSubItem={hadleSubItem} hadleAddItem={hadleAddItem} hadleDelete={hadleDelete}/>
					</CardStyle>
				</>
			})}
		</>
	)
}

export default Cart

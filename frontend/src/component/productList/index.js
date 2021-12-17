import React from "react"
import Card from "./card"
import { CardStyle } from "../../styled";
import swal from 'sweetalert';

const ProductList = ({ robotList, cartList, setCartList }) => {
	const handleClick = (item) => {
		item = {...item, added: 1};
		if (cartList.length < 5) {
			let temp = cartList;
			let isItemPresent = temp.filter((d) => d.name === item.name);
			if (isItemPresent.length > 0) {
				swal("item is already present in cart");
			} else {
				temp.push(item)
				setCartList([...temp]);
			}

			console.log("cartList",cartList);
		} else {
			swal("not allowed to add more than 5 robot's");
		}
	}
	return (
		<div className="row">
			{
				robotList?.data?.length && robotList.data.map((item) => {
					return (
						<CardStyle className="col">
							<Card item={item}  handleClick={(item)=>handleClick(item)}/>
						</CardStyle>
					)
				})
			}
		</div>
	)
}

export default ProductList

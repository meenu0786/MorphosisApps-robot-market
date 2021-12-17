import React from "react";
import { CardHeader, CardHeading } from "../../styled";
import moment from 'moment';

const Card = (props) => {
 const {item, isCart, hadleAddItem, hadleSubItem, hadleDelete } = props;
 
	return (<>
			<div className="col" >
				<CardHeader style={{ height: "50px" }}>
					<CardHeading>{item.name}</CardHeading>
				</CardHeader>
				<img src={item.image} alt={item.name} />
				<div>
					<CardHeading className="mt-5">Price : {`฿${item.price}`}</CardHeading>
					<CardHeading> material : {item.material}</CardHeading>
					<CardHeading> created date : {moment(item.createdAt).format("DD-MM-YYYY")}</CardHeading>
					<CardHeading> Stock : {item.stock}</CardHeading>
					{isCart && <CardHeading>Added: {item.added}</CardHeading>}
					{   !isCart && <button className="addtocart"
									onClick={() => props.handleClick(item)
									}
							>Add To Cart  <span style={{ color: "green", width: "50px" }} className="glyphicon glyphicon-shopping-cart"> </span></button>
					}
					{   isCart && <><button className="addtocart"
									onClick={() => hadleAddItem(item)}
							>Add</button>
							<button className="addtocart"
									onClick={() => hadleSubItem(item)}
							>Sub</button>
							<button className="addtocart"
									onClick={() => hadleDelete(item)}
							>Remove</button>
							</>
					}
				</div>
			</div>
		</>
	)
}

export default Card

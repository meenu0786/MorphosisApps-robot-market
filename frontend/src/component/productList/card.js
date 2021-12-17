import React from "react";
import { CardHeader, CardHeading ,CardText} from "../../styled";
import moment from 'moment';

const Card = (props) => {
 const {item, isCart, hadleAddItem, hadleSubItem, hadleDelete } = props;

	return (<>
			<div >
				<CardHeader style={{  }}>
					<CardHeading>{item.name}</CardHeading>
				</CardHeader>
				<img src={item.image} alt={item.name} />
				<div>
					<CardText className="mt-4">Price : {`฿${item.price}`}</CardText>
					<CardText> material : {item.material}</CardText>
					<CardText> created date : {moment(item.createdAt).format("DD-MM-YYYY")}</CardText>
					<CardText> Stock : {item.stock}</CardText>
					{isCart && <CardText>Added: {item.added}</CardText>}
					{   !isCart && <button className="addtocart text-right"
									onClick={() => props.handleClick(item)
									}
							>Add To Cart  <span style={{ color: "green", width: "40px" }} className="glyphicon glyphicon-shopping-cart"> </span></button>
					}
					{   isCart && <><br></br><button className="addtocart"
									onClick={() => hadleAddItem(item)}
							>+</button>
							<button className="addtocart"
									onClick={() => hadleSubItem(item)}
							>-</button>
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

import React from "react"
import { CardHeader, CardHeading, CardStyle } from "../../styled"

const Card = (props) => {
 const {item}=props
    return (<>
        <div className="col" >
            <CardHeader style={{ height: "50px" }}>
                <CardHeading>{item.name}</CardHeading>
            </CardHeader>
            <img src={item.image} alt={item.name} />
            <div>
                <CardHeading className="mt-5">Price :{item.price}</CardHeading>
                <CardHeading> Sctock : {item.stock}</CardHeading>
                <button className="addtocart"
                    onClick={() => props.handleClick(item)
                    }
                >Add To Cart  <span style={{ color: "green", width: "50px" }} className="glyphicon glyphicon-shopping-cart"> </span></button>
            </div>
        </div>
    </>
    )
}

export default Card
import React from "react"
import Card from "./card"
import { CardStyle } from "../../styled";

const ProductList = ({ robotList, cartList, setCartList }) => {
    const handleClick = (item) => {
        let temp=cartList
        temp.push(item)
        setCartList(temp)

        console.log("cartList",cartList)
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
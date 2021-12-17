import React, { useEffect, useState } from "react"
import Card from "./card"
import { CardStyle } from "../../styled";
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";

const ProductList = ({ robotList, cartList, setCartList }) => {
    const [startindex, setStartIndex] = useState(1)
    const [data,setData] = useState([])
    const RenderCount = 10

    const handleClick = (item) => {
        let temp = cartList
        temp.push(item)
        setCartList(temp)

    }

    useEffect(() => {
        if (robotList) {
            console.log("robotList",robotList)
            setData(robotList)
        }
    }, [robotList])

    const _DATA = usePagination(data, RenderCount);
 
    const handleChange = (e, p) => {
        setStartIndex(p)
        _DATA.jump(p)
    };
    return (
        <div className="row">
            {
                _DATA.currentData().map((item) => {
                    return (
                        <CardStyle className="col">
                            <Card item={item} handleClick={(item) => handleClick(item)} />
                        </CardStyle>
                    )
                })
            }
            <Pagination
                count={data.length/RenderCount}
                size="large"
                page={startindex}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
            />
        </div>
    )
}

export default ProductList
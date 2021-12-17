import React, { useEffect, useState } from "react"
import Card from "./card"
import { CardStyle } from "../../styled";
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";
import swal from 'sweetalert';

const ProductList = ({ robotList, cartList, setCartList }) => {
    const [startindex, setStartIndex] = useState(1)
    const [data, setData] = useState([])
    const RenderCount = 10

    const handleClick = (item) => {
        item = { ...item, added: 1 };
        if (cartList.length < 5) {
            let temp = cartList;
            let isItemPresent = temp.filter((d) => d.name === item.name);
            if (isItemPresent.length > 0) {
                swal("item is already present in cart");
            } else {
                temp.push(item)
                setCartList([...temp]);
            }
        } else {
            swal("not allowed to add more than 5 robot's");
        }
    }

    useEffect(() => {
        if (robotList) {
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
                        <CardStyle className="col-md-3 ">
                            <Card item={item} handleClick={(item) => handleClick(item)} />
                        </CardStyle>
                    )
                })
            }
            <div style={{marginLeft:"35%"}}>
                <Pagination
                    count={data.length / RenderCount}
                    size="large"
                    page={startindex}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                />
            </div>

        </div>
    )
}

export default ProductList

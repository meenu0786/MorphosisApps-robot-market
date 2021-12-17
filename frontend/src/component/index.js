import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header';
import { Product } from "../styled";
import ProductList from './productList';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from './cart';
import swal from 'sweetalert';
// node_modules/bootstrap/dist/css/bootstrap.min.css

function Component() {
	const [robotList, setrobotList] = useState([]);
	const [cartList, setCartList] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:8000/api/robots")
			.then((response) => {
				setrobotList(response.data);
			}
		);
	}, []);

	const handleCount = (data , num) => {
		let temp = cartList;
		let item = temp.find((d) => d.name === data.name);
		temp = temp.filter((d) => d.name !== data.name);
		if (item.added === 1 && num === -1) {
			swal("atleast 1 item required");
		} else if (item.added === item.stock && num === 1) {
			swal("Out of stock");
		} else {
			let count = item.added + num;
			item = {...item, added: count };
			setCartList([...temp, item]);
		}
		
	}

	const hadleAddItem = (data) => {
		handleCount(data, 1);
	}

	const hadleSubItem = (data) => {
		handleCount(data, -1);
	}

	const hadleDelete = (data) => {
		let temp = cartList;
		temp = temp.filter((d) => d.name !== data.name);
		setCartList([...temp]);
	}

	return (
		<div>
			<div>
				<Header />
			</div>
			<div style={{ display: "flex" }}>
				<Product>
					<div className="container">
						<ProductList robotList={robotList} cartList={cartList} setCartList={setCartList} />
					</div>
				</Product>
				<div style={{ backgroundColor: "light grey", width: "500px", marginTop: "70px" }}>
					<Cart cartList={cartList} hadleAddItem={hadleAddItem} hadleSubItem={hadleSubItem} hadleDelete={hadleDelete}/>
				</div>
			</div>
		</div>
	);
}

export default Component;

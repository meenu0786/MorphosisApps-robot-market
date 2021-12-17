import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header';
import { Product, Filter, Heading } from "../styled";
import ProductList from './productList';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from './cart';
// node_modules/bootstrap/dist/css/bootstrap.min.css
function Component() {
	const [robotList, setrobotList] = useState([]);
	const [cartList, setCartList] = useState([])
	const [data,setData] = useState([])

	useEffect(() => {
		axios.get("http://localhost:8000/api/robots")
			.then((response) => {
				if (response?.data?.data) {
					setrobotList(response.data.data)
					setData(response.data.data)
				}
			}
			);

	}, []);

	function searchbyName(event) {
		let temp = []
		if (event.target.value === "") {
			setrobotList(data)
		}
		else {
			robotList.map((value) => {
				if (value.name) {
					if (value.name.indexOf(event.target.value) > -1) {
						temp.push(value)
					}
				}
			})
			setrobotList(temp)
		}

	}

	return (
		<div>
			<div>
				<Header />
			</div>

			<div style={{ display: "flex" }}>


				<Product>
					<div className="container">
						<Heading>
							Search	<Filter type="text" placeholder="Search" onChange={searchbyName} />
						</Heading>
						<ProductList robotList={robotList} cartList={cartList} setCartList={setCartList} />
					</div>
				</Product>

				<div style={{ backgroundColor: "light grey", width: "500px", marginTop: "140px" }}>
					<Cart cartList={cartList} />
				</div>

			</div>


		</div>
	);
}

export default Component;
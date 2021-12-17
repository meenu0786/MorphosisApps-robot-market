import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header';
import { Product, Filter, Heading } from "../styled";
import ProductList from './productList';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from './cart';
import swal from 'sweetalert';

function Component() {
	const [robotList, setrobotList] = useState([]);
	const [cartList, setCartList] = useState([])
	const [data, setData] = useState([])
	const [isOpen, setIsOpen] = useState(false)

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

	const getCartTotal = () => {
		let amount = 0;
		cartList && cartList.map(item => {
			amount = amount + (item.price * item.added);
		});
		return amount;
	}

	return (
		<div>
			<div>
				<Header setIsOpen={setIsOpen} isOpen={isOpen} />
			</div>

			<div className="top-head">
				<Product>
					<div className="container">
						<Heading>
							<Filter type="text" placeholder="Search" onChange={searchbyName} />
						</Heading>

						<ProductList robotList={robotList} cartList={cartList} setCartList={setCartList} />
					</div>
				</Product>
				{isOpen &&
					<div style={{ backgroundColor: "light grey", width: "610px", marginTop: "70px", maxHeight: "750px", overflow: "scroll" }}>
						<Cart cartList={cartList} />
					</div>
				}

			</div>
		</div>
	);
}

export default Component;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header';

function Component() {
	const [robotList, setrobotList] = useState([]);
	useEffect(() => {
    axios.get("http://localhost:8000/api/robots")
      .then((response) =>	
				setrobotList(response.data)
			);
		console.log("robotList", robotList);
  });

  return (
    <div>
      <Header />
			<div>
				<div>Product list 1</div>
				<div>cart</div>
			</div>
    </div>
  );
}

export default Component;
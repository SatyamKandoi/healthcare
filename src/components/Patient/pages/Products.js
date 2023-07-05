import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const Products = () => {
    const [data, setData] = useState([]);
	const [query, setQuery] = useState("");
	
	useEffect(() => {
		const fetchMedicine = async () => {
			const res = await axios.get(`http://localhost:8000/medicines?q=${query}`);
			console.log(res)
			setData(res.data);
		};
		fetchMedicine();
	}, [query]);
  return data
}

export default Products
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
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

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;
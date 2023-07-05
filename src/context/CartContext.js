import React, { useContext, useState } from "react";
import { DataContext } from "./DataContext";
import { createContext } from "react";

export const CartContext = createContext({
	items: [],
	getProductQuantity: () => {},
	addOnetoCart: () => {},
	removeOnetoCart: () => {},
	delete: () => {},
	getTotalCost: () => {},
});

export function CartProvider({ children }) {
	const data = useContext(DataContext);
	const [items, setItems] = useState([]);
	const [cartProducts, setCartProducts] = useState([]);
    
	function getProductQuantity(id){
        const quantity = cartProducts.find(product=>product.id===id)?.quantity
        if (quantity===undefined){
            return 0 ;
        }
        return quantity;
	};

	const addOnetoCart = () => {
		// Define the logic for addOnetoCart function
	};

	const removeOnetoCart = () => {
		// Define the logic for removeOnetoCart function
	};

	const deleteItem = () => {
		// Define the logic for deleteItem function
	};

	const getTotalCost = () => {
		// Define the logic for getTotalCost function
	};

	const contextValue = {
		items: cartProducts,
		getProductQuantity,
		addOnetoCart,
		removeOnetoCart,
		deleteItem,
		getTotalCost,
	};

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
}

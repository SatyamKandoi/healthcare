import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("user") || null)
	);
	const login = async (inputs) => {
		const res = await axios.post("auth/login", inputs);
		setCurrentUser(res.data);
	};
	const navigate = useNavigate();
	const logout = async (inputs) => {
		await axios.post("/auth/logout");
		navigate("/login");

		setCurrentUser(null);
	};
	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

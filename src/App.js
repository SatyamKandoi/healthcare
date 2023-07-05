import React from "react";
import Home from "./components/Home/Home";
import './App.css';
import Patientdashboard from "./components/Patient/Patientdashboard";
import Login from "./components/Login/Login"
import {Routes,Route} from "react-router-dom"
import Dashboard from "./components/Patient/pages/Dashboard";
import Medicine from "./components/Patient/pages/Medicine/Medicine";
import Doctors from "./components/Patient/pages/Doctors";
import Settings from "./components/Patient/pages/Settings";
import Remainder from "./components/Patient/pages/Remainder";
function App() {
	return (
		<>
			
			<Routes>
				<Route path="/" element={<Home />}/> 
				<Route path="/login" element={<Login/>}/>
				<Route path="/Patientdashboard" element={<Patientdashboard/>}/>
				<Route path ="/Patientdashboard/Dashboard" element={<Dashboard/>}/>
				<Route path ="/Patientdashboard/Doctors" element={<Doctors/>}/>
				<Route path ="/Patientdashboard/Medicine" element={<Medicine/>}/>
				<Route path="/Patientdashboard/Remainder" element={<Remainder/>}/>
				<Route path ="/Patientdashboard/Settings" element={<Settings/>}/>
				
				
			</Routes>
			
		</>
	);
}

export default App;

import React from "react";
import Sidebar from "../Sidebar.tsx";
import { Box } from "@mui/system";
import Doctor from "../../Doctor/Doctor.js";

const Doctors = () => {
	return (
		<>
        <Box sx={{display:"flex"}}>

       		<Sidebar />
            <Box component="main" sx={{flexGrow:1,mt:13,ml:1}}>

        <h1>Doctors</h1>
 
            <Doctor/>
            </Box>
            </Box>	
		</>
	);
};

export default Doctors;

import React from "react";
import Sidebar from "../Sidebar.tsx";
import { Box } from "@mui/system";

const Settings= () => {
	return (
		<>
        <Box sx={{display:"flex"}}>


       		<Sidebar />
            <Box component="main" sx={{flexGrow:1,mt:13,ml:1}}>

        <h1>Settings</h1>
        
            </Box>
            </Box>	
		</>
	);
};

export default Settings;

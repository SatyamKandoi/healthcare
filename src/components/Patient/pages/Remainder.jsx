import React from "react";
import Sidebar from "../Sidebar.tsx";// a plugin!
import Calender from "./Calender.js";

import { Box } from "@mui/system";
const Remainder = () => {
	return (
		<>
			<Box sx={{ display: "flex" }}>
				<Sidebar />
				<Box component="main" sx={{ flexGrow: 1, mt: 13, ml: 0 }}>
					<Calender/>
				</Box>
			</Box>
		</>
	);
};

export default Remainder;

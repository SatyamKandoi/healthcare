import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormPropsTextFields() {
	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off">
			<div>
				<TextField
					required
					id="outlined-required"
					label="Medicine Name"
					defaultValue="Enter Medicine Name"
				/>
        <TextField
					required
					id="outlined-required"
					label="Medicine Dosage"
					defaultValue="Hello World"
				/>
        <TextField
					required
					id="outlined-required"
					label="Medicine Frequency"
					defaultValue="Hello World"
				/>	
				
			</div>
		</Box>
	);
}

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Button } from "react-bootstrap";

const Doctor = () => {
	return (
		<>
			<Card sx={{ maxWidth: 305, marginLeft: 10, marginTop: 6 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="150"
						image="https://th.bing.com/th?id=OIP.RxhQ2nMqf7hwsx884qzCpAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Name: Dr. Sanjay Patel
						</Typography>
						<pre>
							<Typography variant="body1" color="text.secondary">
								Speciality : CardioVascular Surgeon
							</Typography>
							<Typography variant="body1" color="text.secondary">
								Available Time : 9:00 AM to 6:00 PM
							</Typography>
							<br></br>
						</pre>
						<Typography variant="body2" color="text.secondary">
							Medicial Qualifications: <br></br>
							<span>-</span>Master in Surgrey
							<br></br>
							-Experience of 10 years in Medicial Surgery
							<br></br>
							-Other Specialty :<br></br>
							Head Doctor at Baroda Heart Hospital
						</Typography>
						<Button
							variant="outline-primary"
							type="submit"
							style={{
								color: "#FFFFFF",
								background: "#57B7CE",
								width: "200px",
								borderColor: "#ffffff",
								height: "32px",
								marginTop: "10px",
							}}>
							<a
								href="https://calendly.com/kandoisatyam/doctor_appoitment?month=2023-05"
								style={{
									textDecoration: "inherit",
									color: "inherit",
									cursor: "pointer",
								}}>
								{" "}
								Book Appoitnment Now{" "}
							</a>
						</Button>
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	);
};

export default Doctor;

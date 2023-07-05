import React, { useContext } from "react";
import Sidebar from "../Sidebar.tsx";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {
	MDBCard,
	MDBCol,
	MDBCardText,
	MDBRow,
	MDBCardBody,
} from "mdb-react-ui-kit";
import { AuthContext } from "../../../context/authContext";

// import Iframe from "react-iframe";

const Dashboard = () => {

	
	const { currentUser } = useContext(AuthContext);
	return (
		<>
			<Box sx={{ display: "flex" }}>
				<Sidebar />
				<Box component="main" sx={{ flexGrow: 1, mt: 13, ml: 1 }}>
					<h2>Welcome {currentUser?.username}</h2>
					{/* <Iframe
						url="https://calendly.com/kandoisatyam/doctor_appoitment?month=2023-04"
						width="1080px"
						height="800px"
						id=""
						className=""
						display="block"
						position="relative"
					/> */}
					<div className="profile">
					<MDBCard className="mb-4 mt-5 p-2 w-50 h-50" >
						<MDBCardBody>
							<MDBRow>
								<MDBCol sm="3">
									<MDBCardText>Full Name</MDBCardText>
								</MDBCol>
								<MDBCol sm="9">
									<MDBCardText className="text-muted">
									{currentUser?.username}
									</MDBCardText>
								</MDBCol>
							</MDBRow>
							<hr />
							<MDBRow>
								<MDBCol sm="3">
									<MDBCardText>Email</MDBCardText>
								</MDBCol>
								<MDBCol sm="9">
									<MDBCardText className="text-muted">
									{currentUser?.email}
									</MDBCardText>
								</MDBCol>
							</MDBRow>
							<hr />
							<MDBRow>
								<MDBCol sm="3">
									<MDBCardText>Phone</MDBCardText>
								</MDBCol>
								<MDBCol sm="9">
									<MDBCardText className="text-muted">
										(097) 234-5678
									</MDBCardText>
								</MDBCol>
							</MDBRow>
							<hr />
							<MDBRow>
								<MDBCol sm="3">
									<MDBCardText>Mobile</MDBCardText>
								</MDBCol>
								<MDBCol sm="9">
									<MDBCardText className="text-muted">
										(098) 765-4321
									</MDBCardText>
								</MDBCol>
							</MDBRow>
							<hr />
							<MDBRow>
								<MDBCol sm="3">
									<MDBCardText>Address</MDBCardText>
								</MDBCol>
								<MDBCol sm="9">
									<MDBCardText className="text-muted">
										Bay Area, San Francisco, CA
									</MDBCardText>
								</MDBCol>
							</MDBRow>
						</MDBCardBody>
					</MDBCard>
					<Card sx={{ maxWidth: 305, marginLeft:10, marginTop: 6 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="150"
								image={currentUser?.image}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Name:{currentUser?.username}
								</Typography>
								<pre>
									<Typography variant="h6" color="text.secondary">
										Age: {currentUser?.age} years
									</Typography>
									<Typography variant="h6" color="text.secondary">
										Height: {currentUser?.height} feets
									</Typography>
									<Typography variant="h6" color="text.secondary">
										Weight: {currentUser?.weight} Kilos
									</Typography>
									<br></br>
								</pre>
								<Typography variant="h6" color="text.secondary">
									Medicial Conditions: <br></br>
									<span>-</span>Diabetic:{currentUser?.diabetic}
									<br></br>
									-Blood-Pressure:{currentUser?.bloodpressure}
									<br></br>
									-Other Conditions:
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					</div>
				</Box>
			</Box>
		</>
	);
};

export default Dashboard;

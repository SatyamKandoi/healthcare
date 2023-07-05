import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import right from "./right.png";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar.js";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "react-slideshow-image/dist/styles.css";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const Home = () => {
	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [err, setError] = useState(null);

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/auth/register", inputs);
			navigate("/login");
		} catch (err) {
			setError(err.response.data);
		}
	};
	return (
		<>
			<Navbar />
			<div className="container mt-3">
				<section className="d-flex justify-content-between">
					<div className="left_data mt-4 p-3" style={{ width: "100%" }}>
						<h3 className="text-left mb-4 col-lg-6">Sign Up</h3>
						<Form>
							<Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
								<Form.Control
									name="email"
									type="email"
									onChange={handleChange}
									placeholder="Enter email"
								/>
							</Form.Group>
							<Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
								<Form.Control
									name="username"
									type="text"
									onChange={handleChange}
									placeholder="Enter Your Name"
								/>
							</Form.Group>
							<Form.Group
								className="mb-3 col-lg-6"
								controlId="formBasicPassword">
								<Form.Control
									name="password"
									type="password"
									placeholder="Password"
									onChange={handleChange}
								/>
							</Form.Group>

							<Button
								variant="primary"
								className="col-lg-6"
								type="submit"
								onClick={handleSubmit}
								style={{ background: "#57B7CE" }}>
								Submit
							</Button>
							{err && <p>Error User Exist</p>}
						</Form>
						<p className="mt-3">
							{" "}
							Already Have an account{" "}
							<span>
								<a href="/login">SignIn</a>
							</span>
						</p>
					</div>
					<div className="right_data mt-3" style={{ width: "100%" }}>
						<div className="sign_img mt-3">
							<h2>Sign up Now</h2>
							<h5>
								Register for Medi-Consultant is
								<br></br> Simple and easy
							</h5>
							<br></br>
							<img src={right} style={{ maxwidth: 400 }} alt="Signup"></img>
						</div>
					</div>
				</section>
			</div>
			<div>
				<h1 className="about"> About Us and Services we Provide</h1>
				<div className="cards">
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="250"
								image="https://www.medicodigital.co.uk/wp-content/uploads/Online-medical-consultation.jpg"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Online Medical Consulting
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Over the web Medical Consulting with Specialized Doctors using
									Google Meet
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="250"
								image="https://topflightapps.com/wp-content/uploads/2022/02/medicine-reminder-app-visualization.png"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Medicine/Pill Remainder Functionality
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Personalized Pill Remainder Service as per Doctor Prescription
									for your Daily need
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="250"
								image="https://drprem.com/health/wp-content/uploads/sites/17/2015/10/healthcare-consumerism.jpg"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Buy Medicines Online
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Buy Your Prescribed Medicine Online From our Store with
									DoorStep Delivery
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</div>
				<div className="acards">
					<h1>Our Sevices</h1>
					<p style={{ fontSize: "20px" }}>
						• Ease of healthcare access
						<br></br> • Digital transformation in healthcare industry
						<br></br> • Higher access to healthcare users online
						<br></br>• Patient data collectionnd management
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;

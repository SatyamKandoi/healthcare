import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Left from "./left.JPG";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar.js";
import { AuthContext } from "../../context/authContext";
import Footer from "../Home/Footer";

const Login = () => {
	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});
	const [err, setError] = useState(null);
	const { login } = useContext(AuthContext);
	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await login(inputs);
			navigate("/Patientdashboard/Dashboard");
		} catch (err) {
			setError(err.response.data);
			alert("UserName and Password Does Not Match")
		}
	};

	return (
		<>
			<Navbar />
			<div className="container mt-3">
				<section className="d-flex justify-content-between">
					<div className="left_data mt-4 p-3" style={{ width: "100%" }}>
						<h3 className="text-left mb-4 col-lg-6">Sign In</h3>
						<Form>
							<Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
								<Form.Control
									name="username"
									type="text"
									onChange={handleChange}
									placeholder="Enter Username"
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
							{err && <p></p>}
						</Form>
					</div>
					<div className="right_data mt-3  " style={{ width: "100%" }}>
						<div className="sign_img mt-3 " style={{ paddingLeft: "150px" }}>
							<img
								src={Left}
								style={{ maxwidth: 500, marginRight: "20px" }}
								alt="SignIN"></img>
						</div>
					</div>
				</section>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Login;

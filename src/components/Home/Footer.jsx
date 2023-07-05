import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
const footer = () => {
	return (
		<MDBFooter className="bg-info text-white" style={{ bgColor: '#57B7CE', marginTop:"100px" , marginBottom:"0px",height:"230px" }}>
			<MDBContainer className="p-4">
				<MDBRow>
					<MDBCol lg="6" md="12" className="mb-4 mb-md-0">
						<h5 className="text-uppercase">MEDI-CONSULTANT </h5>

						<p>
						Medi-Consultant Helps to make your medical journey 
            smoother , easier and Digital with the help of 
            various efficient services it Provides you can easily get all your details 
            and Register yourself for free on our portal Today 

						</p>
					</MDBCol>

					<MDBCol lg="3" md="6" className="mb-4 mb-md-0">
						<ul className="list-unstyled mb-0">
							<li>
								<a href="#!" className="text-white">
									Medicines
								</a>
							</li>
							<li>
								<a href="#!" className="text-white">
									Doctors
								</a>
							</li>
							<li>
								<a href="#!" className="text-white">
									Medicine Pill Remainder
								</a>
							</li>
							<li>
								<a href="#!" className="text-white">
                Book Appoitnment
  								</a>
							</li>
						</ul>
					</MDBCol>

					<MDBCol lg="3" md="6" className="mb-4 mb-md-0">

						<ul className="list-unstyled">
							<li>
								<a href="#!" className="text-white">
                Testinomials
								</a>
							</li>
							<li>
								<a href="#!" className="text-white">
              FeedBack
								</a>
							</li>
							<li>
								<a href="#!" className="text-white">
              Contact-Us
								</a>
							</li>
							
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>

			<div
				className="text-center p-3"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
				© 2023 Copyright:
				<a className="text-white" href="http://localhost:3000/login">
					Medi-Consultant
				</a>
			</div>
		</MDBFooter>
	);
};

export default footer;

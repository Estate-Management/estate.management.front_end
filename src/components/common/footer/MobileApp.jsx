import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import "./mobileApp.scss";
import Link from "next/link";

const MobileApp = () => {
	return (
		<Container className="mobile-app">
			<Row className="g-3 justify-content-evenly align-items-center">
				<Col className="text-start">
					<Link href="/" className="btn btn-outline-light me-2 mt-1 w-50">
						<IoLogoAppleAppstore className= "fs-3"/> Apple Store
					</Link>
					<Link href="/" className="btn btn-outline-light mt-1 w-50">
						<IoLogoGooglePlaystore className= "fs-3"/> Play Store
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default MobileApp;

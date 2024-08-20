"use client";
import React from "react";
import { Card, Container, Placeholder, Row,Form } from "react-bootstrap";

const LoadingForm = ({
	title = "",
	inputCount = 10,
}) => {
	return (
		<Container>
			<Card>
				<Card.Body>
					<Card.Title style={{ fontSize: "1.7rem" }}>
						{title}
					</Card.Title>

					<Row xs={1} md={2} xl={3} gap="5">
						{[...new Array(inputCount)].map((_, index) => (
							<Form.Group
								as={Placeholder}
								animation="glow"
								key={index}
							>
								<Placeholder
									as={Form.Label}
									xs={3}
									bg="dark"
									className="rounded"
								></Placeholder>
								<Placeholder
									as={Form.Control}
									className="mb-3"
									bg="warning"
								></Placeholder>
							</Form.Group>
						))}
					</Row>

					<Placeholder animation="glow" className="d-flex gap-3">
						<Placeholder className="btn"></Placeholder>
						<Placeholder className="btn"></Placeholder>
					</Placeholder>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default LoadingForm;

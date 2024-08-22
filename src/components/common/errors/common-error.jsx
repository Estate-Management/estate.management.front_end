import Image from "next/image";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
const CommonError = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <Container>
      <Row className="g-5 g-sm-0 align-items-center ">
        <Col sm={6}>
          <Image
            src="/images/errors/error.jpg"
            className="img-fluid rounded-5 text-center"
            width={500}
            height={500}
            alt="Error"
          />
        </Col>
        <Col sm={6} className="text-center text-sm-start">
          <h2>Oops! It looks like something went wrong.</h2>
          <p>
            The page you are looking for is currently unavailable. Try to search
            again or return to the homepage.
          </p>
          <button className="btn btn-primary" onClick={() => reset()}>
            Go to Home Page
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default CommonError;

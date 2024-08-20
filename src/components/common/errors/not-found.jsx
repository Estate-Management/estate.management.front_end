import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const NotFound = () => {
  return (
    <Container>
      <Row className="g-5 g-sm-0 align-items-center ">
        <Col sm={6}>
          <Image
            src="/images/errors/error.png"
            className="img-fluid"
            width={500}
            height={500}
            alt="Not found"
          />
        </Col>
        <Col sm={6} className="text-center text-sm-start">
          <h2>Page not found.</h2>
          <p>
            The requested page could not be found on our server. We apologize
            for any inconvenience. Please check the URL for errors or return to
            the homepage. If you believe this is an error, kindly contact our
            support team for assistance. Thank you for your understanding.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;

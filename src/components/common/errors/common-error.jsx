import Image from "next/image";
import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CustomButton from "../custom-button/CustomButton";
const CommonError = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <Container>
      <Row className="align-items-center ">
        <Col sm={6}>
          <Image
            src="/images/errors/error.jpg"
            className="img-fluid rounded-5 text-center"
            width={500}
            height={600}
            alt="Error"
          />
        </Col>
        <Col sm={6} className="text-center text-sm-start g-5">
          <h2>Oops! It looks like something went wrong.</h2>
          <p>
            The page you are looking for is currently unavailable. Try to search
            again or return to the homepage.
          </p>
          {/* <Button className="btn btn-primary" href="/" onClick={() => reset()}>
            Go to Home Page
          </Button> */}
          <CustomButton href="/" onClick={() => reset()}>
            Go to Home Page
          </CustomButton>
        </Col>
      </Row>
    </Container>
  );
};

export default CommonError;

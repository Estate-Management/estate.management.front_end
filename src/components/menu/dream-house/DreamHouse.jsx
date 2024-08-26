import { Container, Row, Col, Button } from "react-bootstrap";
import "./dreamHouse.scss";
import Image from "next/image";
import CustomButton from "@/components/common/custom-button/CustomButton";
import dreamHouseImage from "@/../public/images/dream-house.jpg";

const DreamHouse = () => {
  return (
    <Container className="dream-house-banner">
      <Row className="align-items-center">
        <Col lg={6} className="image-col">
          <Image
            src={dreamHouseImage}
            alt="Dream House"
            className="img-fluid"
            width={650}
            height={500}
          />
        </Col>
        <Col lg={6} className="text-col">
          <h2 className="title">Get your dream house</h2>
          <p className="description">
            Turn your aspirations into reality with 'Get Your Dream House' —
            where your perfect home becomes a possibility.
          </p>
          {/* <Button variant="primary" className="register-button">
            Register Now <span className="arrow">➔</span>
          </Button> */}
          <CustomButton className="w-50" href="/register">
            Register Now <span className="arrow">➔</span>
          </CustomButton>
        </Col>
      </Row>
    </Container>
  );
};

export default DreamHouse;

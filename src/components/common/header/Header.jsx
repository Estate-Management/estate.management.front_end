import Logo from "@/components/logo";
import { Col, Container, Row } from "react-bootstrap";
import MainMenu from "./MainMenu";
import "./header.scss";
import LoginButton from "./Login";

const Header = ({className}) => {
  return (
      <Container fluid className="header-container">
        <Row className="header-row">
          <Col xs={4} md={3} lg={2} className="header-logo">
            <Logo className="ms-5"/>
          </Col>
          <Col xs={4} md={6} lg={8} className="header-menu">
            <MainMenu />
          </Col>
          <Col xs={4} md={3} lg={2} className="login">
            <LoginButton />
          </Col>
        </Row>
      </Container>
  );
};

export default Header;
import Logo from "@/components/common/logo";
import { Col, Container, Row } from "react-bootstrap";
import MainMenu from "./MainMenu";
import LoginButton from "./Login";
import "./header.scss";

const Header = ({ className }) => {
  return (
    <header className={`header ${className}`}>
      <Container>
        <Row className="header__row">
          <Col xs={4} md={3} lg={2} className="header__logo">
            <Logo />
          </Col>
          <Col xs={6} md={6} lg={8} className="header__menu">
            <MainMenu />
          </Col>
          <Col xs={2} md={3} lg={2} className="header__login">
            <LoginButton />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

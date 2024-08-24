"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.scss";
import Contacts from "./Contacts";
import { config } from "@/helpers/config";
import Menu from "./Menu";
import Logo from "@/components/logo";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={4} className="footer__logo">
            <Logo />
            <p className="footer__description">{config.project.description}</p>
          </Col>
          <Col xs={12} md={6} xl={5} className="footer__contact">
            <h3 className="footer__title">Contacts</h3>
            <Contacts />
          </Col>
          <Col xs={12} md={4} xl={2} className="footer__links">
            <h3 className="footer__title">Quick Links</h3>
            <Menu />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

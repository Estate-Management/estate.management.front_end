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
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={12} xl={4} className="footer-logo">
            <Logo />
            <p className="mt-3">{config.project.description}</p>
          </Col>
          <Col xs={12} md={6} xl={5} className="footer-contact">
            <h3>Contacts</h3>
            <Contacts />
          </Col>
          <Col xs={12} md={4} xl={2} className="footer-links">
            <h3>Quick Links</h3>
            <Menu />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

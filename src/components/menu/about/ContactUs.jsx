import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './contactUs.scss';

const ContactUs = () => {
  return (
    <Container className="contact-us-section">
      <Row className="align-items-center justify-content-between">
        <Col xs={12} lg={8} className="text-section">
          <h2 className="title">Need help? Talk to our expert.</h2>
          <p className="subtitle">Talk to our experts or browse through more properties.</p>
        </Col>
        <Col xs={12} lg={4} className="button-section">
          <Button variant="outline-primary" className="contact-button">
            Contact Us <span className="arrow-icon">↗</span>
          </Button>
          <Button variant="secondary" className="contact-button-alt">
            <span className="phone-icon">📞</span> Contact Us
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;

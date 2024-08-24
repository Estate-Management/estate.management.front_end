"use client";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import "./contactSection.scss";

// Dinamik olarak MapContainer, TileLayer ve diğer bileşenleri
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const position = [41.0082, 28.9784]; // Sultanahmet'in koordinatları

const ContactSection = () => {
  return (
    <section className="contact-section">
      <Container >
        <Row className="position-relative">
          <Col md={12} className="map-section">
            <MapContainer
              center={position}
              zoom={11}
              scrollWheelZoom={true}
              className="leaflet-map"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Sultanahmet, İstanbul, Turkey
                </Popup>
              </Marker>
            </MapContainer>
            <div className="form-overlay">
              <Form>
                <h3>Have a question? Get in touch!</h3>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                  />
                </Form.Group>

                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Enter your message"
                  />
                </Form.Group>

                <Form.Group controlId="formReCaptcha">
                  <Form.Check
                    type="checkbox"
                    label="I'm not a robot"
                    className="mt-3"
                  />
                </Form.Group>

                <Button variant="danger" type="submit" className="mt-3">
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="contact-info-section">
          <Col md={12} className="text-center">
            <h2>We'd Love To Hear From You.</h2>
            <p>
              We are here to answer any question you may have. As a partner of
              corporates, realton has more than 9,000 offices of all sizes and
              all potential of session.
            </p>
          </Col>
        </Row>
        <Row className="office-locations">
          <Col md={4} className="text-center">
            <div className="location-card">
              <div className="icon paris-icon"></div>
              <h5>PARIS</h5>
              <p>
                1301 2nd Ave, Seattle, WA 98101
                <br />
                (315) 905-2321
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="location-card">
              <div className="icon london-icon"></div>
              <h5>LONDON</h5>
              <p>
                1301 2nd Ave, Seattle, WA 98101
                <br />
                (315) 905-2321
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="location-card">
              <div className="icon istanbul-icon"></div>
              <h5>ISTANBUL</h5>
              <p>
                1301 2nd Ave, Seattle, WA 98101
                <br />
                (315) 905-2321
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;

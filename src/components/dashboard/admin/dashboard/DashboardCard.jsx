// DashboardCard.js
"use client";
import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaUsers, FaLayerGroup, FaPrint, FaBook, FaPrayingHands } from "react-icons/fa";
import './dashboardCard.scss';  // Custom SCSS file

const DashboardCard = () => {
  const data = [
    { title: "Customers", number: 1231, icon: <FaUsers /> },
    { title: "Categories", number: 1231, icon: <FaLayerGroup /> },
    { title: "Adverts", number: 1231, icon: <FaPrint /> },
    { title: "Advert Types", number: 1231, icon: <FaBook /> },
    { title: "Tour Requests", number: 1231, icon: <FaPrayingHands /> },
  ];

  return (
    <Container className="dashboard-container">
      <Row>
        {data.map((item, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
            <Card className="dashboard-card">
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="icon">{item.icon}</div>
                <Card.Title className="text-center">{item.title}</Card.Title>
                <Card.Text className="number">{item.number}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DashboardCard;

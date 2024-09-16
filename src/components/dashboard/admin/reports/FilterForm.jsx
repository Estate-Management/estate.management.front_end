import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { FaPrint } from "react-icons/fa";
import './filterForm.scss'; // Custom SCSS

const FilterForm = () => {
  return (
    <Container className="filter-form-container">
      {/* Adverts Section */}
      <Row className="form-section">
        <Col xs={12} md={10}>
          <h5>Adverts</h5>
          <Row className="align-items-center">
            <Col xs={12} md={6} lg={3}>
              <InputGroup>
                <Form.Control type="date" placeholder="Beginning date" />
              </InputGroup>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <InputGroup>
                <Form.Control type="date" placeholder="Ending date" />
              </InputGroup>
            </Col>
            <Col xs={12} md={6} lg={2}>
              <Form.Select>
                <option>Category</option>
                <option>Category 1</option>
                <option>Category 2</option>
              </Form.Select>
            </Col>
            <Col xs={12} md={6} lg={2}>
              <Form.Select>
                <option>Type</option>
                <option>Type 1</option>
                <option>Type 2</option>
              </Form.Select>
            </Col>
            <Col xs={12} md={6} lg={2}>
              <Form.Select>
                <option>Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={2} className="text-md-end text-center">
          <Button variant="light" className="print-btn">
            <FaPrint />
          </Button>
        </Col>
      </Row>

      {/* Most Popular Properties Section */}
      <Row className="form-section">
        <Col xs={12} md={10}>
          <h5>Most Popular Properties</h5>
          <Form.Control type="number" placeholder="Amount" />
        </Col>
        <Col xs={12} md={2} className="text-md-end text-center">
          <Button variant="light" className="print-btn">
            <FaPrint />
          </Button>
        </Col>
      </Row>

      {/* Users Section */}
      <Row className="form-section">
        <Col xs={12} md={10}>
          <h5>Users</h5>
          <Form.Select>
            <option>Roles</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>Customer</option>
          </Form.Select>
        </Col>
        <Col xs={12} md={2} className="text-md-end text-center">
          <Button variant="light" className="print-btn">
            <FaPrint />
          </Button>
        </Col>
      </Row>

      {/* Tour Requests Section */}
      <Row className="form-section">
        <Col xs={12} md={10}>
          <h5>Tour Requests</h5>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <InputGroup>
                <Form.Control type="date" placeholder="Beginning date" />
              </InputGroup>
            </Col>
            <Col xs={12} md={6}>
              <InputGroup>
                <Form.Control type="date" placeholder="Ending date" />
              </InputGroup>
            </Col>
            <Col xs={12} md={6}>
              <Form.Select>
                <option>Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={2} className="text-md-end text-center">
          <Button variant="light" className="print-btn">
            <FaPrint />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FilterForm;

import React from "react";
import { Container, Row, Col, Table, Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch, FaTrashAlt, FaEdit, FaHome } from "react-icons/fa";
import './categoriesTable.scss';  // Custom SCSS file

const CategoriesTable = () => {
  return (
    <Container className="table-container">
      {/* Header Section */}
      <Row className="align-items-center mb-3">
        <Col xs={12} md={8}>
          <InputGroup>
            <Form.Control type="text" placeholder="Type something" />
            <Button variant="outline-primary">
              <FaSearch />
            </Button>
          </InputGroup>
        </Col>
        <Col xs={12} md={4} className="text-md-end mt-3 mt-md-0">
          <Button className="add-new-btn">
            ADD NEW
          </Button>
        </Col>
      </Row>

      {/* Table Section */}
      <Table striped bordered hover responsive="md">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Sequence</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>
              <td><FaHome /></td>
              <td>Villa</td>
              <td>15</td>
              <td>&#10003;</td>
              <td>
                <Button variant="outline-danger" size="sm" className="me-2">
                  <FaTrashAlt />
                </Button>
                <Button variant="outline-secondary" size="sm">
                  <FaEdit />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CategoriesTable;

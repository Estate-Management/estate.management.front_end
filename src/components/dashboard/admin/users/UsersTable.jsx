import React from "react";
import { Table, Form, Button, Container, InputGroup } from "react-bootstrap";
import "./usersTable.scss";
import { FaSearch, FaTrashAlt, FaEdit } from "react-icons/fa";

const UsersTable = () => {
  const users = [
    {
      name: "Aaron, Hank",
      email: "example@example.com",
      phone: "(+45)145 45 45",
    },
    {
      name: "Aaron, Hank",
      email: "example@example.com",
      phone: "(+45)145 45 45",
    },
    {
      name: "Aaron, Hank",
      email: "example@example.com",
      phone: "(+45)145 45 45",
    },
    {
      name: "Aaron, Hank",
      email: "example@example.com",
      phone: "(+45)145 45 45",
    },
  ];

  return (
    <Container className="contact-table-container">
      <InputGroup>
        <Form.Control type="text" placeholder="Type something" />
        <Button variant="outline-primary">
          <FaSearch />
        </Button>
      </InputGroup>
      <Table responsive="lg" className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Button variant="danger" className="action-btn">
                  <FaTrashAlt />
                </Button>
                <Button variant="warning" className="action-btn">
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

export default UsersTable;

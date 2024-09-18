"use client";

import React from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  InputGroup,
  Table,
} from "react-bootstrap";
import { FaSearch, FaTrashAlt } from "react-icons/fa";
import "./messageList.scss"; // SCSS stil dosyasını dahil ediyoruz

const MessageList = () => {
  const messages = [
    { name: "Aaron, Hank", email: "example@example.com" },
    { name: "Aaron, Hank", email: "example@example.com" },
    { name: "Aaron, Hank", email: "example@example.com" },
    { name: "Aaron, Hank", email: "example@example.com" },
  ];

  return (
    <Container className="message-list-container">
      <div className="search-bar">
        <InputGroup>
          <Form.Control type="text" placeholder="Type something" />
          <Button variant="outline-primary">
            <FaSearch />
          </Button>
        </InputGroup>

        <Dropdown className="dropdown">
          <Dropdown.Toggle variant="outline-secondary">
            Search in
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>All messages</Dropdown.Item>
            <Dropdown.Item>Read</Dropdown.Item>
            <Dropdown.Item>Unread</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <h5>Unread messages</h5>

      <Table responsive className="message-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg, index) => (
            <tr key={index}>
              <td>{msg.name}</td>
              <td>{msg.email}</td>
              <td className="action-column">
                <Button variant="outline-danger" className="delete-button">
                  <FaTrashAlt />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MessageList;

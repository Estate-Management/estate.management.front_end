"use client";
import { Button, Form, InputGroup, Alert } from 'react-bootstrap';
import './deleteAccountForm.scss';
import { FaExclamationTriangle } from 'react-icons/fa';

const DeleteAccountForm = () => {
  return (
    <div className="delete-account-form">
      <Form>
        <Form.Group controlId="formFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Enter your last name" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" placeholder="Enter your phone number" />
        </Form.Group>
        <InputGroup className="mt-4">
          <Button variant="danger" type="submit" className="delete-account-btn">
            DELETE ACCOUNT
          </Button>
        </InputGroup>
      </Form>

      <Alert variant="danger" className="mt-4 account-deletion-info d-flex align-items-center">
        <FaExclamationTriangle className="alert-icon me-3" />
        <span>
          If you delete your account, all related records with this account will also be deleted permanently.
        </span>
        <FaExclamationTriangle className="alert-icon ms-3" />
      </Alert>
    </div>
  );
};

export default DeleteAccountForm;

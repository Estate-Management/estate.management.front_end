"use client";
import React from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import "./profileForm.scss";
import Link from "next/link";

const ProfileForm = () => {
  return (
    <Container className="account-form">
      <Row className="justify-content-center">
        <Col xs={10} sm={8} lg={6}>
          <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="Phone" />
            </Form.Group>

            <div className="text-center">
              <Button
                variant="danger"
                type="submit"
                className="update-button w-100"
              >
                Update
              </Button>
            </div>
          </Form>

          <Button
            variant="danger"
            className="mt-3 text-center delete-account"
            as={Link}
            href="/delete-account"
          >
            <span>
              If you want to delete your account, click here! If you delete your
              account, all related records with this account will also be
              deleted permanently.
            </span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileForm;

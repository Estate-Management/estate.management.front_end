"use client";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./resetPassword.scss";
import CustomButton from "@/components/common/custom-button/CustomButton";

const ResetPassword = () => {
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retryNewPassword, setRetryNewPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    // Handle the password reset logic here
    console.log("Reset Code:", resetCode);
    console.log("New Password:", newPassword);
    console.log("Retry New Password:", retryNewPassword);
  };

  return (
    <Container className="reset-password-container">
      <Row className="justify-content-center">
        <Col>
          <Form onSubmit={handleReset}>
            <Form.Group controlId="formResetCode">
              <Form.Label>Reset Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter reset code"
                value={resetCode}
                onChange={(e) => setResetCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formRetryNewPassword">
              <Form.Label>Retry New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Retry new password"
                value={retryNewPassword}
                onChange={(e) => setRetryNewPassword(e.target.value)}
              />
            </Form.Group>

            {/* <Button variant="danger" type="submit" className="reset-password-button">
              Reset Password
            </Button> */}

            <CustomButton>Reset Password</CustomButton>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;

"use client";
import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "./loginForm.scss";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="login-form">
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>

        <div className="forgot-password mt-2">
          <Link href="/forgot-password">Forgot password?</Link>
        </div>

        <InputGroup className="mt-4">
          <Button variant="danger" type="submit" className="login-btn">
            LOGIN
          </Button>
        </InputGroup>

        <div className="register-link mt-3">
          If you don’t have an account,{" "}
          <Link href="/register">Register now!</Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;

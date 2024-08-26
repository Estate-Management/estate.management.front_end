"use client";
import { Form, Button } from "react-bootstrap";
import "./registerForm.scss";
import Link from "next/link";
import CustomButton from "@/components/common/custom-button/CustomButton";

const RegisterForm = () => {
  return (
    <div className="form-box">
      <Form>
        <Form.Group className="mt-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>

        <Form.Group className="mt-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>

        <Form.Group className="mt-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" />
        </Form.Group>

        <Form.Group className="mt-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mt-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Form.Group className="mt-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" />
        </Form.Group>

        {/* <Button variant="primary" type="submit" className='register-btn'>
            Register
          </Button> */}

        <CustomButton>Register</CustomButton>

        <div className="login-link">
          <p>
            If you already have an account,{" "}
            <Link href="/login">Login now!</Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;

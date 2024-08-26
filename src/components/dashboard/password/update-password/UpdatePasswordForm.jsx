"use client";
import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "./updatePasswordForm.scss";
import CustomButton from "@/components/common/custom-button/CustomButton";

const UpdatePasswordForm = () => {
  return (
    <div className="update-password-form">
      <Form>
        <Form.Group controlId="formCurrentPassword">
          <Form.Label>Current Password</Form.Label>
          <Form.Control type="password" placeholder="Enter current password" />
        </Form.Group>

        <Form.Group controlId="formNewPassword" className="mt-3">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Enter new password" />
        </Form.Group>

        <Form.Group controlId="formRetryNewPassword" className="mt-3">
          <Form.Label>Retry New Password</Form.Label>
          <Form.Control type="password" placeholder="Retry new password" />
        </Form.Group>

        <InputGroup className="mt-4">
          {/* <Button variant="danger" type="submit" className="update-btn">
            Update
          </Button> */}
          <CustomButton>Update</CustomButton>
        </InputGroup>
      </Form>
    </div>
  );
};

export default UpdatePasswordForm;

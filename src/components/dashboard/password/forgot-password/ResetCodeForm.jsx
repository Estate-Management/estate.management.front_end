"use client";
import { Button, Form, InputGroup } from "react-bootstrap";
import "./resetCodeForm.scss";
import CustomButton from "@/components/common/custom-button/CustomButton";

const ResetCodeForm = () => {
  return (
    <div className="reset-code-form">
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <InputGroup className="mt-3">
          {/* <Button variant="danger" type="submit" className="send-code-btn">
            SEND RESET CODE
          </Button> */}
          <CustomButton>SEND RESET CODE</CustomButton>
        </InputGroup>
      </Form>
    </div>
  );
};

export default ResetCodeForm;

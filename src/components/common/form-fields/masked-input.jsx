"use client";
import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import ReactInputMask from "react-input-mask-next";
const MaskedInput = ({ className, label, error, ...rest }) => {
  return (
    <>
      <FloatingLabel
        className={className}
        controlId={rest.name}
        label="Phone Number"
      >
        <Form.Control
          {...rest}
          className="form-control"
          isInvalid={!!error}
          as={ReactInputMask}
        />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </FloatingLabel>
    </>
  );
};

export default MaskedInput;

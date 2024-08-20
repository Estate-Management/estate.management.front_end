"use client";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaEyeSlash, FaEye  } from "react-icons/fa";

const PasswordInput = ({ error, ...rest }) => {
  const [type, setType] = useState("password");

  const togglePassword = () => {
    // if (type === "password") {
    //   setType("text");
    // } else {
    //   setType("password");
    // }

    setType((prev) => prev === "password" ? "text" : "password");
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder=""
        aria-label="Password"        
        aria-describedby="password"
        type={type}
        {...rest}
        isInvalid={!!error} 
        size="lg"
      />
      <InputGroup.Text
        id="password"
        style={{ cursor: "pointer" ,height:"auto",}}
        onClick={togglePassword}
        
      >
        {type === "password" ? <FaEye /> : <FaEyeSlash/>}
      </InputGroup.Text>
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </InputGroup>
  );
};

export default PasswordInput;

import React from "react";
import { Button } from "react-bootstrap";
import './customButton.scss';

const CustomButton = ({ children, type = "submit", className = "mt-3", ...props }) => {
  return (
    <Button type={type} className={`custom-button ${className}`} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;

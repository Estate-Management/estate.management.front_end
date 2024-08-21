import React from "react";
import "./loginButton.scss";

const LoginButton = ({ onClick }) => {
  return (
    <button className="login-button" onClick={onClick}>
      Log In
    </button>
  );
};

export default LoginButton;

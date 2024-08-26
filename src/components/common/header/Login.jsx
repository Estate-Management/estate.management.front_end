import React from "react";
import "./loginButton.scss";
import CustomButton from "../custom-button/CustomButton";

const LoginButton = ({ onClick }) => {
  return (
    // <button className="login-button" onClick={onClick}>
    //   Log In
    // </button>
    <CustomButton href="/login" onClick={onClick}>
      Log In
    </CustomButton>
  );
};

export default LoginButton;

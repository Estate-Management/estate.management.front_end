"use client";
import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useFormStatus } from "react-dom";
import Icon from "../icon";

const SubmitButton = ({
  // title = "Submit",
  icon = "CiLogin",
  iconFamily = "ci",
  spinnerVariant = "secondary",
  ...rest
}) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" {...rest} disabled={pending}>
      {pending ? (
        <Spinner variant={spinnerVariant} size="sm" />
      ) : (
        <>
          {/* {title} */} Submit
          <Icon
            style={{ fontSize: "1.5rem", marginLeft: "0.5rem" }}
            family={iconFamily}
            icon={icon}
          />
        </>
      )}
    </Button>
  );
};

export default SubmitButton;

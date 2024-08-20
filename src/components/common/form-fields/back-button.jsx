"use client";
import React from "react";
import { Button } from "react-bootstrap";
import Icon from "../icon";
import { useRouter } from "next/navigation";
const BackButton = ({
  // title = "Return Back",
  icon = "MdOutlineArrowBack",
  iconfamily = "md",
  ...rest
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <Button type="button" variant="primary" {...rest} onClick={handleClick}>
      <Icon family={iconfamily} icon={icon} /> Return Back
    </Button>
  );
};

export default BackButton;

import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavbarBrand } from "react-bootstrap";

const Logo = ({ type = "light", className}) => {
  return (
    <NavbarBrand href="/" as={Link} >
      <Image
        src={`/images/logo-with-name.png`}
        alt="logo"
        width={200}
        height={80}
        className={className}
      />
    </NavbarBrand>
  );
};

export default Logo;

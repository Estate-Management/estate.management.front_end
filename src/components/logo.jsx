import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavbarBrand } from "react-bootstrap";

const Logo = ({ type = "light" }) => {
  return (
    <NavbarBrand href="/" as={Link} >
      <Image
        src={`/images/logo/logo-${type}.png`}
        alt="logo"
        width={150}
        height={80}
      />
    </NavbarBrand>
  );
};

export default Logo;

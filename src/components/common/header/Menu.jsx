"use client";
import React from "react";
import Icon from "../icon";
import { Nav } from "react-bootstrap";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <Nav.Item>
        <Nav.Link href="/" as={Link}>
          <div className="d-flex align-items-center">
            <Icon className="icon me-1" family="md" icon="MdHome" />
            Home
          </div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/properties" as={Link}>
          <div className="d-flex align-items-center">
            <Icon className="icon me-1" family="md" icon="MdRealEstateAgent" />
            Properties
          </div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about" as={Link}>
          <div className="d-flex align-items-center">
            <Icon className="icon me-1" family="md" icon="MdInfoOutline" />
            About
          </div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact" as={Link}>
          <div className="d-flex align-items-center">
            <Icon className="icon me-1" family="md" icon="MdContactPhone" />
            Contact
          </div>
        </Nav.Link>
      </Nav.Item>
    </>
  );
};

export default Menu;

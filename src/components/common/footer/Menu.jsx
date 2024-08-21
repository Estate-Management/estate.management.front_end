import React from "react";
import { Nav } from "react-bootstrap";
import Icon from "../icon";
import Link from "next/link";

const Menu = () => {
  return (
    <Nav>
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
      <Nav.Item>
        <Nav.Link href="/privacy-policy" as={Link}>
          <div>
            <Icon
              className="icon me-1"
              family="md"
              icon="MdPrivateConnectivity"
            />
            Private Policy
          </div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Menu;

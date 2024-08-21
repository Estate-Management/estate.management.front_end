"use client";
import { config } from "@/helpers/config";
import React from "react";
import { Nav } from "react-bootstrap";
import { MdPhoneForwarded, MdEmail, MdLocationPin } from "react-icons/md";
import Icon from "../icon";
import MobileApp from "./MobileApp";

const Contacts = () => {
  return (
    <>
      <Nav>
        <Nav.Link href={`tel:${config.contact.phone1}`}>
          <Icon family="md" icon="MdPhoneForwarded" /> {config.contact.phone1}
        </Nav.Link>
        <Nav.Link href={`mailto:${config.contact.email}`}>
          <Icon family="md" icon="MdEmail" /> {config.contact.email}
        </Nav.Link>
        <Nav.Link href={config.contact.mapURL} target="_blank">
          <Icon family="md" icon="MdLocationPin" /> {config.contact.address}
        </Nav.Link>
        <MobileApp />
      </Nav>
    </>
  );
};

export default Contacts;

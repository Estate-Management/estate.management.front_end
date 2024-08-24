"use client";
import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./mainMenu.scss";
import Menu from "./Menu";

const MainMenu = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Container>
      <Navbar expand="lg" className="main-menu">
        <Navbar.Toggle aria-controls="navbar-menu" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-menu">
          <Nav>
            <Menu className="main-menu__items" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleToggle}
        placement="start"
        className="main-menu__offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Menu className="main-menu__items" />
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default MainMenu;

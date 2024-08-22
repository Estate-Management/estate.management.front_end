"use client";
import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./mainMenu.scss";
import Menu from "./Menu";
const MainMenu = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Navbar expand="lg" className="header-nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="">
            <Menu className="menu" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className="offcanvas-header-menu"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3>Menu</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body">
          <Menu className="menu" />
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default MainMenu;

import React from "react";
import "./section-title.scss";
import { Container } from "react-bootstrap";

const SectionTitle = ({ children }) => {
  return (
    <div className="section-title-wrapper">
      <Container>
        <h2 className="section-title">{children}</h2>
      </Container>
    </div>
  );
};

export default SectionTitle;

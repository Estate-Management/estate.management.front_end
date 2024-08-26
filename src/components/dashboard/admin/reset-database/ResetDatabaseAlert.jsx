import React from "react";
import { Button, Container, Row, Col, Alert } from "react-bootstrap";
import "./resetDatabaseAlert.scss";
import { FaExclamationTriangle } from "react-icons/fa";
import CustomButton from "@/components/common/custom-button/CustomButton";

const ResetDatabaseAlert = () => {
  return (
    <Container className="alert-custom mt-4">
      <Row>
        <Col xs={12}>
          <Alert
            variant="danger"
            className="mt-4 account-deletion-info d-flex align-items-center"
          >
            <FaExclamationTriangle className="alert-icon me-3 fs-1 text-warning" />
            <span>
              You are about to delete all records except those whose built-in
              fields are true. Are you sure you want to reset the database?
            </span>
            <FaExclamationTriangle className="alert-icon ms-3 fs-1 text-warning" />
          </Alert>
          {/* <Button className="btn-custom">Reset Database</Button> */}
          <CustomButton className="w-25">Reset Database</CustomButton>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetDatabaseAlert;

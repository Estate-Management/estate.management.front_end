"use client";
import React, { useState } from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Field, Form as FormikForm } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./resetPassword.scss";
import CustomButton from "@/components/common/custom-button/CustomButton";
import { showSuccess, showError } from "@/helpers/alert-service";

// Yup validation schema
const validationSchema = Yup.object().shape({
  resetCode: Yup.string().required("Reset code is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one digit")
    .required("New password is required"),
  retryNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], "Passwords must match")
    .required("Please confirm your password"),
});

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetryPassword, setShowRetryPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  return (
    <Container className="reset-password-container">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Formik
            initialValues={{
              resetCode: "",
              newPassword: "",
              retryNewPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              setLoading(true); // Set loading to true on submit
              try {
                const response = await axios.post("API_URL", {
                  resetCode: values.resetCode,
                  newPassword: values.newPassword,
                });

                if (response.status === 200) {
                  showSuccess("Password reset successful", "Your password has been reset.");
                } else {
                  showError("Error resetting password", "There was an issue with your request.");
                }
              } catch (error) {
                console.error("Error:", error);
                showError("Error resetting password", "An unexpected error occurred.");
              } finally {
                setLoading(false); // Set loading to false after the request is complete
                setSubmitting(false);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <FormikForm onSubmit={handleSubmit}>
                <Form.Group controlId="formResetCode">
                  <Form.Label>Reset Code</Form.Label>
                  <Field
                    type="text"
                    placeholder="Enter reset code"
                    name="resetCode"
                    as={Form.Control}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.resetCode && touched.resetCode}
                    disabled={loading}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.resetCode}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formNewPassword" className="mt-3">
                  <Form.Label>New Password</Form.Label>
                  <InputGroup className="password-wrapper">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="newPassword"
                      as={Form.Control}
                      placeholder="Enter new password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.newPassword && touched.newPassword}
                      disabled={loading}
                    />
                    <span
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    <Form.Control.Feedback type="invalid">
                      {errors.newPassword}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formRetryNewPassword" className="mt-3">
                  <Form.Label>Retry New Password</Form.Label>
                  <InputGroup className="password-wrapper">
                    <Field
                      type={showRetryPassword ? "text" : "password"}
                      name="retryNewPassword"
                      as={Form.Control}
                      placeholder="Retry new password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.retryNewPassword && touched.retryNewPassword}
                      disabled={loading}
                    />
                    <span
                      className="toggle-password"
                      onClick={() => setShowRetryPassword(!showRetryPassword)}
                    >
                      {showRetryPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    <Form.Control.Feedback type="invalid">
                      {errors.retryNewPassword}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <CustomButton type="submit" disabled={isSubmitting || loading}>
                  {loading ? "Resetting..." : "Reset Password"}
                </CustomButton>
              </FormikForm>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;

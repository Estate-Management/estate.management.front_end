"use client";
import React, { useState } from "react";
import axios from "axios";
import { Form, InputGroup } from "react-bootstrap";
import CustomButton from "@/components/common/custom-button/CustomButton";
import { showSuccess, showError } from "@/helpers/alert-service";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Field, Form as FormikForm } from "formik";
import * as Yup from "yup";
import "./updatePasswordForm.scss";

// Define validation schema with Yup
const validationSchema = Yup.object({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(/[\W_]/, "Password must contain at least one special character"), //\W matches any non-word character, \_ is included to specifically allow underscores as special characters.
  retryNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Please confirm your new password"),
});

const UpdatePasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRetryNewPassword, setShowRetryNewPassword] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true);

    try {
      await axios.post("API_URL", {
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });
      showSuccess("Success", "Password updated successfully!");
    } catch (err) {
      showError("Error", "Failed to update password. Please try again.");
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="update-password-form">
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          retryNewPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <FormikForm>
            <Form.Group controlId="formCurrentPassword">
              <Form.Label>Current Password</Form.Label>
              <InputGroup className="password-wrapper">
                <Field
                  type={showCurrentPassword ? "text" : "password"}
                  name="currentPassword"
                  as={Form.Control}
                  placeholder="Enter current password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={
                    touched.currentPassword && !!errors.currentPassword
                  }
                  disabled={loading}
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <Form.Control.Feedback type="invalid">
                  {errors.currentPassword}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formNewPassword" className="mt-3">
              <Form.Label>New Password</Form.Label>
              <InputGroup className="password-wrapper">
                <Field
                  type={showNewPassword ? "text" : "password"}
                  name="newPassword"
                  as={Form.Control}
                  placeholder="Enter new password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.newPassword && !!errors.newPassword}
                  disabled={loading}
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <FaEyeSlash /> : <FaEye />}
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
                  type={showRetryNewPassword ? "text" : "password"}
                  name="retryNewPassword"
                  as={Form.Control}
                  placeholder="Retry new password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={
                    touched.retryNewPassword && !!errors.retryNewPassword
                  }
                  disabled={loading}
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowRetryNewPassword(!showRetryNewPassword)}
                >
                  {showRetryNewPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <Form.Control.Feedback type="invalid">
                  {errors.retryNewPassword}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <InputGroup className="mt-4">
              <CustomButton type="submit" disabled={loading || isSubmitting}>
                {loading ? "Updating..." : "Update"}
              </CustomButton>
            </InputGroup>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default UpdatePasswordForm;

"use client";
import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./resetCodeForm.scss";
import CustomButton from "@/components/common/custom-button/CustomButton";
import { showError, showSuccess } from "@/helpers/alert-service";
import axios from "axios";

// Yup ile doğrulama şeması
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
});

const ResetCodeForm = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    const { email } = values;

    setSubmitting(true);

    try {
      const response = await axios.post(
        "API_URL",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        showSuccess("Reset code sent");
      } else {
        showError("Error sending reset code");
      }
    } catch (error) {
      console.error(error);
      showError("Error sending reset code");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="reset-code-form">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <Field
                  type="email"
                  name="email"
                  as={Form.Control}
                  placeholder="name@example.com"
                  isInvalid={!!ErrorMessage}
                />
                <Form.Control.Feedback type="invalid">
                  <ErrorMessage name="email" />
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <InputGroup className="mt-3">
              <CustomButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "SEND RESET CODE"}
              </CustomButton>
            </InputGroup>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default ResetCodeForm;

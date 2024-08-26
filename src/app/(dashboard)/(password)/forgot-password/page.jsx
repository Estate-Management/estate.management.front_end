import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import ResetCodeForm from "@/components/dashboard/password/forgot-password/ResetCodeForm";
import React from "react";

const ForgotPasswordPage = () => {
  return (
    <>
      <SectionTitle>FORGOT PASSWORD</SectionTitle>
      <ResetCodeForm />
    </>
  );
};

export default ForgotPasswordPage;

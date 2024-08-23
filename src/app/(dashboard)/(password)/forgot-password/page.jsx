import SectionTitle from "@/components/common/section-title";
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

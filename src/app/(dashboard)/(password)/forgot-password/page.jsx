import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import ResetCodeForm from "@/components/dashboard/password/forgot-password/ResetCodeForm";
import React from "react";

export const metadata = {
  title: "Forgot Password",
  description: "Request a password reset link to regain access to your account.",
};

const ForgotPasswordPage = () => {
  return (
    <>
      <SectionTitle>FORGOT PASSWORD</SectionTitle>
      <ResetCodeForm />
      <Spacer />
    </>
  );
};

export default ForgotPasswordPage;

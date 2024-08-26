import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import ResetCodeForm from "@/components/dashboard/password/forgot-password/ResetCodeForm";
import React from "react";

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

import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import ResetPassword from "@/components/dashboard/password/reset-password/ResetPassword";
import React from "react";

const ResetPasswordPage = () => {
  return (
    <>
      <SectionTitle>RESET PASSWORD</SectionTitle>
      <ResetPassword />
      <Spacer />
    </>
  );
};

export default ResetPasswordPage;

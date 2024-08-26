import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import UpdatePasswordForm from "@/components/dashboard/password/update-password/UpdatePasswordForm";
import React from "react";

const UpdatePasswordPage = () => {
  return (
    <>
      <SectionTitle>Update Password</SectionTitle>
      <UpdatePasswordForm />
      <Spacer />
    </>
  );
};

export default UpdatePasswordPage;

import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import ResetDatabaseAlert from "@/components/dashboard/admin/reset-database/ResetDatabaseAlert";
import React from "react";

const ResetDatabase = () => {
  return (
    <>
      <SectionTitle>Reset Database</SectionTitle>
      <ResetDatabaseAlert />
      <Spacer />
    </>
  );
};

export default ResetDatabase;

import SectionTitle from "@/components/common/section-title";
import ResetDatabaseAlert from "@/components/dashboard/admin/reset-database/ResetDatabaseAlert";
import React from "react";

const ResetDatabase = () => {
  return (
    <>
      <SectionTitle>Reset Database</SectionTitle>
      <ResetDatabaseAlert/>
    </>
  );
};

export default ResetDatabase;

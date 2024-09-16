import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import FilterForm from "@/components/dashboard/admin/reports/FilterForm";
import React from "react";

const ReportsPage = () => {
  return (
    <>
      <SectionTitle>Reports</SectionTitle>
      <FilterForm />
      <Spacer />
    </>
  );
};

export default ReportsPage;

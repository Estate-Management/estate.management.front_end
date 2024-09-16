import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import DashboardCard from "@/components/dashboard/admin/dashboard/DashboardCard";
import React from "react";

const DashboardPage = () => {
  return (
    <>
      <SectionTitle>DASHBOARD</SectionTitle>
      <DashboardCard />
      <Spacer />
    </>
  );
};

export default DashboardPage;

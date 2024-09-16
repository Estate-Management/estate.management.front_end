import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import CategoriesTable from "@/components/dashboard/admin/categories/CategoriesTable";
import React from "react";

const CategoriesPage = () => {
  return (
    <>
      <SectionTitle>CATEGORIES</SectionTitle>
      <CategoriesTable />
      <Spacer />
    </>
  );
};

export default CategoriesPage;

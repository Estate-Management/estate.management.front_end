import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import UsersTable from "@/components/dashboard/admin/users/UsersTable";
import React from "react";

const UsersPage = () => {
  return (
    <>
      <SectionTitle>Users</SectionTitle>
      <UsersTable />
      <Spacer />
    </>
  );
};

export default UsersPage;

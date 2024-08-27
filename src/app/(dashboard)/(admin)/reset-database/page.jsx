import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import ResetDatabaseAlert from "@/components/dashboard/admin/reset-database/ResetDatabaseAlert";
export const metadata = {
  title: "Reset Database",
  description: "Reset your database by clearing all records except those with built-in fields marked as true.",
};
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

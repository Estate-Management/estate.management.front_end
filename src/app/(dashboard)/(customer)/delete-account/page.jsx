import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import DeleteAccountForm from "@/components/dashboard/customer/delete-account/DeleteAccountForm";

export const metadata = {
  title: "Delete Account",
  description: "Permanently delete your account and all associated data from our system.",
};
const DeleteAccountPage = () => {
  return (
    <>
      <SectionTitle>DELETE ACCOUNT</SectionTitle>
      <DeleteAccountForm />
    </>
  );
};

export default DeleteAccountPage;

import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import UpdatePasswordForm from "@/components/dashboard/password/update-password/UpdatePasswordForm";

export const metadata = {
  title: "Update Password",
  description: "Change your current password to a new one.",
};

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

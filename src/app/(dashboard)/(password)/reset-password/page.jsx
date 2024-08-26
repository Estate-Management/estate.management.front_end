import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import ResetPassword from "@/components/dashboard/password/reset-password/ResetPassword";

export const metadata = {
  title: "Reset Password",
  description: "Reset your account password through this secure form.",
};
const ResetPasswordPage = () => {
  return (
    <>
      <SectionTitle>RESET PASSWORD</SectionTitle>
      <ResetPassword />
      <Spacer />
    </>
  );
};

export default ResetPasswordPage;

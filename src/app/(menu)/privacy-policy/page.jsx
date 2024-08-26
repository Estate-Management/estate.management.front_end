import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import PrivacyPolicy from "@/components/menu/privacy-policy/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy",
  description: "Understand how we collect, use, and protect your personal information.",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <SectionTitle>PRIVACY POLICY</SectionTitle>
      <PrivacyPolicy />
      <Spacer />
    </>
  );
};

export default PrivacyPolicyPage;

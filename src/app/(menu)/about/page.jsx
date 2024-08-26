import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import ContactUs from "@/components/menu/about/ContactUs";
import MissionSection from "@/components/menu/about/MissionSection";
import SellingOptions from "@/components/menu/about/SellingOptions";

export const metadata = {
  title: "About Us",
  description: "Learn more about our company, mission, and team.",
};
const AboutPage = () => {
  return (
    <>
      <SectionTitle>ABOUT US</SectionTitle>
      <MissionSection />
      <SellingOptions />
      <ContactUs />
      <Spacer />
    </>
  );
};

export default AboutPage;

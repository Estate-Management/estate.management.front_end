import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import ContactSection from "@/components/menu/contact/ContactSection ";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us for support or inquiries.",
};

const ContactPage = () => {
  return (
    <>
      <SectionTitle>CONTACT US</SectionTitle>
      <ContactSection />
      <Spacer />
    </>
  );
};

export default ContactPage;

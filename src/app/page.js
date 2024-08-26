import PropertySearch from "@/components/menu/property-search/PropertySearch";
import Spacer from "@/components/common/spacer";
import ContactUs from "@/components/menu/about/ContactUs";
import SellingOptions from "@/components/menu/about/SellingOptions";
import DreamHouse from "@/components/menu/dream-house/DreamHouse";

export const metadata = {
  title: "Home | Luvenda",
  description: "Welcome to our website. Discover our features and offerings.",
};

export default function Home() {
  return (
    <>
      <Spacer />
      <PropertySearch />
      <Spacer />
      <DreamHouse />
      <Spacer />
      <SellingOptions />
      <Spacer />
      <ContactUs />
      <Spacer />
    </>
  );
}

import PropertySearch from "@/components/common/property-search/PropertySearch";
import Spacer from "@/components/common/spacer";
import ContactUs from "@/components/menu/about/ContactUs";
import SellingOptions from "@/components/menu/about/SellingOptions";
import DreamHouse from "@/components/menu/dream-house/DreamHouse";

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

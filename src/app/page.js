import PropertySearch from "@/components/common/property-search/PropertySearch";
import Spacer from "@/components/common/spacer";
import ContactUs from "@/components/menu/about/ContactUs";
import SellingOptions from "@/components/menu/about/SellingOptions";

export default function Home() {
  return (
    <>
      <Spacer />
      <PropertySearch />
      <SellingOptions />
      <ContactUs />
      <Spacer />
    </>
  );
}

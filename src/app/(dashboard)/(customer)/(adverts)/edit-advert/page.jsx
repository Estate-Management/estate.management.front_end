import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import Spacer from "@/components/common/spacer";
import EditAdvert from "@/components/dashboard/customer/adverts/edit-page/EditAdvert";
import React from "react";

const EditAdvertPage = () => {
  return (
    <>
      <SectionTitle>Edit Advert</SectionTitle>
      <EditAdvert />
      <Spacer/>
    </>
  );
};

export default EditAdvertPage;

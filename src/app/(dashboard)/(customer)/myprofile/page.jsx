import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import ProfileForm from "@/components/dashboard/customer/myprofile/ProfileForm";

export const metadata = {
  title: "My Profile",
  description: "View and edit your profile information.",
};


const MyProfilePage = () => {
  return (
    <>
      <SectionTitle>MY PROFILE</SectionTitle>
      <ProfileForm />
    </>
  );
};

export default MyProfilePage;

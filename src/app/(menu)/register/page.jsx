import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import RegisterForm from "@/components/menu/register/RegisterForm";

export const metadata = {
  title: "Register",
  description: "Create a new account by providing your details.",
};

const Register = () => {
  return (
    <>
      <SectionTitle>REGISTER</SectionTitle>
      <RegisterForm />
    </>
  );
};

export default Register;

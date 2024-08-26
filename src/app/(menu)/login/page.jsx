import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import LoginForm from "@/components/menu/login/LoginForm";

export const metadata = {
  title: "Login",
  description: "Access your account by logging in with your credentials.",
};

const LoginPage = () => {
  return (
    <>
      <SectionTitle>LOGIN</SectionTitle>
      <LoginForm />
    </>
  );
};

export default LoginPage;

"use client";
import CommonError from "@/components/common/errors/common-error";
import Spacer from "@/components/common/spacer";

export const metadata = {
  title: "Error",
  description: "An unexpected error has occurred. Please try again later.",
};


const ErrorPage = ({ error, reset }) => {
  return (
    <>
      <Spacer />
      <CommonError error={error} reset={reset} />
      <Spacer />
    </>
  );
};

export default ErrorPage;

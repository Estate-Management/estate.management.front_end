import Image from "next/image";
import React from "react";
import CustomButton from "../custom-button/CustomButton";

const UnAuthorized = () => {
  return (
    <div className="container">
      <div className="row g-5 g-sm-0 align-items-center">
        <div className="col-sm-6">
          <Image
            src="/images/errors/unauthorized.jpg"
            className="img-fluid"
            width="500"
            height={500}
            alt="Unauthorized"
          />
        </div>
        <div className="col-sm-6 text-center text-sm-start">
          <h2>Sorry, you are not authorized to access this page.</h2>
          <p>
            Please check your credentials or contact your system administrator.
          </p>
          {/* <button className="btn btn-primary">Logout</button> */}
          <CustomButton>Logout</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default UnAuthorized;

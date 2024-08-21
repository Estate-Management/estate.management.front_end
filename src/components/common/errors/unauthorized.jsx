import Image from "next/image";
import React from "react";

const UnAuthorized = () => {
  return (
    <div className="container">
      <div className="row g-5 g-sm-0 align-items-center">
        <div className="col-sm-6">
          <Image
            src="/images/errors/unauthorized.png"
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
          <button className="btn btn-primary">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default UnAuthorized;

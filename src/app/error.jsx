"use client"
import CommonError from "@/components/common/errors/common-error";
import Spacer from "@/components/common/spacer";
import React from "react";

const ErrorPage = ({ error, reset }) => {
	return (
		<>
			<Spacer height={30}/>
			<CommonError error={error} reset={reset} />
			<Spacer height={30}/>
		</>
	);
};

export default ErrorPage;

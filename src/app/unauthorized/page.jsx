import UnAuthorized from "@/components/common/errors/unauthorized";
import Spacer from "@/components/common/spacer";
import React from "react";

export const metadata = {
	title: "Unauthorized",
	description: "You do not have permission to access this page.",
  };
  
const UnAuthorizedPage = () => {
	return (
		<>
			<Spacer/>
			<UnAuthorized />
			<Spacer/>
		</>
	);
};

export default UnAuthorizedPage;

import UnAuthorized from "@/components/common/errors/unauthorized";
import Spacer from "@/components/common/spacer";
import React from "react";

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

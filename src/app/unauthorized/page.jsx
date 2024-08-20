import UnAuthorized from "@/components/common/errors/unauthorized";
import Spacer from "@/components/common/spacer";
import React from "react";

const UnAuthorizedPage = () => {
	return (
		<>
			<Spacer height={30}/>
			<UnAuthorized />
			<Spacer height={30}/>
		</>
	);
};

export default UnAuthorizedPage;

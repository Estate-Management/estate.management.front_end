import NotFound from "@/components/common/errors/not-found";
import Spacer from "@/components/common/spacer";
import React from "react";

const NotFoundPage = () => {

	return (
		<>
			<Spacer height={30}/>
			<NotFound />
			<Spacer height={30}/>
		</>
	);
};

export default NotFoundPage;

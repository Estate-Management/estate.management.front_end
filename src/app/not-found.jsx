import NotFound from "@/components/common/errors/not-found";
import Spacer from "@/components/common/spacer";
import React from "react";

export const metadata = {
	title: "Page Not Found",
	description: "The page you're looking for does not exist.",
  };
const NotFoundPage = () => {
	return (
		<>
			<Spacer />
			<NotFound />
			<Spacer />
		</>
	);
};

export default NotFoundPage;

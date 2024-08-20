import React from "react";
import "./page-header.scss";

const PageHeader = ({ children }) => {
	return <h1 className="page-header">{children}</h1>;
};

export default PageHeader;

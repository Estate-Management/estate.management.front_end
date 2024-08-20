"use client";
import React from "react";
import { Form } from "react-bootstrap";

const Checkbox = ({ className, label, error, ...rest }) => {
	return (
		<Form.Group className={className} controlId={rest.name}>
			<Form.Check // prettier-ignore
				id={rest.name}
                defaultValue={true}
				label={label}
				isInvalid={!!error}
				{...rest}
			/>
			<Form.Control.Feedback type="invalid">
				{error}
			</Form.Control.Feedback>
		</Form.Group>
	);
};

export default Checkbox;

"use client";
import React from "react";
import { Form } from "react-bootstrap";

const TextInput = ({ className, label, error, ...rest }) => {
	return (
		<Form.Group className={className} controlId={rest.name}>
			<Form.Label>{label}</Form.Label>
			<Form.Control {...rest} isInvalid={!!error} />
			<Form.Control.Feedback type="invalid">
				{error}
			</Form.Control.Feedback>
		</Form.Group>
	);
};

export default TextInput;

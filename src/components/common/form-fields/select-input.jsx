"use client";
import React from "react";
import { Form } from "react-bootstrap";

const SelectInput = ({
	className,
	options,
	optionValue,
	optionLabel,
	error,
	label,
	...rest
}) => {
	if (!Array.isArray(options))
		throw new Error("Options must be array for SelectInput");
	if (!optionValue) throw new Error("optionValue is missing for SelectInput");
	if (!optionLabel) throw new Error("optionLabel is missing for SelectInput");

	return (
		<Form.Group className={className} controlId={rest.name}>
			<Form.Label>{label}</Form.Label>
			<Form.Select aria-label={label} {...rest} isInvalid={!!error}>
				<option disabled value="">
					Choose
				</option>
				{options.map((item) => (
					<option key={item[optionValue]} value={item[optionValue]}>
						{item[optionLabel]}
					</option>
				))}
			</Form.Select>
			<Form.Control.Feedback type="invalid">
				{error}
			</Form.Control.Feedback>
		</Form.Group>
	);
};

export default SelectInput;

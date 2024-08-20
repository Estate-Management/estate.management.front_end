"use client";
import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";

const MultiSelect = (props) => {
	const {
		options,
		optionValue,
		optionLabel,
		label,
		className,
		values,
		error,
		name,
	} = props;


	const [selectedItems, setSelectedItems] = useState(
		Array.isArray(values) ? [...values] : []
	);


	const handleChange = (e) => {
		const val = e.target.value;

		let arr = [...selectedItems];

		if (selectedItems.includes(val)) {
			arr = selectedItems.filter((item) => item !== val);
		} else {
			arr.push(val);
		}

		setSelectedItems(arr);
	};

	const getTitleOfSelectedItems = () => {
		const label = selectedItems
			.map(
				(id) =>
					options.find((item) => item[optionValue] == id)[optionLabel]
			)
			.join("-");

		return label || "Choose";
	};

	const isChecked = (id) => {
		return selectedItems.includes(id.toString());
	};

	return (
		<>
			<input
				type="hidden"
				name={name}
				value={JSON.stringify(selectedItems)}
			/>
			<Form.Group className={className} controlId={name}>
				<Form.Label>{label}</Form.Label>
				<Dropdown className="form-select p-0">
					<Dropdown.Toggle
						className={`w-100 bg-white text-start d-flex align-items-center  justify-content-between ${
							error ? "border-danger" : "border-light"
						}`}
					>
						<div
							className="w-100 overflow-hidden"
							style={{ textOverflow: "ellipsis" }}
						>
							{getTitleOfSelectedItems()}
						</div>
					</Dropdown.Toggle>

					<Dropdown.Menu
						className="w-100 overflow-hidden  overflow-y-auto"
						style={{ maxHeight: "50vh" }}
					>
						{options.map((item) => (
							<li key={item[optionValue]} className="px-3 py-1">
								<Form.Check // prettier-ignore
									type="checkbox"
									id={`chk-${item[optionValue]}`}
									label={item[optionLabel]}
									value={item[optionValue]}
									defaultChecked={isChecked(
										item[optionValue]
									)}
									className="w-100 d-block"
									onChange={handleChange}
								/>
							</li>
						))}
					</Dropdown.Menu>
				</Dropdown>
				<Form.Control.Feedback
					type="invalid"
					className={error ? "d-block" : "d-none"}
				>
					{error}
				</Form.Control.Feedback>
			</Form.Group>
		</>
	);
};

export default MultiSelect;

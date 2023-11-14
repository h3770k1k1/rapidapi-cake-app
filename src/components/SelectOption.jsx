import React from "react";
import { MenuItem } from "@mui/material";
const SelectOption = ({ children, ...props }) => {
	const { value } = props;
	const selectedFilters = Array.isArray(props.value)
		? props.value
		: [props.value];

	return (
		<MenuItem
			sx={{
				
			}}
			{...props}
			selected={selectedFilters.includes(value)}
			className="menu-item"
		>
			{children}
		</MenuItem>
	);
};

export default SelectOption;

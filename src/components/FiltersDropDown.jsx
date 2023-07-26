import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const FiltersDropDown = ({ filters, onFilterChange }) => {
	const handleFilterChange = (event) => {
		const selectedValue = event.target.value;
		onFilterChange(selectedValue);
	};
	return (
		<FormControl fullWidth variant="outlined" sx={{ width: "40%" }}>
			<InputLabel id="filter-label">Choose a filter:</InputLabel>
			<Select
				labelId="filter-label"
				label="Choose a filter:"
				defaultValue=""
				onChange={handleFilterChange}
			>
				<MenuItem value="">All</MenuItem>
				{filters.map((filter, index) => (
					<MenuItem key={index} value={filter.value}>
						{filter.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default FiltersDropDown;

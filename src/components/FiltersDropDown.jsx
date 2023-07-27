import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SelectOption from "./SelectOption"; // Update the file path if necessary

const FiltersDropDown = ({ filters, selectedFilters, onFilterChange }) => {
	const handleFilterChange = (event) => {
		const selectedValues = event.target.value;
		onFilterChange(selectedValues);
	};

	return (
		<FormControl fullWidth variant="outlined" sx={{ width: "40%" }}>
			<InputLabel id="filter-label">Choose a filter:</InputLabel>
			<Select
				labelId="filter-label"
				label="Choose a filter:"
				value={selectedFilters}
				multiple
				onChange={handleFilterChange}
			>
				{filters.map((filter, index) => (
					<SelectOption key={index} value={filter.value}>
						{filter.label}
					</SelectOption>
				))}
			</Select>
		</FormControl>
	);
};

export default FiltersDropDown;

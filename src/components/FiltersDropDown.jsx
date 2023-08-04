import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SelectOption from "./SelectOption"; // Update the file path if necessary
import "./FiltersDropDown.css";
const FiltersDropDown = ({ filters, selectedFilters, onFilterChange }) => {
	const handleFilterChange = (event) => {
		const selectedValues = event.target.value;
		onFilterChange(selectedValues);
	};

	return (
		<FormControl fullWidth variant="outlined" sx={{ width: "40%" }}>
			<InputLabel id="filter-label">Choose the level of difficulty</InputLabel>
			<Select
				id="h"
				labelId="filter-label"
				label="Choose the level of difficulty"
				value={selectedFilters}
				multiple={false}
				onChange={handleFilterChange}
			>
				{filters.map((filter, index) => (
					<SelectOption key={index} value={filter.value} className="option">
						{filter.label}
					</SelectOption>
				))}
			</Select>
		</FormControl>
	);
};

export default FiltersDropDown;

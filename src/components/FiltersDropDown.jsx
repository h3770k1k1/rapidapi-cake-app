import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const FiltersDropDown = ({ filters, selectedFilter, onFilterChange }) => {
	const handleFilterChange = (event) => {
		const selectedValue = event.target.value;
		onFilterChange(selectedValue);
	};

	return (
		<FormControl fullWidth variant="outlined" sx={{ width: "40%" }}>
			<InputLabel id="filter-label">Choose the level of difficulty</InputLabel>
			<Select
				id="h"
				labelId="filter-label"
				label="Choose the level of difficulty"
				value={selectedFilter}
				onChange={handleFilterChange}
			>
				{filters.map((filter) => (
					<MenuItem key={filter.value} value={filter.value}>
						{filter.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default FiltersDropDown;

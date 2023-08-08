import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = ({ onSearchChange }) => {
	const [searchValue, setSearchValue] = useState("");

	const handleSearchChange = (event) => {
		const value = event.target.value;
		setSearchValue(value);
		onSearchChange(value); // Przekazujemy wartość pola wyszukiwania do komponentu rodzica (App)
	};

	return (
		<form>
			<TextField
				label="Search recipe by name"
				sx={{ width: "40%" }}
				value={searchValue}
				onChange={handleSearchChange}
				InputProps={{
					endAdornment: (
						<InputAdornment>
							<IconButton>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</form>
	);
};

export default SearchBar;

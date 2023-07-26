import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = () => {
	return (
		<form>
			<TextField
				id="search-bar"
				className="text"
				variant="filled"
				label="Lorem ipsum"
				placeholder="Search..."
			>
				<IconButton type="submit" aria-label="search">
					<SearchIcon />
				</IconButton>
			</TextField>
		</form>
	);
};

export default SearchBar;

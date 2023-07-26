import React from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
const SearchBar = () => {
	return (
		<form>
			<TextField
				label="Lorem ipsum"
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

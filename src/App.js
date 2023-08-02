import "./App.css";
import RecipesList from "./components/RecipesList";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FiltersDropDown from "./components/FiltersDropDown";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

function App() {
	const [selectedFilters, setSelectedFilters] = useState([]);

	const handleFilterChange = (selectedValues) => {
		setSelectedFilters(selectedValues);
	};

	const filters = [
		{ label: "Option 1", value: "option1" },
		{ label: "Option 2", value: "option2" },
		{ label: "Option 3", value: "option3" },
	];

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Navbar />

				<Grid
					container
					direction="column"
					spacing={"1.5%"}
					sx={{ marginTop: "1%", marginBottom: "1%" }}
				>
					<Grid item>
						<SearchBar />
					</Grid>
					<Grid item>
						<FiltersDropDown
							filters={filters}
							selectedFilters={selectedFilters}
							onFilterChange={handleFilterChange}
						/>
					</Grid>
				</Grid>
				<RecipesList />
			</ThemeProvider>
		</div>
	);
}

export default App;

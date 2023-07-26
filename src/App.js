import "./App.css";
import RecipesList from "./components/RecipesList";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FiltersDropDown from "./components/FiltersDropDown";
import React, { useState } from "react";
import { Grid } from "@mui/material";

function App() {
	const [selectedFilters, setSelectedFilters] = useState([]);

	const handleFilterChange = (selectedValues) => {
		setSelectedFilters(selectedValues);
		// Możesz dodać dowolną logikę reakcji na zmianę wybranych filtrów.
	};

	const filters = [
		{ label: "Option 1", value: "option1" },
		{ label: "Option 2", value: "option2" },
		{ label: "Option 3", value: "option3" },
	];

	return (
		<div className="App">
			<Navbar/>
			<Grid
				container
				direction="column"
				spacing={"1%"}
				sx={{ marginTop: "1%" }}
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
					<p>
						Selected Filters:{" "}
						{selectedFilters.length > 0 ? selectedFilters.join(", ") : "None"}
					</p>
				</Grid>
			</Grid>
			<RecipesList />
		</div>
	);
}

export default App;

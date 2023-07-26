import "./App.css";
import RecipePage from "./components/RecipePage";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FiltersDropDown from "./components/FiltersDropDown";
import React, { useState } from "react";
import { Grid } from "@mui/material";
function App() {
	const [currentFilter, setCurrentFilter] = useState("");

	const handleFilterChange = (selectedFilter) => {
		setCurrentFilter(selectedFilter);
		// Tutaj możesz dodać logikę, która reaguje na zmianę filtra.
		// Na przykład możesz odświeżyć dane zgodnie z nowo wybranym filtrem.
	};
	const filters = [
		{ label: "Option 1", value: "option1" },
		{ label: "Option 2", value: "option2" },
		{ label: "Option 3", value: "option3" },
	];

	const url = "https://the-birthday-cake-db.p.rapidapi.com/";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "803d7d600emshe3481c95cd86cf9p11480cjsn6465da821ec9",
			"X-RapidAPI-Host": "the-birthday-cake-db.p.rapidapi.com",
		},
	};

	const fetchData = async () => {
		try {
			const response = await fetch(url, options);
			const result = await response.json();

			console.log(result);
		} catch (error) {
			console.error(error);
		}
	};

	const handleButtonClick = () => {
		fetchData();
	};

	return (
		<div className="App">
			<Navbar />
			{/*<button id="myButton" onClick={handleButtonClick}>	button
			</button>*/}

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
						onFilterChange={handleFilterChange}
					/>
					<p>Selected Filter: {currentFilter || "None"}</p>
				</Grid>
			</Grid>
			<RecipePage />
		</div>
	);
}

export default App;

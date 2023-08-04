import "./App.css";
import RecipesList from "./components/RecipesList";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FiltersDropDown from "./components/FiltersDropDown";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import LoadRecipesButton from "./components/LoadRecipesButton";


function App() {
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [recipesData, setRecipesData] = useState(null); // Nowy stan do przechowywania danych przepisów

	const handleFilterChange = (selectedValues) => {
		setSelectedFilters(selectedValues);
	};

	const filters = [
		{ label: "Easy", value: "Easy" },
		{ label: "Medium", value: "Medium" },
		{ label: "A challange", value: "A challange" },
	];

	const handleLoadRecipesClick = async () => {
		const url = "https://the-birthday-cake-db.p.rapidapi.com/";
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "",
				"X-RapidAPI-Host": "the-birthday-cake-db.p.rapidapi.com",
			},
		};

		try {
			const response = await fetch(url, options);
			const result = await response.json(); // Używamy response.json() zamiast response.text(), aby otrzymać dane jako obiekt JSON
			setRecipesData(result); 
			// Ustawiamy dane przepisów w stanie komponentu
		} catch (error) {
			console.error(error);
		}
	};

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
				<LoadRecipesButton onClick={handleLoadRecipesClick} />
				{/* Przekazujemy dane przepisów jako props do komponentu RecipesList */}
				{recipesData && <RecipesList recipes={recipesData} />}{" "}
				{/* Renderujemy RecipesList tylko, jeśli mamy dane przepisów */}
			</ThemeProvider>
		</div>
	);
}

export default App;

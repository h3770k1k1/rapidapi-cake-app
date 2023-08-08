import "./App.css";
import RecipesList from "./components/RecipesList";
import Button from "@mui/material/Button";
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
	const [recipesData, setRecipesData] = useState(null);
	const [isDropdownDisabled, setIsDropdownDisabled] = useState(true);

	const handleFilterChange = (selectedValues) => {
		setSelectedFilters(selectedValues);
	};

	const filters = [
		{ label: "All", value: "all" }, // Dodajemy opcję "All" jako filtr
		{ label: "Easy", value: "Easy" },
		{ label: "Medium", value: "Medium" },
		{ label: "A challenge", value: "A challenge" },
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
			const result = await response.json();
			setRecipesData(result);
			setIsDropdownDisabled(false);
		} catch (error) {
			console.error(error);
		}
	};

	// Nowa funkcja do automatycznego ładowania przepisów przy pierwszym renderowaniu
	React.useEffect(() => {
		handleLoadRecipesClick();
	}, []);

	// Nowa funkcja obsługująca kliknięcie przycisku "Show All Recipes"
	const handleShowAllRecipesClick = () => {
		setSelectedFilters("all");
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
							disabled={isDropdownDisabled}
						/>
					</Grid>
				</Grid>
				{/* Nowy przycisk "Show All Recipes" */}
				<Button
					variant="contained"
					color="primary"
					onClick={handleShowAllRecipesClick}
				>
					Show All Recipes
				</Button>
				{/* Przekazujemy cały zbiór receptur do komponentu RecipesList */}
				{/* Nie filtrujemy receptur, aż do wyboru filtrów w komponencie FiltersDropDown */}
				{recipesData && (
					<RecipesList recipes={recipesData} selectedFilter={selectedFilters} />
				)}
			</ThemeProvider>
		</div>
	);
}

export default App;

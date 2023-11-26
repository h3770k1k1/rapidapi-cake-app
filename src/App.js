import "./App.css";
import RecipesList from "./components/RecipesList";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FiltersDropDown from "./components/FiltersDropDown";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import AuthDetails from "./components/AuthDetails";
import SignUpContainer from "./components/SignUp.jsx";

function App() {
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [recipesData, setRecipesData] = useState(null);
	const [isDropdownDisabled, setIsDropdownDisabled] = useState(true);
	const [searchQuery, setSearchQuery] = useState(""); // Dodajemy stan dla wartości wyszukiwania

	const handleFilterChange = (selectedValues) => {
		setSelectedFilters(selectedValues);
	};
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};
	const filters = [
		{ label: "All", value: "all" },
		{ label: "Easy", value: "Easy" },
		{ label: "Medium", value: "Medium" },
		{ label: "A challenge", value: "A challenge" },
	];

	const handleLoadRecipesClick = async () => {
		const url = "https://the-birthday-cake-db.p.rapidapi.com/";
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "803d7d600emshe3481c95cd86cf9p11480cjsn6465da821ec9",
				"X-RapidAPI-Host": "the-birthday-cake-db.p.rapidapi.com",
			},
		};

		try {
			const response = await fetch(url, options);
			console.log(response);
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
		console.log("xd");
	}, []);

	// Nowa funkcja obsługująca kliknięcie przycisku "Show All Recipes"
	const handleShowAllRecipesClick = () => {
		setSelectedFilters("all");
	};
	const handleSearchChange = (query) => {
		setSearchQuery(query);
	};

	return (
		<div className="App">
			<Navbar />
			<Grid
				container
				direction="column"
				spacing={"1.5%"}
				sx={{ marginTop: "1%", marginBottom: "1%" }}
			>
				<Grid item>
					<SearchBar onSearchChange={handleSearchChange} />
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
				color="secondary"
				onClick={handleShowAllRecipesClick}
			>
				Show All Recipes
			</Button>
			{/* Przekazujemy cały zbiór receptur do komponentu RecipesList */}
			{/* Nie filtrujemy receptur, aż do wyboru filtrów w komponencie FiltersDropDown */}
			{recipesData && (
				<RecipesList
					recipes={recipesData}
					selectedFilter={selectedFilters}
					searchQuery={searchQuery}
					handleCloseModal={handleCloseModal}
				/>
			)}
			<SignUpContainer handleCloseModal={handleCloseModal} />
		</div>
	);
}

export default App;

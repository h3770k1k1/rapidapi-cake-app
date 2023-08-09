import React from "react";
import {
	Container,
	Grid,
	Card,
	CardContent,
	Typography,
	IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Link } from "react-router-dom";

function RecipesList({ recipes, selectedFilter, searchQuery }) {
	const [hoveredRecipeId, setHoveredRecipeId] = React.useState(null);

	const handleMouseEnter = (recipeId) => {
		setHoveredRecipeId(recipeId);
	};

	const handleMouseLeave = () => {
		setHoveredRecipeId(null);
	};

	// Funkcja pomocnicza do zaznaczania pasujących liter w nazwie przepisu
	const highlightMatchingLetters = (text, searchQuery) => {
		const searchPattern = new RegExp(searchQuery, "gi");
		return text.replace(
			searchPattern,
			(match) => `<span class="highlight">${match}</span>`
		);
	};

	// Tablica powtarzających się kolorów tła
	const cardBackgroundColors = ["#ffc2cd", "#cdffc2", "#c2d8ff", "#ffdbc2"];

	// Filtrujemy receptury na podstawie wybranego filtra i wprowadzonego tekstu
	const filteredRecipes = recipes.filter((recipe) => {
		const filterMatch =
			selectedFilter === "all" || recipe.difficulty === selectedFilter;
		const searchMatch = recipe.title
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		return filterMatch && searchMatch;
	});

	return (
		<Container maxWidth="md" sx={{ marginTop: "1%" }}>
			<Grid container spacing={3}>
				{filteredRecipes.map((recipe, index) => (
					<Grid item key={recipe.id} xs={12}>
						<Link
							to={`/recipe/${recipe.title}/${recipe.id}/${recipe.difficulty}`}
							style={{ textDecoration: "none" }}
						>
							<Card
								sx={{
									height: "100%", // Ustawiamy stałą wysokość karty na 100%
									display: "flex",
									flexDirection: "column",
									position: "relative", // Dodajemy pozycję względem rodzica
									backgroundColor:
										cardBackgroundColors[index % cardBackgroundColors.length], // Wybieramy kolor tła z tablicy
								}}
								onMouseEnter={() => handleMouseEnter(recipe.id)}
								onMouseLeave={handleMouseLeave}
							>
								<CardContent>
									<Typography variant="h4" component="h2" gutterBottom>
										{/* Zaznaczamy pasujące litery w nazwie przepisu */}
										<span
											dangerouslySetInnerHTML={{
												__html: highlightMatchingLetters(
													recipe.title,
													searchQuery
												),
											}}
										/>
									</Typography>
									<Typography variant="subtitle1" color="textSecondary">
										Opis
									</Typography>
								</CardContent>
								{/* Pokaż ButtonGroup tylko na najechanym przepisie */}
								{hoveredRecipeId === recipe.id && (
									<div
										style={{
											position: "absolute",
											bottom: 0,
											right: 0,
										}}
									>
										<IconButton>
											<FavoriteIcon />
										</IconButton>
										<IconButton>
											<IosShareIcon />
										</IconButton>
									</div>
								)}
								{/* Pusty element, aby zrównać wysokość */}
								<span style={{ flex: 1 }} />
							</Card>
						</Link>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default RecipesList;

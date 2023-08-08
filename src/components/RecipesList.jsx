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
		<Container maxWidth="md">
			<Grid container spacing={3}>
				{filteredRecipes.map((recipe) => (
					<Grid item key={recipe.id} xs={12}>
						<Link
							to={`/recipe/${recipe.title}/${recipe.id}/${recipe.difficulty}`}
							style={{ textDecoration: "none" }}
						>
							<Card
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
									<Typography>Trudność: {recipe.difficulty}</Typography>
								</CardContent>
								{/* Pokaż ButtonGroup tylko na najechanym przepisie */}
								{hoveredRecipeId === recipe.id && (
									<Grid container justifyContent="flex-end">
										<Grid item sx={{ marginTop: "-4%" }}>
											<IconButton>
												<FavoriteIcon />
											</IconButton>
											<IconButton>
												<IosShareIcon />
											</IconButton>
										</Grid>
									</Grid>
								)}
							</Card>
						</Link>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default RecipesList;

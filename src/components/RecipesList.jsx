import React from "react";
import Box from "@mui/material/Box";
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
import Masonry from "@mui/lab/Masonry";

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
	const cardBackgroundColors = ["#94F4FF", "#FBFF94", "#AD94FF", "#94FFBF"];

	// Filtrujemy receptury na podstawie wybranego filtra i wprowadzonego tekstu
	const filteredRecipes = recipes.filter((recipe) => {
		const filterMatch =
			selectedFilter === "all" || recipe.difficulty === selectedFilter;
		const searchMatch = recipe.title
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		return filterMatch && searchMatch;
	});
	const getColorForDifficulty = (difficulty) => {
		const normalizedDifficulty = difficulty.trim().toLowerCase();

		switch (normalizedDifficulty) {
			case "a challenge":
				return "red";
			case "easy":
				return "green";
			case "medium":
				return "orange";
			default:
				return "black"; // Default color if difficulty doesn't match any case
		}
	};

	return (
		<Container maxWidth="lg" sx={{ marginTop: "1%" }}>
			<Masonry spacing={3} columns={4}>
				{filteredRecipes.map((recipe, index) => (
					<Link
						to={`/recipe/${recipe.title}/${recipe.id}/${recipe.difficulty}`}
						style={{ textDecoration: "none" }}
					>
						<Card
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "column",
								position: "relative",
								backgroundColor:
									cardBackgroundColors[index % cardBackgroundColors.length],
								border: "3px solid black",
								WebkitBoxShadow: "-2px 6px 0px 0px rgba(0, 0, 0, 1)",
								boxShadow: " -2px 6px 0px 0px rgba(0, 0, 0, 1)",
							}}
							onMouseEnter={() => handleMouseEnter(recipe.id)}
							onMouseLeave={handleMouseLeave}
						>
							<CardContent>
								<Box
									sx={{
										backgroundColor: "primary.light",
										width: "100%",
										height: "20rem",
									}}
								>
									<img
										src={`https://apipics.s3.amazonaws.com/cakes_api/${recipe.id}.jpg`}
										alt={recipe.title}
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
											objectPosition: "top 0",
										}}
									/>
								</Box>
								<Typography
									variant="h6"
									component="h2"
									fontWeight={700}
									gutterBottom
								>
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
							{hoveredRecipeId === recipe.id && (
								<div
									style={{
										position: "absolute",
										bottom: 0,
										left: 0,
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
							<div
								style={{
									position: "absolute",
									bottom: 0,
									right: 0,
								}}
							>
								<Typography
									style={{
										fontWeight: "bold",
										marginBottom: "0.5rem",
										marginRight: "1rem",
										color: getColorForDifficulty(recipe.difficulty),
									}}
								>
									{recipe.difficulty}
								</Typography>
							</div>
							<span style={{ flex: 1 }} />
						</Card>
					</Link>
				))}
			</Masonry>
		</Container>
	);
}

export default RecipesList;

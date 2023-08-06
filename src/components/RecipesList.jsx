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

function RecipesList({ recipes, selectedFilter }) {
	const [hoveredRecipeId, setHoveredRecipeId] = React.useState(null);

	const handleMouseEnter = (recipeId) => {
		setHoveredRecipeId(recipeId);
	};

	const handleMouseLeave = () => {
		setHoveredRecipeId(null);
	};

	const filteredRecipes = selectedFilter
		? recipes.filter((recipe) => recipe.difficulty === selectedFilter)
		: recipes;

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
										{recipe.title}
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

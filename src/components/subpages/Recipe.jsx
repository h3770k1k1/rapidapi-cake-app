import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CakeIcon from "@mui/icons-material/Cake";
import List from "@mui/material/List";
import React, { useState, useEffect } from "react";
import "./Recipe.css";
import CookingStep from "../CookingStep";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import Fab from "@mui/material/Fab";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { useParams } from "react-router-dom";

const Recipe = () => {
	const { title, recipeId, difficulty } = useParams();
	const [expanded, setExpanded] = useState(false);
	const [recipesData, setRecipesData] = useState(null);
	console.log("Title:", title);
	console.log("Recipe ID:", recipeId);
	console.log("Difficulty:", difficulty);

	let difficultyColor = "inherit"; // Kolor dziedziczony (czarny) domyślnie

	if (difficulty === "Medium") {
		difficultyColor = "orange"; // Jeśli trudność jest "Medium", ustaw kolor na pomarańczowy
	} else if (difficulty === "Easy") {
		difficultyColor = "green"; // Jeśli trudność jest "Easy", ustaw kolor na zielony
	} else {
		difficultyColor = "red"; // Wszystkie inne wartości trudności będą miały kolor różowy
	}
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	useEffect(() => {
		// Gdy dane przepisów się zmienią, sprawdź czy tytuł pasuje do tytułu z parametru
		if (recipesData && Array.isArray(recipesData)) {
			const recipe = recipesData.find(
				(recipe) =>
					recipe.title === title &&
					recipe.id === recipeId &&
					recipe.difficulty === difficulty
			); // Dodajemy sprawdzenie recipe.id
		}
	}, [recipesData, title, recipeId, difficulty]);
	return (
		<div className="recipe">
			<ThemeProvider theme={theme}>
				<Container
					sx={{
						display: "flex",
						justifyContent: "space-between",
						width: "11vw",
						position: "fixed",
						marginLeft: "87vw",
						marginTop: "87vh",
					}}
				>
					<Fab aria-label="like">
						<FavoriteIcon />
					</Fab>
					<Fab aria-label="share">
						<IosShareIcon />
					</Fab>
				</Container>
				<Box
					sx={{
						backgroundColor: "secondary.main",
						width: "100%",
						height: "40vh",
					}}
				></Box>
				<Container
					maxWidth="lg"
					sx={{ marginTop: "2%", display: "flex", flexDirection: "column" }}
				>
					<div className="recipe-element">
						<Typography variant="h4">{title}</Typography>
					</div>
					<div className="recipe-element">
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							Difficulty:{" "}
							<span style={{ marginLeft: "auto", color: difficultyColor }}>
								{difficulty}
							</span>
						</Typography>
					</div>
					<div className="recipe-element">
						<Typography variant="body1">
							Przykładowy opis przepisu. Reminiscent of school traybakes with
							pink icing, these raspberry and custard muffins are given a
							suitably chic update simply by turning cupcakes upside down.
							Adding custard to the cake batter creates a moist crumb and
							another layer of nostalgia, that pairs brilliantly with the
							raspberry in the jam icing.
						</Typography>
					</div>
					<div className="recipe-element">
						<Typography
							variant="h6"
							sx={{ display: "flex", justifyContent: "space-between" }}
						>
							Portion:{" "}
							<span style={{ marginLeft: "auto" }}>
								5<CakeIcon fontSize="large" sx={{ marginBottom: "-0.25rem" }} />
							</span>
						</Typography>
					</div>
					<div className="recipe-element">
						<Typography variant="h6" sx={{ marginTop: "-1%" }}>
							Time:
							<Typography variant="body1">
								Hands-on time 45 minutes. Oven time 1 hour 20 minutes, plus
								cooling.
							</Typography>
						</Typography>
					</div>
					<div className="recipe-element">
						<Typography variant="h6">Ingredients:</Typography>
						<List>
							<ListItem>
								<ListItemText primary="Ingredient 1" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Ingredient 2" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Ingredient 3" />
							</ListItem>
						</List>{" "}
					</div>
					<div className="recipe-element cooking-step">
						<CookingStep />
					</div>
				</Container>
			</ThemeProvider>
		</div>
	);
};

export default Recipe;

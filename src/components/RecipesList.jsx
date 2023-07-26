import React from "react";
import { Grid, Card, CardContent, Typography, Container } from "@mui/material";

function RecipesList() {
	const recipes = [
		{
			id: 1,
			title: "Przepis 1",
			description: "Opis przepisu 1.",
		},
		{
			id: 2,
			title: "Przepis 2",
			description: "Opis przepisu 2.",
		},
		{
			id: 3,
			title: "Przepis 3",
			description: "Opis przepisu 3.",
		},
	];

	return (
		<Container maxWidth="md">
			<Grid container spacing={3}>
				{recipes.map((recipe) => (
					<Grid item key={recipe.id} xs={12}>
						<Card>
							<CardContent>
								<Typography variant="h4" component="h2" gutterBottom>
									{recipe.title}
								</Typography>
								<Typography variant="subtitle1" color="textSecondary">
									{recipe.description}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default RecipesList;

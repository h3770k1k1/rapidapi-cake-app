import React from "react";
import SearchBar from "../SearchBar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import "./FavouritesPage.css";
import FavouriteRecipesList from "../FavouriteRecipesList";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.js";

const FavouritesPage = () => {
	return (
		<div className="Favourites">
			<ThemeProvider theme={theme}>
				<Grid
					container
					direction="column"
					spacing={"1.5%"}
					sx={{ marginTop: "1%", marginBottom: "1%" }}
				>
					<Grid item>
						<FavoriteIcon style={{ fontSize: 60 }} />
						<h1>XYZ's Favourites</h1>
					</Grid>
					<Grid item>
						<SearchBar />
					</Grid>
				</Grid>
				<FavouriteRecipesList />
			</ThemeProvider>
		</div>
	);
};

export default FavouritesPage;

import React from "react";
import SearchBar from "../SearchBar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import "./FavouritesPage.css";
import RecipesList from "../RecipesList";

const FavouritesPage = () => {
	return (
		<div className="Favourites">
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
			<RecipesList />
		</div>
	);
};

export default FavouritesPage;

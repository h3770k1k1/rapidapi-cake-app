import React from "react";
import SearchBar from "./SearchBar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import "./FavouritesPage.css";

const FavouritesPage = () => {
	return (
		<div className="Favourites">
			<FavoriteIcon style={{ fontSize: 60 }} />
			<h1>User's Favourites</h1>
			<SearchBar />
		</div>
	);
};

export default FavouritesPage;

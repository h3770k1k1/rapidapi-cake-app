import React from "react";
import Button from "@mui/material/Button";

const LoadRecipesButton = ({ onClick }) => {
	return (
		<Button variant="contained" color="primary" onClick={onClick}>
			Load Recipes
		</Button>
	);
};

export default LoadRecipesButton;

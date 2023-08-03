import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Link } from "react-router-dom";

function RecipesList({ recipes }) {
  // Stan, który będzie określał, na którym przepisie nastąpiło najechanie
  const [hoveredRecipeId, setHoveredRecipeId] = useState(null);

  // Funkcje obsługujące najechanie i opuszczenie karty (Card)
  const handleMouseEnter = (recipeId) => {
    setHoveredRecipeId(recipeId);
  };

  const handleMouseLeave = () => {
    setHoveredRecipeId(null);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {recipes.map((recipe) => (
          <Grid item key={recipe.id} xs={12}>
            <Link to={`/recipe`} style={{ textDecoration: "none" }}>
              <Card
                onMouseEnter={() => handleMouseEnter(recipe.id)}
                onMouseLeave={handleMouseLeave}
              >
                <CardContent>
                  <Typography variant="h4" component="h2" gutterBottom>
                    {recipe.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {recipe.description}
                  </Typography>
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

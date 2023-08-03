import React from 'react';
import Button from '@mui/material/Button';

const LoadRecipesButton = ({ onClick }) => {
  const handleButtonClick = async () => {
    await onClick(); 
  };

  return (
    <Button variant="contained" color="primary" onClick={handleButtonClick}>
      Load Recipes
    </Button>
  );
};

export default LoadRecipesButton;

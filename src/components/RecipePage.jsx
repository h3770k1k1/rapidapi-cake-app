import './RecipePage.css';

function RecipePage() {
  const recipes = [
    {
      id: 1,
      title: 'Przepis 1',
      description: 'Opis przepisu 1.',
    },
    {
      id: 2,
      title: 'Przepis 2',
      description: 'Opis przepisu 2.',
    },
    {
      id: 3,
      title: 'Przepis 3',
      description: 'Opis przepisu 3.',
    },
  ];

  return (
    <div className="container">
      <div className="grid">
        {recipes.map((recipe) => (
          <div className="card" key={recipe.id}>
            <div className="cardContent">
              <h5 className="recipeTitle">{recipe.title}</h5>
              <p className="recipeDescription">{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipePage;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  RecipeContainer,
  RecipeIngredients,
  RecipeOverviewContainer,
  RecipePageHeader,
} from "./styles";

export function Recipe() {
  const params = useParams();
  const [recipe, setRecipe] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  async function getRecipeDetails() {
    if (!params.id) return;
    setIsLoading(true);
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${params.id}/information`,
      { params: { apiKey: import.meta.env.VITE_API_KEY } }
    );
    setRecipe(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getRecipeDetails();
  }, []);

  return (
    <RecipeContainer>
      {isLoading ? (
        <h2>Carregando...</h2>
      ) : (
        <>
          <RecipePageHeader title={recipe.title} />
          <RecipeOverviewContainer>
            <img src={recipe.image} alt={recipe.title} />
            <div>
              <p>
                <strong>Prep:</strong> {recipe.readyInMinutes} mins
              </p>
              <p>
                <strong>Servings:</strong> {recipe.servings}
              </p>
              {recipe.cuisines.length > 0 && (
                <p>
                  <strong>Cuisine:</strong> {recipe.cuisines.join(", ")}
                </p>
              )}
            </div>
          </RecipeOverviewContainer>
          <h3>Ingredients</h3>
          <RecipeIngredients>
            {recipe.extendedIngredients.map((item) => {
              return (
                <li key={`${item.id}-${item.originalName}`}>
                  <strong>{`${item.measures.us.amount} ${item.measures.us.unitShort} | `}</strong>
                  {item.originalName}
                </li>
              );
            })}
          </RecipeIngredients>
          {recipe.instructions && (
            <>
              <h3>Instructions</h3>
              <h4 dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
            </>
          )}
        </>
      )}
    </RecipeContainer>
  );
}

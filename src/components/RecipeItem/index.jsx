import { RecipeImageContainer, RecipeItemContainer } from "./styles";

export function RecipeItem({ recipe }) {
  return (
    <RecipeItemContainer to={`/recipes/${recipe.id}`} target="_blank">
      <RecipeImageContainer>
        <img src={recipe.image} alt={recipe.title} />
      </RecipeImageContainer>
      <p>{recipe.title}</p>
    </RecipeItemContainer>
  );
}

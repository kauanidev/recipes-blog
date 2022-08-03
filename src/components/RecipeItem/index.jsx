import { RecipeImageContainer, RecipeItemContainer } from "./styles";

export function RecipeItem({ recipe }) {
  return (
    <RecipeItemContainer to={`/recipes/${recipe.id}`}>
      <RecipeImageContainer>
        <img src={recipe.image} alt={recipe.title} />
      </RecipeImageContainer>
      <p>{recipe.title}</p>
    </RecipeItemContainer>
  );
}

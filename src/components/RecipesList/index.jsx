import { RecipeItem } from "../RecipeItem";
import { RecipesListContainer } from "./styles";

export function RecipesList({ recipes }) {
  return (
    <RecipesListContainer>
      {recipes.map((item) => {
        return <RecipeItem key={item.id} recipe={item} />;
      })}
    </RecipesListContainer>
  );
}

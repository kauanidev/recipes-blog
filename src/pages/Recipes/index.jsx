import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { PageHeader } from "../../components/PageHeader";
import { Pagination } from "../../components/Pagination";
import { RecipesList } from "../../components/RecipesList";
import { RecipesContainer, SearchInput } from "./styles";

const ITENS_PER_PAGE = 12;
const TOTAL_API_LIMIT = 903;

export function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  function onChangeSearch(event) {
    setSearch(event.target.value);
  }

  const debouncedSearch = useDebounce(search, 500);

  const hasSearch = !!search.trim("");

  async function getRecipes() {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/complexSearch",
      {
        params: {
          query: search,
          apiKey: import.meta.env.VITE_API_KEY,
          number: hasSearch ? 100 : ITENS_PER_PAGE,
          offset: hasSearch ? 0 : ITENS_PER_PAGE * (currentPage - 1),
        },
      }
    );

    setRecipes(response.data.results);
  }

  useEffect(() => {
    getRecipes();
  }, [currentPage]);

  function onPageChange(page) {
    setCurrentPage(page);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    getRecipes();
  }, [debouncedSearch]);

  return (
    <RecipesContainer>
      <PageHeader title="Recipes" subtitle="Easy recipes to cook at home" />
      <SearchInput
        onChange={onChangeSearch}
        value={search}
        placeholder="Enter some recipe name..."
        type="search"
      />
      <RecipesList recipes={recipes} />
      {recipes.length > 0 && !hasSearch && (
        <Pagination
          totalCountOfRegisters={TOTAL_API_LIMIT}
          currentPage={currentPage}
          onPageChange={onPageChange}
          registerPerPage={ITENS_PER_PAGE}
        />
      )}
    </RecipesContainer>
  );
}

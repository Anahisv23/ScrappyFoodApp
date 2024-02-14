import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SingleRecipe from "./SingleRecipe.js";
import RecipeResults from "./RecipeResults.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/recipe/:recipeName",
    element: <SingleRecipe />,
  },
  {
    path: "/recipes/:recipeSearch",
    element: <RecipeResults />,
  },
]);

export default router;

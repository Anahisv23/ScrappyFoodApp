import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { PiCookingPotThin } from "react-icons/pi";

const RecipeResults = () => {
  const [recipeResults, setRecipeResults] = useState([]);
  const [diet, setDiet] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getRecipes = localStorage.getItem("recipes");
    setRecipeResults(JSON.parse(getRecipes));
  }, []);

  // useEffect(() => {
  //   const filteredByDietRecipes = recipeResults.filter((recipe) => {
  //     console.log("recipe", recipe);
  //     return recipe.healthLabels.includes(diet);
  //   });
  //   localStorage.setItem("recipes", JSON.stringify(filteredByDietRecipes));
  //   setRecipeResults(filteredByDietRecipes);
  // }, [diet]);

  const navigateToRecipe = (recipe) => {
    localStorage.setItem("selectedRecipe", JSON.stringify(recipe));
    navigate(`/recipe/${recipe.label}`);
  };

  // const handleDietFilter = (e) => {
  //   setDiet(e.target.value);
  // };

  return (
    <div className="recipe-results">
      <Link to="/" className="link-to-home">
      🥕Scrap Cook
      </Link>
      <h1>Your search results</h1>
      {/* <h3>Filter by diet</h3>
      <select
        name="diet-option"
        required="required"
        onChange={handleDietFilter}
      >
        <option value="---">---</option>
        <option value="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Keto-friendly">Keto</option>
      </select> */}
      <div className="search-results">
        {recipeResults.length === 0 ? (
          <p>
            Hmm looks like we can't find that. Try again or use different
            keywords
          </p>
        ) : (
          recipeResults.map((recipe) => {
            return (
              <div className="individual-recipes">
                <img
                  onClick={() => navigateToRecipe(recipe.recipe)}
                  src={recipe.recipe.image}
                />
                <h3 className="recipe-name">{recipe.recipe.label} <br></br>Co2 Class Grade • {recipe.recipe.co2EmissionsClass}</h3>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RecipeResults;

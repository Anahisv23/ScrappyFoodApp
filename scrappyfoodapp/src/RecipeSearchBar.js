import React, { useState } from "react";
import TooltipComponent from "./Tooltip1.js";
import TooltipComponent2 from "./Tooltip2.js";
import { useNavigate } from "react-router";

const RecipeSearchBar = () => {
  const [recipeSearch, setRecipeSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [mealType, setMealType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [co2EmissionsClass, setco2EmissionsClass] = useState("");
  const navigate = useNavigate();

  const getRecipeData = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=any&q=${recipeSearch}&app_id=e88a831b&app_key=%20a07aae829280888d645b9be5a1973ee3&mealType=${mealType}&co2EmissionsClass=${co2EmissionsClass}`,
      );
      const data = await response.json();
      return data.hits;
    } catch (err) {
      console.log("Could not fetch recipes");
    }
  };

  const handleRecipeSearch = (e) => {
    if (e.target.name === "recipe-search") {
      setRecipeSearch(e.target.value);
    } else if (e.target.name === "meal-type-options") {
      setMealType(e.target.value);
    } else if (e.target.name === "co2-options") {
      setco2EmissionsClass(e.target.value);
    }
  };

  const handleFormErrors = () => {
    if (recipeSearch === "") {
      setErrorMessage("Must include ingredients or keywords");
    } else if (mealType === "") {
      setErrorMessage("Must select meal type");
    } else if (co2EmissionsClass === "") {
      setErrorMessage("Must select co2 Class Grade");
    } else {
      return false;
    }
    return true;
  };

  const navigateToRecipes = (recipes) => {
    console.log("recipes", recipes);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    navigate("/recipes");
  };

  const handleRecipeSubmit = async (e) => {
    const areThereErrors = handleFormErrors();
    // if there are no form errors
    if (areThereErrors === false) {
      setErrorMessage("");
      const getRecipes = await getRecipeData(recipeSearch);
      setRecipes(getRecipes);
      setMealType("---");
      setRecipeSearch("");
      setco2EmissionsClass("---");
      navigateToRecipes(getRecipes);
    }
  };

  return (
    <div className="search-inputs">
      <h3 className="home-h3">Enter ingredients or keywords to begin searching</h3>
      <TooltipComponent2 />
      <input
        type="search"
        name="recipe-search"
        value={recipeSearch}
        onChange={handleRecipeSearch}
        placeholder="enter keywords here"
      />
      <h3>Choose Meal type</h3>
      <select
        name="meal-type-options"
        required="required"
        onChange={handleRecipeSearch}
      >
        <option value="---">---</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>
      <h3>Keep track of your carbon footprint</h3>
      <TooltipComponent />
      <select name="co2-options" onChange={handleRecipeSearch}>
        <option value="---">---</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <h3 className="error-message">{errorMessage}</h3>
      <button onClick={handleRecipeSubmit}>Search</button>
    </div>
  );
};

export default RecipeSearchBar;

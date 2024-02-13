import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { PiCookingPotThin } from "react-icons/pi";

const SingleRecipe = () => {
  const [singleRecipe, setSingleRecipe] = useState({});

  useEffect(() => {
    const storedRecipe = localStorage.getItem("selectedRecipe");
    setSingleRecipe(JSON.parse(storedRecipe));
  }, []);

  return (
    <div className="single-recipe">
      <Link to="/" className="link-to-home">
      🥕 Scrap Cook
      </Link>
      <h2 className="home-h2">{singleRecipe.label} Recipe</h2>
      <img
        alt={`Picture of the ${singleRecipe.label} dish`}
        src={singleRecipe.image}
      />
      <h3 className="home-h3">Basic Info</h3>
      <ul>
        <li>
          Cuisine Type -
          {singleRecipe.cuisineType ? singleRecipe.cuisineType[0] : "None"}
        </li>
        <li>
          Meal Type -{" "}
          {singleRecipe.mealType ? singleRecipe.mealType[0] : "None"}
        </li>
        <li>Calories - {singleRecipe.calories}</li>
      </ul>
      <h3 className="home-h3">Health and Sustainabilty info</h3>
      <p className="single-recipe-p">Calories - {singleRecipe.calories}</p>
      <div>
        <h3 className="home-h3">Dietary labels</h3>
        {singleRecipe.dietLabels ? (
          singleRecipe.dietLabels.map((dietLabel) => {
            return (
              <ul>
                <li>{dietLabel}</li>
              </ul>
            );
          })
        ) : (
          <p>none</p>
        )}
      </div>

      <div>
        <h3 className="home-h3">Health Labels</h3>
        {singleRecipe.healthLabels ? (
          singleRecipe.healthLabels.map((healthLabel) => {
            return (
              <ul>
                <li>{healthLabel}</li>
              </ul>
            );
          })
        ) : (
          <p>none</p>
        )}
      </div>

      <div>
        <h3 className="home-h3">Cautions</h3>
        {singleRecipe.cautions ? (
          singleRecipe.cautions.map((cautionLabel) => {
            return (
              <ul>
                <li>{cautionLabel}</li>
              </ul>
            );
          })
        ) : (
          <p>none</p>
        )}
      </div>
      <p className="single-recipe-p">Co2 Class grade - {singleRecipe.co2EmissionsClass}</p>
      <p className="single-recipe-p">Total Co2 Emissions - {singleRecipe.totalCO2Emissions}</p>

      <h3 className="home-h3">Interested in the recipe? </h3>
      <Link to={`${singleRecipe.url}`} className="link-to-recipe">
        View recipe from {singleRecipe.source}
      </Link>
    </div>
  );
};

export default SingleRecipe;
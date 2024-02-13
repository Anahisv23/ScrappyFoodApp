import "./App.css";
import RecipeSearchBar from "./RecipeSearchBar.js";
import { PiCookingPotThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Link to="/" className="link-to-home">
      🥕Scrap Cook
      </Link>
      <h2 className="home-h2">Lost on what to prepare for a meal when you only have scraps?</h2>
      <RecipeSearchBar />
    </div>
  );
};

export default App;
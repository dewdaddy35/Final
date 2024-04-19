import { useParams } from "react-router-dom";
import "./recipeDetail.css";
import { useEffect, useState } from "react";
import dataService from "../services/dataService";
import { cookingStyleText, skillLevelText } from "../services/textService";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    let recipeData = await dataService.getRecipe(id);

    recipeData.ingredients = recipeData.ingredients.split("\r\n");
    recipeData.steps = recipeData.steps.split("\r\n");

    setRecipe(recipeData);
  };

  const like = () => {
    dataService.saveLike(id);
  };

  return (
    <div className="recipeDetail">
      <h1>Recipe Details</h1>

      <div className="grid">
        <div className="left-heading">
          <h2>{recipe.title}</h2>
          <div className="details">
            <label>Cook Time: {recipe.cooktime}</label>
            <br />
            <label>Method: {cookingStyleText(recipe.cooking_style)}</label>
            <br />
            <label>Level: {skillLevelText(recipe.skill_level)}</label>
            <br />
            <button onClick={like}>Like</button>
          </div>
        </div>

        <div>
          <img src={recipe.image} alt="" />
        </div>

        <div>
          <h5>Ingredients:</h5>
          <ul className="ingridients">
            {recipe.ingredients?.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </div>

        <div>
          <h5>Instructions:</h5>
          <ol className="instructions">
            {recipe.steps?.map((steps, index) => (
              <li key={index}>{steps}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;

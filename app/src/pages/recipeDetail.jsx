import { useParams } from "react-router-dom";
import "./recipeDetail.css";
import { useEffect, useState } from "react";
import dataService from "../services/dataService";

const RecipeDetail = () => {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getRecipe();
    }, []);

    const getRecipe = () => {
        const recipeData = dataService.getRecipe(id);
        setRecipe(recipeData);
    };

    return (
        <div className="recipeDetail page">

            <h3>Recipe Details</h3>

            <div className="grid">
                <div className="left-heading">
                    <h2>{recipe.title}</h2>
                    <div className="details">
                        <label>Cook Time: {recipe.cookTime}</label><br />
                        <label>Method: {recipe.method}</label><br />
                        <label>Level: {recipe.level}</label>
                    </div>
                </div>

                <div>
                <img src={recipe.image} alt="" />
                </div>

                <div>
                <h5>Ingredients:</h5>
                    <ul className="ingridients">
                        {recipe.ingredients?.map(ing => (
                            <li>{ing}</li>
                        ))}
                    </ul>
                </div>

                <div>
                <h5>Instructions:</h5>
                <ol className="instructions">
                    {recipe.steps?.map(steps => (
                        <li>{steps}</li>
                    ))}
                </ol>
                </div>
            </div>

        </div>
    );
}

export default RecipeDetail;

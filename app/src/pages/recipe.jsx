import React, { useEffect, useState } from "react";
import "./recipe.css";
import dataService from "../services/dataService";
import { useNavigate } from "react-router-dom";

import {
  cookingStyleText,
  skillLevelText,
  foodTypeText,
} from "../services/textService";

function Recipe() {
  const [allPosts, setAllPost] = useState([]);
  const [filters, setFilters] = useState({
    cooking_style: "",
    skill_level: "",
    food_type: "",
  });
  const navigate = useNavigate();
  const [filterVisible, setFilterVisible] = useState(true);

  function showHide() {
    setFilterVisible(!filterVisible);
  }

  function getFilteredPosts() {
    const filteredPosts = allPosts.filter((post) => {
      let matchesFilter = true;
      if (
        filters.cooking_style &&
        post.cooking_style != filters.cooking_style
      ) {
        matchesFilter = false;
      }
      if (filters.skill_level && post.skill_level != filters.skill_level) {
        matchesFilter = false;
      }
      if (filters.food_type && post.food_type != filters.food_type) {
        matchesFilter = false;
      }
      return matchesFilter;
    });
    return filteredPosts;
  }

  async function loadPost() {
    const data = await dataService.getPosts();
    setAllPost(data);
  }

  useEffect(() => {
    loadPost();
  }, [filters]);

  function sendToDetails(id) {
    navigate("/recipeDetail/" + id);
    console.log("'Sending User to Recipe Details page.");
  }

  function handleFilterChange(event) {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  }

  function clearFilters() {
    setFilters({
      cooking_style: "",
      skill_level: "",
      food_type: "",
    });
  }

  return (
    
      <div className="recipe-page page">
      {filterVisible ?
      ( <div className="filter-section">
        <h2>Filters</h2>
        <div className="filter-buttons">
          <fieldset>
            <legend>Cooking Style</legend>
            <label>
              <input
                type="radio"
                name="cooking_style"
                value="1"
                checked={filters.cooking_style === "1"}
                onChange={handleFilterChange}
              />
              Grilled
            </label>
            <label>
              <input
                type="radio"
                name="cooking_style"
                value="2"
                checked={filters.cooking_style === "2"}
                onChange={handleFilterChange}
              />
              Smoked
            </label>
          </fieldset>
          <fieldset>
            <legend>Skill Level</legend>
            <label>
              <input
                type="radio"
                name="skill_level"
                value="1"
                checked={filters.skill_level == "1"}
                onChange={handleFilterChange}
              />
              Beginner
            </label>
            <label>
              <input
                type="radio"
                name="skill_level"
                value="2"
                checked={filters.skill_level == "2"}
                onChange={handleFilterChange}
              />
              Intermediate
            </label>
            <label>
              <input
                type="radio"
                name="skill_level"
                value="3"
                checked={filters.skill_level == "3"}
                onChange={handleFilterChange}
              />
              Expert
            </label>
          </fieldset>
          <fieldset>
            <legend>Food Type</legend>
            <label>
              <input
                type="radio"
                name="food_type"
                value="1"
                checked={filters.food_type === "1"}
                onChange={handleFilterChange}
              />
              Seafood
            </label>
            <label>
              <input
                type="radio"
                name="food_type"
                value="2"
                checked={filters.food_type === "2"}
                onChange={handleFilterChange}
              />
              Pork
            </label>
            <label>
              <input
                type="radio"
                name="food_type"
                value="3"
                checked={filters.food_type === "3"}
                onChange={handleFilterChange}
              />
              Beef
            </label>
            <label>
              <input
                type="radio"
                name="food_type"
                value="4"
                checked={filters.food_type === "4"}
                onChange={handleFilterChange}
              />
              Poultry
            </label>
            <label>
              <input
                type="radio"
                name="food_type"
                value="5"
                checked={filters.food_type === "5"}
                onChange={handleFilterChange}
              />
              Pizza
            </label>
            <label>
              <input
                type="radio"
                name="food_type"
                value="6"
                checked={filters.food_type === "6"}
                onChange={handleFilterChange}
              />
              Beef Pork
            </label>
          </fieldset>
          <button className="btn btn-secondary" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>

      </div> ) : null }
      <div className="recipe-list">
        <h1>Recipes</h1> 
        <button onClick={showHide} className="filter-btn">Show/hide filters</button>
        <div className="post-list">
          {getFilteredPosts().map((post) => (
            <div className="card" style={{ width: "18rem" }} key={post.id}>
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                  Method: {cookingStyleText(post.cooking_style)}
                </p>
                <p className="card-text">
                  Food Type: {foodTypeText(post.food_type)}
                </p>
                <p className="card-text">
                  Level: {skillLevelText(post.skill_level)}
                </p>
                <button
                  onClick={() => sendToDetails(post.id)}
                  className="go-to-recipe btn btn-secondary"
                >
                  Go to Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipe;

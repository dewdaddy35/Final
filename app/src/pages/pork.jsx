import "./pork.css";
import React, { useEffect, useState } from "react";
import "./recipe.css";
import dataService from "../services/dataService";
import { useNavigate } from "react-router-dom";

import {
  cookingStyleText,
  skillLevelText,
  foodTypeText,
} from "../services/textService";

function Pork() {
     const [filters, setFilters] = useState({
    cooking_style: "",
    // double check below
    searchTerm: "",
    skillLevel: "",
    foodType: "",
  });
    return (
        <div className="pork page">
            <h1>Pork Recipes!</h1>
            <img src="./images/ribs.png" alt="" />
        </div>
    );
}

export default Pork;
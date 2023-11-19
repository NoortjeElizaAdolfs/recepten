import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <article className="recipe">
        <a href={url} target="_blank" rel="noopener noreferrer">
            <h2>{label}</h2>
            <img src={image} alt={label} />
        </a>
      <button type="submit" onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </article>
  );
};

export default Recipe;

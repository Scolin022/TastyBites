/* USED TO BE RECIPEMODAL.JSX */

import React from 'react';
// import IngredientList from '../Ingredients/IngredientList';
// Global CSS Styles //
import './../../assets/styles/base/reset.css'; 
import './../../assets/styles/base/theme.css'; 
import './../../assets/styles/base/typography.css';
// Local CSS Styles //
import './../Buttons/buttons.css';
import styles from './RecipeClicked.module.css';

function RecipeClicked({ recipe, onClose }) {
    return (
      <div className={styles.modalBackdrop}>
        <div class={styles.modalContent}>
          <h2>{recipe.name}</h2>
          <div className={styles.recipeImg}>
            <button className="exitButton" onClick={onClose}>X</button>


            {/* <IngredientList recipe={selectedRecipe} onClose={closeRecipe} /> */}
            {/* ingredients, instructions, etc. */}



            <img src={recipe.image} alt={recipe.name} />
            <p>Cook Time: {recipe.cookTime}</p>
            <p>Prep Time: {recipe.prepTime}</p>
            {/* any other details */}
          </div>
        </div>
      </div>
    );
}

export default RecipeClicked;
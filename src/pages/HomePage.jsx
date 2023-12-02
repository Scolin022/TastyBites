/* THIS PAGE IS THE HOME PAGE THAT DISPLAYS ALL RECIPES */

import { useState } from 'react';
import recipesData from '../data/recipes.json';
import RecipeClicked from '../components/Recipe/RecipeClicked';

// Global CSS Styles //
import './../assets/styles/base/reset.css'; 
import './../assets/styles/base/theme.css'; 
import './../assets/styles/base/typography.css'; 

// Local CSS Styles //
import styles from './../components/Recipe/Recipe.module.css';
import './../components/Recipe/RecipeClicked.module.css';


function HomePage() {
    const [recipes] = useState(recipesData);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const openRecipe = (recipe) => {
        setSelectedRecipe(recipe);
    };

    const closeRecipe = () => {
        setSelectedRecipe(null);
    };

    return (
      <div>
        <div>
          <h1>Recipes</h1>
        </div>
        <div className="gridContainer">
          {recipes.map((recipe) => (
            <div className={styles.recipeContainer} key={recipe.id} onClick={() => openRecipe(recipe)}>
              <img src={recipe.image} alt={recipe.name} />
              <h2>{recipe.name}</h2>
              {/* Rest of Recipe Info */}
            </div>
          ))}
          {selectedRecipe && ( 
              <RecipeClicked recipe={selectedRecipe} onClose={closeRecipe} />
          )}
        </div>
      </div>
    );
}
export default HomePage;
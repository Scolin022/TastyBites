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
import './../assets/styles/layouts/grid.css';


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
              
              <img src={require(`./../../assets/images/${recipe.image}`).default} alt={"finished " + recipe.name + " recipe"} />
              LEFT OFF TRYING TO DYNAMICALLY RENDER IMAGES, BUT GOT AN ERROR. WAS IN THE MIDDLE OF ASKING CHATGBT


              <h2>{recipe.name}</h2>
              <h3>Cook Time</h3> {/* Style these with flexbox to make two-column layout */}
              <p>{recipe.cookTime}</p>
              <h3>Prep Time</h3>
              <p>{recipe.prepTime}</p>
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
import React, { useState } from 'react';
import Ingredient from '../Ingredients/IngredientList';

// Global CSS Styles //
import './../../assets/styles/base/reset.css'; 
import './../../assets/styles/base/theme.css'; 
import './../../assets/styles/base/typography.css'; 

// Local CSS Styles //
import styles from './Recipe.module.css';

function Recipe({ ingredients }) {
    const [servings, setServings] = useState(1);

    const handleServingsChange = (e) => {
        setServings(e.target.value);
    };

    return (
        <div className={styles.recipeContainer}>
            <label>
                Servings: 
            </label>
            
            <input type="number" value={servings} onChange={handleServingsChange} min="1" step="0.5" />
            {ingredients.map((ingredient, index) => (
            <Ingredient key={index} name={ingredient.name} baseQuality={ingredient.quality} servings={servings} />
            ))}
        </div>
    );
}

export default Recipe;
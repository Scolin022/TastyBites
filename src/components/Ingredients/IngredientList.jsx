import React, { useState } from 'react';
import Ingredient from './Ingredient';

// Global CSS Styles //
import './../../assets/styles/base/reset.css'; 
import './../../assets/styles/base/theme.css'; 
import './../../assets/styles/base/typography.css'; 

// Local CSS Styles //
// import styles from './Ingredients.module.css';

function IngredientList({ ingredients }) {
    const [servings, setServings] = useState(1);

    const handleServingsChange = (e) => {
      setServings(parseFloat(e.target.value));
    };

    return (
      <div>
        <label>Servings: </label>
        <input type="number" value={servings} onChange={handleServingsChange} min="1" step="0.5" />
        {ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            name={ingredient.name}
            baseQuantity={ingredient.quantity}
            servings={servings}
            unit={ingredient.unit}
          />
        ))}
      </div>
    );
}

export default IngredientList;
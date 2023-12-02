import React from 'react';

// Global CSS Styles //
import './../../assets/styles/base/reset.css'; 
import './../../assets/styles/base/theme.css'; 
import './../../assets/styles/base/typography.css'; 

// Local CSS Styles //
// import styles from './Ingredients.module.css';


function Ingredient({ name, baseQuantity, servings, unit }) {
    const adjustedQuantity = baseQuantity * servings;

    return (
      <div>
        <label>{name}: </label>
        <span> {adjustedQuantity.toFixed(2)} {unit}</span>
      </div>
    );
}

export default Ingredient;
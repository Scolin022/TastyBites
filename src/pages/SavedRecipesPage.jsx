import React from 'react';
// Global CSS Styles //
import './../assets/styles/base/reset.css'; 
import './../assets/styles/base/theme.css'; 
import './../assets/styles/base/typography.css'; 
// Local CSS Styles //
import styles from './SavedRecipesPage.module.css';

const SavedRecipesPage = () => {
    return (
        <div>
            <h1 className={styles.testStyle}>Insert Saved Recipes Data from Database HERE</h1>
        </div>
    );
}

export default SavedRecipesPage;
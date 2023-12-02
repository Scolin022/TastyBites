import React from 'react';
import { Link } from 'react-router-dom';
// Global CSS Styles //
import './../../assets/styles/base/reset.css'; 
import './../../assets/styles/base/theme.css'; 
import './../../assets/styles/base/typography.css'; 
// Local CSS Styles //
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.displayLarge}>CookNook</h1>
            <nav className={styles.navBar}>
                <Link to="/SavedRecipesPage" className={styles.navLink}>Saved Recipes</Link>
                <Link to="/LoginPage" className={styles.navLink}>Login</Link>
            </nav>
        </header>
    );
};

export default Header;
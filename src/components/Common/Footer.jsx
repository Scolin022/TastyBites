import React from 'react';
import './Footer.module.css';
// Global CSS Styles //
import './../../assets/styles/base/reset.css'; 
import './../../assets/styles/base/theme.css'; 
import './../../assets/styles/base/typography.css'; 
// Local CSS Styles //
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div><h3 className={styles.testStyle}>@2023 Samantha Colin</h3></div>
        </footer>
    );
}

export default Footer;
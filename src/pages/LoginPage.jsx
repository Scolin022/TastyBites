import React from 'react';
// Global CSS Styles //
import './../assets/styles/base/reset.css'; 
import './../assets/styles/base/theme.css'; 
import './../assets/styles/base/typography.css';
// Local CSS Styles //
import styles from './LoginPage.module.css';

function LoginPage() {
    return (
        <div>
            <h1 className={styles.testStyle}>Insert Login Page Form HERE</h1>
        </div>
    );
}

export default LoginPage;
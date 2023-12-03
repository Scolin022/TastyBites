import { useState } from 'react';
// import './../../assets/styles/layouts/form.css';

function SignUpForm() {
    const [userInfo, setUserInfo] = useState({ username: '', email: '', password: ''});

    // handleChange & handleSubmit FUNCTIONS GO HERE //
    // handleChange: manages input changes, updating state with user input
    // handleSubmit: handles form submission, often involves data processing or validation

    const [errors, setErrors] = useState({});
    
    // JSX for the form goes here

    const validatePassword = (password) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return regex.test(password);
    };
    
    // Implement handleChange and handleSubmit using validatePassword
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('path_to_php_signup_script', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo),
        });
    
        // Handle the server response
    };    
}

export default SignUpForm;
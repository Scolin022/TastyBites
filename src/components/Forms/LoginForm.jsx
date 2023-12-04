import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // initalize 'navigate' before using
import './../../assets/styles/layouts/form.css';

function LoginForm() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({});
    const [setLoggedIn] = useState(false);
    const navigate = useNavigate(); 

    // Handle Input Changes
    const handleChange = (event) => {
        setCredentials({ ...credentials, [event.target.id]: event.target.value });
    };                                   // ^ updates property in new object w/ id to
                                         // new inputs made by user

    // Validate Credentials
    const validate = () => {
        let tempErrors = {}; // empty object to store validation errors
        if (credentials.username.length < 3) tempErrors.username = "Username must be at least 3 characters";
        setErrors(tempErrors); // updates 'errors' state with 'tempErrors' object
        return Object.keys(tempErrors).length === 0; // returns true if no errors ('tempErrors' is empty), returns false if finds errors
        // ^ decides whether to submit or display errors
    };

    // Handles Form's Submission Process
    const handleSubmit = async (event) => {
        event.preventDefault(); // prevents default form submit (would reload page)
    
        if (validate()) { // checks if form data is valid: if not stops process
            try {
                const response = await fetch('path_to_php_login_script', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credentials), // Send credentials as JSON
                });
                // Logic Based on Successful Response
                if (response.ok) { // checks if response status is 'OK' (status code 200-299)
                    // const data = await response.json(); // Parse JSON response

                    setLoggedIn(true);
                    navigate('/dashboard'); // redirects after sucessful login (using react-router, for example)
                    
                } else { // gets error info & updates state to show error message
                    const errorData = await response.json();
                    setErrors({ form: errorData.message || 'Login failed. Please try again.' }); // set error message from server, or a default one
                }
            } catch (error) { // updates state w/ message for network errors/unexpected issues during fetch operation
                console.error('Login error:', error); // Optional: log the error
                setErrors({ form: 'An unexpected error occurred. Please try again later.' });
            }
        }
    };    

    // JSX for the form
    return (
        <div className="formContainer">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={credentials.username}
                    onChange={handleChange}
                    required
                />





                {errors.username && <span>{errors.username}</span>}






                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default LoginForm;
import React, { useState } from 'react';
import './../../assets/styles/layouts/form.css';

function LoginForm() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Handle Input Changes
    const handleChange = (event) => {
        // the '...' in front of 'credentials' creates a new object that copies
        // key-value pairs from the 'credentials' object defined above
        setCredentials({ ...credentials, [event.target.id]: event.target.value });
    };                                   // ^ updates property in new object w/ id to
                                         // new inputs made by user
    {
    /* 
        So, in the code, when you use
        { ...credentials, [event.target.id]: event.target.value },
        you're saying, "Keep everything in my credentials state as it is, but update just the
        username or password with the new value I just typed in."
    */
    }


    // Validate Credentials
    const validate = () => {
        let tempErrors = {}; // creates empty object to store validation errors
        if (credentials.username.length < 3) tempErrors.username = "Username must be at least 3 characters";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validate()) {
            const response = await fetch('path_to_php_login_script', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });
            // Process server response
            // Set formSubmitted state based on response
        }
    };

    // Show submission message if form is submitted
    if (formSubmitted) {
        return <div>Thank you for submitting your information. We have processed your account successfully</div>;
    }

    // JSX for the form
    return (
        <div className="loginFormContainer">
            <form onSubmit={handleSubmit}>
                <h1>Welcome Back!</h1>

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

    // handleChange & handleSubmit FUNCTIONS GO HERE //
    // handleChange: manages input changes, updating state with user input
    // handleSubmit: handles form submission, often involves data processing or validation
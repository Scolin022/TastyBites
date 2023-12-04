// TO-DO: //
// - modify mySQL users table later to account for newsletter opt
// - add displayed to user error message to user when validateUserEmail fails using blur check
// - add password criteria in validatePassword include min character length check if not there
// - make capitalizeFirstLetter work or find a better way to capitalize first and last name
// - make required error for empty fields more compact so it doesnt need to be implemented for each function

// OPTIONAL FOR LATER //
// - password validation include checking for special character that are not allowed and displaying error message specific to that

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../../assets/styles/layouts/form.css';

function SignUpForm() {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        newsletterOptOut: true,
    });
    const [errors, setErrors] = useState({});
    const [setSignedUp] = useState(false);
    const navigate = useNavigate(); 



    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
        const { id, value, type, checked } = event.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };



    const validate = () => {
        let formErrors = {};
        
        formErrors.firstName = validateName(userInfo.firstName, 'First name');
        formErrors.lastName = validateName(userInfo.lastName, 'Last name');
        formErrors.email = validateUserEmail(userInfo.email);
        formErrors.username = validateUsername(userInfo.username);
        formErrors.password = userInfo.password && !validatePassword(userInfo.password) ? 'Password does not meet criteria' : '';
        formErrors.confirmPassword = userInfo.password !== userInfo.confirmPassword ? 'Passwords do not match' : '';
        
        const cleanedErrors = Object.fromEntries(Object.entries(formErrors).filter(([_, value]) => value));
        setErrors(cleanedErrors);

        return Object.keys(formErrors).length === 0;
    };



    const handleBlur = (field) => {
        const newErrors = { ...errors };
    
        if (field === 'firstName' || field === 'lastName') {
            newErrors[field] = userInfo[field].trim() ? '' : `${capitalizeFirstLetter(field)} is required`;
        } else if (field === 'email') {
            newErrors.email = !userInfo.email.trim() ? 'Email is required' :
                !validateEmail(userInfo.email) ? 'Invalid email format' : '';
        } else if (field === 'username') {
            newErrors.username = !userInfo.username.trim() ? 'Username is required' :
                userInfo.username.length > 15 ? 'Username must be less than 16 characters' : '';
        } else if (field === 'password') {
            newErrors.password = userInfo.password && !validatePassword(userInfo.password) ? 'Password does not meet criteria' : '';
        } else if (field === 'confirmPassword') {
            newErrors.confirmPassword = userInfo.password !== userInfo.confirmPassword ? 'Passwords do not match' : '';
        }
    
        setErrors(newErrors);
    };
    

    const capitalizeFirstLetter = (string) => { // DOES NOT WORK
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const validateName = (name, fieldName) => {
        if (!name.trim()) {
            return `${fieldName} is required`;
        }
        return '';
    };



    const validateUserEmail = (email) => {
        if (!email.trim()) {
            return 'Email is required'; // works
        }
        if (!validateEmail(email)) {
            return 'Invalid email format';
        }
        return '';
    };



    const validateUsername = (username) => {
        if (!username.trim()) {
            return 'Username is required';
        }
        if (username.length > 15) {
            return 'Username must be less than 16 characters';
        }
        return '';
    };



    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    };
    


    const validatePassword = (password) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        return regex.test(password);
    };
    
         
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validate()) {
            const response = await fetch('path_to_php_signup_script', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userInfo),
            });

            if (response.ok) {
                setSignedUp(true);
                navigate('/dashboard'); // redirects after sucessful login
                return 'Submission successful!'; // testing
            } else {
                const errorData = await response.json();
                setErrors({ form: errorData.message || 'Login failed. Please try again.' });
            }
        }
    };



    return (
        <div className="formContainer">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        onChange={handleChange}
                        onBlur={() => handleBlur('firstName')}
                        value={userInfo.firstName}
                    />
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        onChange={handleChange}
                        onBlur={() => handleBlur('lastName')}
                        value={userInfo.lastName}
                    />
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        value={userInfo.email}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div>
                    <label>
                        <input
                            type="checkbox"
                            id="newsletterOptOut"
                            onChange={handleChange}
                            checked={userInfo.newsletterOptOut}
                        />
                        <p>Opt out of newsletters (checked by default)</p>
                    </label>
                </div>
                <div>
                <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        onChange={handleChange}
                        onBlur={() => handleBlur('username')}
                        value={userInfo.username}
                        // maxLength={15} // try to implement
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={handleChange}
                        onBlur={() => handleBlur('password')}
                        value={userInfo.password}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        onChange={handleChange}
                        onBlur={() => handleBlur('confirmPassword')}
                        value={userInfo.confirmPassword}
                    />
                    {errors.confirmPassword && (
                        <p className="error">{errors.confirmPassword}</p>
                    )}
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;
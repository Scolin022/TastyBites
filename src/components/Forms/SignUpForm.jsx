import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // initalize 'navigate' before using
import './../../assets/styles/layouts/form.css';

function SignUpForm() {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        newsletterOptOut: true,
    });
    const [errors, setErrors] = useState({});
    const [signedUp, setSignedUp] = useState(false);
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
        let tempErrors = {};

        if (!userInfo.firstName.trim()) tempErrors.firstName = 'First name is required';
        if (!userInfo.lastName.trim()) tempErrors.lastName = 'Last name is required';
        if (!userInfo.email.trim()) tempErrors.email = 'Email is required';
        if (!validateEmail(userInfo.email)) tempErrors.email = 'Invalid email format';

        if (!validatePassword(userInfo.password)) 
        tempErrors.password = "Password does not meet criteria";
        if (userInfo.password !== userInfo.confirmPassword)
        tempErrors.confirmPassword = 'Passwords do not match';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
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
                navigate('/dashboard'); // redirects after sucessful login (using react-router, for example)
            } else {  // gets error info & updates state to show error message
                const errorData = await response.json();
                setErrors({ form: errorData.message || 'Login failed. Please try again.' }); // set error message from server, or a default one
            }
        }
    };

    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             {/* Form fields here */}
    //             <input type="text" id="username" onChange={handleChange} value={userInfo.username} />
    //             {/* Repeat for other fields */}
    //             <button type="submit">Sign Up</button>
    //         </form>
    //         {/* Display error messages */}
    //     </div>
    // );

    // Render a success message or redirect the user after successful signup
    if (signedUp) {
        return (
            <div>
                <p>Sign up successful! You can now go to the dashboard.</p>
                <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
            </div>
        );
    }

    // JSX for the form
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
                        Opt out of newsletters (checked by default)
                    </label>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={handleChange}
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
                        value={userInfo.confirmPassword}
                    />
                    {errors.confirmPassword && (
                        <p className="error">{errors.confirmPassword}</p>
                    )}
                </div>

                <button type="submit">Sign Up</button>
            </form>
            {/* Display error messages */}
        </div>
    );
}

export default SignUpForm;
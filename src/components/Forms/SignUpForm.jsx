import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // initalize 'navigate' before using
import './../../assets/styles/layouts/form.css';

function SignUpForm() {
    const [userInfo, setUserInfo] = useState({ username: '', email: '', password: ''});
    const [setErrors] = useState({});
    const [setSignedUp] = useState(false);
    const navigate = useNavigate(); 

    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!validatePassword(userInfo.password)) 
        tempErrors.password = "Password does not meet criteria";
        // Add more validations as needed
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Form fields here */}
                <input type="text" id="username" onChange={handleChange} value={userInfo.username} />
                {/* Repeat for other fields */}
                <button type="submit">Sign Up</button>
            </form>
            {/* Display error messages */}
        </div>
    );
}

export default SignUpForm;
import { useState } from 'react';
import './../../assets/styles/layouts/form.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formSubmitted, setSubmissionMessage] = useState(false);

    const handleSubmit = event => { // Different than ContactUsForm.jsx method, compare each and choose best for use-case
        event.preventDefault();
        console.log('Form submitted with', { email, password });

        setSubmissionMessage(true);
    };

    if (formSubmitted) {
        return <div>Thank you for submitting your information. We have processed your account successfully</div>
    }
    return (
        <div className="loginFormContainer">
            <form onSubmit={handleSubmit}>
                <h1>Welcome Back!</h1>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default LoginForm;
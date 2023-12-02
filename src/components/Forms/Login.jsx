import { useState } from 'react';
import './../../assets/styles/layouts/form.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        // Here you would send PHP to the backend
        console.log('Submitting', { email, password });
    };

    return (
        <div className="loginFormContainer">
            <form onSubmit={handleSubmit}>
                <h2>Welcome Back!</h2>

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
import { useState } from 'react'; 
import './../../assets/styles/layouts/form.css';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setSubmissionMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = { name, email, message };
            const response = await fetch('./../../server/contactForm.php', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setSubmissionMessage(data.message);
        } catch (error) {
            setSubmissionMessage('An error occurred while sending your message.');
        }
    };      

    if (formSubmitted) {
        return <div>Thank you for submitting your information. We have processed your account successfully</div>
    }
    return (
        <div className="loginFormContainer">
            <form onSubmit={handleSubmit}>
                <h1>What Can We Help You With?</h1>

                <label htmlFor="text">Name</label>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                />

                <label htmlFor="email">Email</label>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                />

                <label htmlFor="message">Your Message</label>

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    required
                />

                <button type="submit">Send Message</button>
            </form>
        </div>

    );
}

export default ContactForm;
/* THIS IS THE CONTACT FORM SUBMISSION FUNCTIONALITY AND FORM STRUCTRE TO
 BE DISPLAYED TO THE USER */

import { useState } from 'react';
// import './../../assets/styles/layouts/form.css';

function ContactForm() {
    const[formData, setFormData] = useState({ name: '', email: '', message: '' });

    // handleChange & handleSubmit FUNCTIONS GO HERE //
    // handleChange: manages input changes, updating state with user input
    // handleSubmit: handles form submission, often involves data processing or validation

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({  })
    };

    // VALIDATION REQUIREMENTS //
    // - Name needs minimum of 3 characters
    // - Message needs minimum of 50 characters
    const validate = () => {
        let tempErrors = {};
        if (formData.name.length < 3) tempErrors.name = "Name must be at least 3 characters";
        if (formData.message.length < 50) tempErrors.message = "Message must be at least 50 characters";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // JSX for the form goes here

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validate()) {
            // Submit form logic
            const response = await fetch('path_to_php_script', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
        }
    };
}

export default ContactForm;
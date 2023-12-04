import ContactForm from './../components/Forms/ContactForm';
// Global CSS Styles //
import './../assets/styles/base/reset.css'; 
import './../assets/styles/base/theme.css'; 
import './../assets/styles/base/typography.css';

function ContactPage() {
    return (
        <div className="formGridContainer">
            <div>
                <h1>Hi,what can we help you with?</h1>
            </div>
            <div>
                <h2>Contact Us</h2>
                <ContactForm />
            </div>
        </div>
    );
}

export default ContactPage;
import SignUpForm from './../components/Forms/SignUpForm';
// Global CSS Styles //
import './../assets/styles/base/reset.css'; 
import './../assets/styles/base/theme.css'; 
import './../assets/styles/base/typography.css';
// Local CSS Styles //
import './../assets/styles/layouts/form.css';

function SignUpPage() {
    return (
        <div className="formGridContainer">
            <h1>Healthy Eating Made Delicious</h1>
            <SignUpForm/>
        </div>
    );
}

export default SignUpPage;
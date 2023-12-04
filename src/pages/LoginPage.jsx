import LoginForm from '../components/Forms/LoginForm';
// Global CSS Styles //
import './../assets/styles/base/reset.css'; 
import './../assets/styles/base/theme.css'; 
import './../assets/styles/base/typography.css';
// Local CSS Styles //
import './../assets/styles/layouts/form.css';
// import styles from './LoginPage.module.css';

function LoginPage() {
    return (
        <div className="formGridContainer">
            <h1>Welcome Back!</h1>
            <LoginForm />
        </div>
    );
}

export default LoginPage;
import LoginForm from '../components/Forms/LoginForm';
// Global CSS Styles //
import './../assets/styles/base/reset.css'; 
import './../assets/styles/base/theme.css'; 
import './../assets/styles/base/typography.css';
// Local CSS Styles //
// import styles from './LoginPage.module.css';

function LoginPage() {
    return (
        <div>
            <LoginForm />
        </div>
    );
}

export default LoginPage;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import HomePage from './pages/HomePage';
import SavedRecipesPage from './pages/SavedRecipesPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
// Global CSS Styles //
// import './assets/styles/base/reset.css'; 
// import './assets/styles/base/theme.css'; 
// import './assets/styles/base/typography.css';
// import './assets/styles/layouts/grid.css';
// Local CSS Styles //

function App() {
  return (
    <Router>
      <div className="App, gridContainer">
        <div className="header">
          <Header/>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SavedRecipesPage" element={<SavedRecipesPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
        </Routes>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
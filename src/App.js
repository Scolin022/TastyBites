import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import HomePage from './pages/HomePage';
import SavedRecipesPage from './pages/SavedRecipesPage';
import LoginPage from './pages/LoginPage';
// Global CSS Styles //
import './assets/styles/base/reset.css'; 
import './assets/styles/base/theme.css'; 
import './assets/styles/base/typography.css';
// Local CSS Styles //

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SavedRecipesPage" element={<SavedRecipesPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
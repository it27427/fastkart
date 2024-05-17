import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// AUTH-PAGES
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';

// IMPORT-PAGES
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';

import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import TermsPage from '@/pages/TermsPage';
import PrivacyPolicy from '@/pages/PrivacyPolicy';

import ErrorPage from '@/pages/ErrorPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />

        {/* ABOUT-PAGES */}
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/terms-of-use' element={<TermsPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />

        {/* AUTH-PAGES */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        {/* NOT-FOUND-PAGE */}
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;

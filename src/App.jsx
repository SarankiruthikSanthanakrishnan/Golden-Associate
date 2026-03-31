import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import PrivacyPolicy from './screens/privacy/PrivacyPolicy';
import RefundPolicy from './screens/privacy/RefundPolicy';
import TermsNconditon from './screens/privacy/TermsNconditon';

const App = () => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPath && <Navbar />}
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-conditions" element={<TermsNconditon />} />
      </Routes>
      {!isAdminPath && <Footer />}
    </>
  );
};

export default App;

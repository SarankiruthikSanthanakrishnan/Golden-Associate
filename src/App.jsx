import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import PrivacyPolicy from './screens/privacy/PrivacyPolicy';
import RefundPolicy from './screens/privacy/RefundPolicy';
import TermsNconditon from './screens/privacy/TermsNconditon';
import Home from './components/user/Home';
import Explore from './components/user/Explore';
import Deals from './components/user/Deals';
import About from './components/user/About';
import Service from './components/user/Service';
import SingleProduct from './components/user/SingleProduct';
import ReachUs from './screens/ReachUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Cart from './components/user/Cart';

// Admin Imports
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './screens/admins/Dashboard';
import Inventory from './screens/admins/Inventory';
import Orders from './screens/admins/Orders';
import OrderDetail from './screens/admins/OrderDetail';
import InvoiceGenerator from './components/admin/InvoiceGenerator';

const App = () => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPath && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/admin/inventory" element={<AdminLayout><Inventory /></AdminLayout>} />
        <Route path="/admin/orders" element={<AdminLayout><Orders /></AdminLayout>} />
        <Route path="/admin/orders/:id" element={<AdminLayout><OrderDetail /></AdminLayout>} />
        <Route path="/admin/products" element={<AdminLayout><Inventory /></AdminLayout>} />
        <Route path="/admin/invoice/:id" element={<AdminLayout><InvoiceGenerator /></AdminLayout>} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms" element={<TermsNconditon />} />
        <Route path="/terms-conditions" element={<TermsNconditon />} />
        <Route path="/reach-us" element={<ReachUs />} />
        <Route path="/contact" element={<ReachUs />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {!isAdminPath && <Footer />}
    </>
  );
};

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './screens/user/Home';
import Shop from './screens/user/Shop';
import Cart from './screens/user/Cart';
import Services from './screens/user/Services';
import Gallery from './screens/user/Gallery';
import Reachus from './screens/user/Reachus';
import ProductDetail from './screens/user/ProductDetail';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
import Profile from './components/user/Profile';
import Footer from './components/Footer';
import AdminDashboard from './screens/admins/AdminDashboard';
import AdminInventory from './screens/admins/AdminInventory';
import AdminOrders from './screens/admins/AdminOrders';
import AdminCustomers from './screens/admins/AdminCustomers';
import AdminReports from './screens/admins/AdminReports';
import AdminGalleryUpdates from './screens/admins/AdminGalleryUpdates';
import AdminProtectedRoute from './components/admin/AdminProtectedRoute';
import PrivacyPolicy from './screens/privacy/PrivacyPolicy';
import RefundPolicy from './screens/privacy/RefundPolicy';
import TermsNconditon from './screens/privacy/TermsNconditon';
import AdminProducts from './screens/admins/AdminProducts';
import AdminCategories from './screens/admins/AdminCategories';

const App = () => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPath && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reach-us" element={<Reachus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-conditions" element={<TermsNconditon />} />
        <Route
          path="/admin-dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/inventory"
          element={
            <AdminProtectedRoute>
              <AdminInventory />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <AdminProtectedRoute>
              <AdminOrders />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/gallery-updates"
          element={
            <AdminProtectedRoute>
              <AdminGalleryUpdates />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminProtectedRoute>
              <AdminProducts />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/categories"
          element={
            <AdminProtectedRoute>
              <AdminCategories />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/customers"
          element={
            <AdminProtectedRoute>
              <AdminCustomers />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <AdminProtectedRoute>
              <AdminReports />
            </AdminProtectedRoute>
          }
        />
      </Routes>
      {!isAdminPath && <Footer />}
    </>
  );
};

export default App;

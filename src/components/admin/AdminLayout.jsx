import React from 'react';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <AdminSidebar />
      <div className="ml-64 p-8">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;

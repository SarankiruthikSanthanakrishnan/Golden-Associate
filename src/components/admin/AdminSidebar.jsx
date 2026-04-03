"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  ChevronRight,
  TrendingUp,
  Boxes
} from 'lucide-react';
import logo from '../../assets/image.png';
import { useAuth } from '../../context/AuthContext';

const AdminSidebar = () => {
  const location = usePathname();
  const { logout } = useAuth();

  const menuItems = [
    { label: 'Dashboard', to: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Inventory', to: '/admin/inventory', icon: Boxes },
    { label: 'Orders', to: '/admin/orders', icon: ShoppingCart },
    { label: 'Products', to: '/admin/products', icon: Package },
    { label: 'Customers', to: '/admin/customers', icon: Users },
    { label: 'Analytics', to: '/admin/analytics', icon: BarChart3 },
  ];

  return (
    <aside className="w-64 bg-slate-900 h-screen fixed left-0 top-0 text-slate-400 flex flex-col border-r border-slate-800 z-50">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <TrendingUp size={18} />
          </div>
          <div>
            <p className="text-white font-black text-xs uppercase tracking-widest leading-none">Golden Admin</p>
            <p className="text-[9px] font-bold text-blue-400 uppercase tracking-tighter mt-1">Enterprise Console</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.to}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'hover:bg-slate-800 hover:text-slate-200'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <item.icon size={16} />
                {item.label}
              </div>
              <ChevronRight size={12} className="opacity-40" />
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-slate-800">
        <div className="bg-slate-800/50 rounded-xl p-4 mb-4">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">System Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-[10px] font-bold text-slate-300">Operational</p>
          </div>
        </div>

        <button 
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2 w-full text-xs font-bold hover:text-rose-400 transition-colors"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;

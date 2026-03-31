import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Bell,
  ChartNoAxesColumn,
  ChevronLeft,
  ChevronRight,
  Images,
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  PackageSearch,
  Search,
  Store,
  Tags,
  Users,
  X,
  FileText
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navSections = [
    {
      title: 'Overview',
      items: [
        { to: '/admin-dashboard', label: 'Dashboard', icon: LayoutDashboard },
      ]
    },
    {
      title: 'Catalog & Inventory',
      items: [
        { to: '/admin/products', label: 'Products', icon: Package },
        { to: '/admin/categories', label: 'Categories', icon: Tags },
        { to: '/admin/inventory', label: 'Inventory', icon: PackageSearch },
      ]
    },
    {
      title: 'Sales & Customers',
      items: [
        { to: '/admin/customers', label: 'Customers', icon: Users },
        { to: '/admin/orders', label: 'Orders', icon: Package },
      ]
    },
    {
      title: 'Site Management',
      items: [
        { to: '/admin/gallery-updates', label: 'Gallery Updates', icon: Images },
        { to: '/admin/reports', label: 'Reports', icon: ChartNoAxesColumn },
      ]
    }
  ];

  return (
    <div className="h-screen w-full relative overflow-hidden bg-slate-50 text-slate-800 flex font-sans selection:bg-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.1)_0%,transparent_40%),radial-gradient(circle_at_80%_80%,rgba(244,63,94,0.1)_0%,transparent_40%)] pointer-events-none z-0" />
      
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-50/80 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 inset-y-0 left-0 z-50 bg-white/90 backdrop-blur-xl border-r border-slate-200 flex flex-col transition-all duration-300 ease-in-out shadow-2xl h-screen
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        ${isSidebarExpanded ? 'w-72' : 'w-20'}`}
      >
        {/* Sidebar Header */}
        <div className={`h-20 flex items-center ${isSidebarExpanded ? 'justify-between px-6' : 'justify-center'} border-b border-slate-200 transition-all duration-300`}>
           <a href="/" className="flex items-center gap-3 group overflow-hidden">
              <div className="w-10 h-10 bg-blue-100 border border-blue-200 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shrink-0">
                  <Store className="w-6 h-6" />
              </div>
              <div className={`transition-all duration-300 ${isSidebarExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 hidden'}`}>
                  <h1 className="text-xl font-black text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors whitespace-nowrap">Golden</h1>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none mt-1 whitespace-nowrap">Associate</p>
              </div>
           </a>

           {isSidebarExpanded && (
               <button
                    onClick={() => setIsSidebarExpanded(false)}
                    className="hidden md:flex p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
               >
                   <ChevronLeft className="w-5 h-5" />
               </button>
           )}

           <button className="md:hidden text-slate-500 hover:text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>
             <X className="w-6 h-6" />
           </button>
        </div>

        {!isSidebarExpanded && (
            <div className="hidden md:flex justify-center py-2 border-b border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors" onClick={() => setIsSidebarExpanded(true)}>
                <button className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg transition-all">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden py-6 space-y-8 custom-scrollbar relative z-10">
          {navSections.map((section, idx) => (
            <div key={idx} className="px-3">
              {isSidebarExpanded && (
                  <h3 className="px-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 select-none whitespace-nowrap">
                    {section.title}
                  </h3>
              )}
              <div className="space-y-1">
                {section.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    title={item.label}
                    className={({ isActive }) => `is-nav-link flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                      isActive
                        ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] font-bold active-link'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium inactive-link'
                    } ${!isSidebarExpanded ? 'justify-center' : ''}`}
                  >
                    <div className="nav-highlighter absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full transition-opacity opacity-0" />
                    <item.icon className="w-5 h-5 shrink-0 relative z-10" />
                    <span className={`text-sm transition-all duration-300 whitespace-nowrap relative z-10 ${isSidebarExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 hidden'}`}>
                        {item.label}
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* User Footer */}
        <div className={`p-4 border-t border-slate-200 bg-slate-50 transition-all duration-300 relative z-10 ${!isSidebarExpanded ? 'justify-center flex' : ''}`}>
          <div className={`flex items-center gap-3 px-2 py-2 rounded-xl transition-all group ${!isSidebarExpanded ? 'justify-center w-full' : ''}`}>
            <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-500/40 flex items-center justify-center text-blue-600 font-bold text-sm shadow-inner group-hover:bg-blue-100 transition-colors shrink-0">
              {user?.username?.[0]?.toUpperCase() || 'A'}
            </div>

            <div className={`flex-1 min-w-0 transition-opacity duration-300 ${isSidebarExpanded ? 'opacity-100' : 'opacity-0 hidden'}`}>
              <p className="text-sm font-bold text-slate-900 truncate">{user?.username || 'Admin User'}</p>
              <p className="text-xs text-slate-500 truncate font-medium">Administrator</p>
            </div>

            {isSidebarExpanded && (
                <button
                onClick={logout}
                className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                title="Logout"
                >
                <LogOut size={18} />
                </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 h-screen flex flex-col overflow-hidden relative z-10">
        {/* Header */}
        <header className="h-20 bg-white/90 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-30 px-6 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="relative group flex items-center">
              <Search className="w-4 h-4 text-slate-500 absolute left-4 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-11 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-500 focus:bg-slate-100 focus:border-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all w-48 md:w-64 lg:w-80 shadow-sm"
              />
            </div>

            <button className="relative p-2.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 rounded-xl transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border border-[#0f172a]"></span>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto custom-scrollbar scroll-smooth">
          <div className="w-full h-full animate-in fade-in duration-500">
             {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;

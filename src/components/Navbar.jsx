import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Compass,
  ChefHat,
  Tag,
  ShieldCheck,
  ShoppingCart,
  UserCircle2,
  Search,
  ChevronDown,
  LogOut,
  PhoneCall,
  LayoutDashboard
} from 'lucide-react';

import logo from '../assets/image.png';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef();

  const { user, logout } = useAuth();
  const { itemsCount } = useCart();

  // close dropdown outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: 'Home', to: '/', icon: Home },
    { label: 'Explore', to: '/explore', icon: Compass },
    { label: 'Deals', to: '/deals', icon: Tag },
    { label: 'Smart Kitchen', to: '/services', icon: ChefHat },
    { label: 'About', to: '/about', icon: ShieldCheck },
    { label: 'Contact', to: '/reach-us', icon: PhoneCall },
  ];

  const linkClass = ({ isActive }) =>
    `inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
      isActive
        ? 'bg-blue-600 text-white shadow-sm'
        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
    }`;

  const AccountDropdown = ({ mobile = false }) => (
    <div
      className={`${
        mobile ? 'w-full mt-2' : 'absolute right-0 mt-2 w-48'
      } bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden animate-fade-in z-110`}
    >
      <div className="p-1 space-y-0.5">
        {user ? (
          <>
            <div className="px-4 py-3 border-b border-slate-50 mb-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Signed in as</p>
              <p className="text-xs font-bold text-slate-900 truncate">{user.username}</p>
              {user.role === 'admin' && (
                <span className="mt-1 inline-block bg-blue-50 text-blue-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter">Administrator</span>
              )}
            </div>
            {user.role === 'admin' && (
              <NavLink
                to="/admin/dashboard"
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition"
                onClick={() => {
                  setOpenDropdown(false);
                  setIsOpen(false);
                }}
              >
                <LayoutDashboard size={14} /> Admin Panel
              </NavLink>
            )}
            <button
              onClick={() => {
                logout();
                setOpenDropdown(false);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-rose-600 hover:bg-rose-50 rounded-lg transition"
            >
              <LogOut size={14} /> Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-lg transition"
              onClick={() => {
                setOpenDropdown(false);
                setIsOpen(false);
              }}
            >
              Log In
            </NavLink>
            <NavLink
              to="/signup"
              className="flex items-center justify-center px-4 py-2 text-xs font-black text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition mx-1"
              onClick={() => {
                setOpenDropdown(false);
                setIsOpen(false);
              }}
            >
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-110 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="ga-container h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Golden Associate" className="h-8 w-auto" />
          <span className="text-sm font-black tracking-tighter text-slate-900 hidden sm:block">
            GOLDEN<span className="text-blue-600">ASSOCIATE</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClass}>
              <item.icon size={14} /> {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <NavLink
            to="/cart"
            className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition relative"
          >
            <ShoppingCart size={18} />
            {itemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                {itemsCount}
              </span>
            )}
          </NavLink>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center gap-2 p-1 pl-2 border border-slate-200 rounded-full hover:border-blue-200 transition bg-slate-50"
            >
              <UserCircle2 size={24} className="text-slate-400" />
              <ChevronDown
                size={14}
                className={`text-slate-400 transition-transform ${
                  openDropdown ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openDropdown && <AccountDropdown />}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 animate-fade-in divide-y divide-slate-50">
          <div className="p-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={18} /> {item.label}
              </NavLink>
            ))}
          </div>

          <div className="p-4 space-y-4">
            <NavLink
              to="/cart"
              className="flex items-center justify-between p-3 bg-slate-50 rounded-xl text-sm font-bold text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-3">
                <ShoppingCart size={18} className="text-blue-600" />
                Your Cart
              </div>
              {itemsCount > 0 && (
                <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                  {itemsCount}
                </span>
              )}
            </NavLink>

            <AccountDropdown mobile={true} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

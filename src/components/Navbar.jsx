"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
  ChevronDown,
  LogOut,
  PhoneCall,
  LayoutDashboard,
  Grid
} from 'lucide-react';

import logo from '../assets/image.png';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef();
  const pathname = usePathname();

  const { user, logout } = useAuth();
  const { itemsCount } = useCart();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Block scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  const navItems = [
    { label: 'Home', to: '/', icon: Home },
    { label: 'Explore', to: '/explore', icon: Compass },
    { label: 'Deals', to: '/deals', icon: Tag },
    { label: 'Smart Kitchen', to: '/services', icon: ChefHat },
    { label: 'About', to: '/about', icon: ShieldCheck },
    { label: 'Contact', to: '/reach-us', icon: PhoneCall },
  ];

  const linkClass = (path) => {
    const isActive = pathname === path;
    return `relative inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-black uppercase tracking-widest transition-all ${
      isActive ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
    } group overflow-hidden`;
  };

  const AccountDropdown = ({ mobile = false }) => (
    <div
      className={`${
        mobile ? 'w-full mt-2 bg-slate-50 border-none' : 'absolute right-0 mt-3 w-56 bg-white border border-slate-100 shadow-2xl shadow-slate-900/5'
      } rounded-xl overflow-hidden animate-fade-in z-[110]`}
    >
      <div className="p-1 space-y-0.5">
        {user ? (
          <>
            <div className="px-4 py-4 border-b border-slate-100 mb-1 bg-slate-50/50">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Signed in as</p>
              <p className="text-sm font-black text-slate-900 truncate tracking-tight">{user.username}</p>
              {user.role === 'admin' && (
                <span className="mt-2 inline-block bg-blue-100 text-blue-700 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest shadow-sm">Administrator</span>
              )}
            </div>
            {user.role === 'admin' && (
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-3 px-4 py-3 text-[11px] uppercase tracking-widest font-black text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors mx-1 mt-1"
                onClick={() => {
                  setOpenDropdown(false);
                  setIsOpen(false);
                }}
              >
                <LayoutDashboard size={14} /> Admin Panel
              </Link>
            )}
            <button
              onClick={() => {
                logout();
                setOpenDropdown(false);
                setIsOpen(false);
              }}
              className="w-[calc(100%-8px)] flex items-center gap-3 px-4 py-3 text-[11px] uppercase tracking-widest font-black text-slate-500 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors mx-1 mb-1"
            >
              <LogOut size={14} /> Log Out
            </button>
          </>
        ) : (
          <div className="p-2 space-y-2">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-[11px] uppercase tracking-widest font-black text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors border border-slate-200"
              onClick={() => {
                setOpenDropdown(false);
                setIsOpen(false);
              }}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-[11px] uppercase tracking-widest font-black text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              onClick={() => {
                setOpenDropdown(false);
                setIsOpen(false);
              }}
            >
              Create Account
            </Link>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm transition-all h-20 flex items-center">
      <div className="ga-container w-full flex items-center justify-between gap-6">
        
        {/* Left Section: Apps Launcher & Logo */}
        <div className="flex items-center gap-6">
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 -ml-2 text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
          >
            <Menu size={24} />
          </button>

          <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-blue-600 hover:bg-blue-50 cursor-pointer transition-colors shadow-sm">
            <Grid size={18} />
          </div>

          <Link href="/" className="flex items-center gap-3 shrink-0 relative group">
            <div className="relative w-9 h-9 overflow-hidden bg-slate-50 rounded-lg flex items-center justify-center p-1 border border-slate-100 shadow-sm transition-transform group-hover:scale-105">
              <Image src={logo} alt="Golden Associate" width={32} height={32} className="object-contain" />
            </div>
            <span className="text-[14px] font-black tracking-tight text-slate-900 hidden sm:block">
              GOLDEN<span className="text-blue-600">ASSOCIATE</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Nav with Zoho-style underline animation */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link key={item.label} href={item.to} className={linkClass(item.to)}>
                {item.label}
                {/* Zoho Animated Border */}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform origin-left transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            )
          })}
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          <Link
            href="/cart"
            className="p-2 text-slate-500 hover:text-blue-600 transition-colors relative flex items-center gap-2"
          >
            <ShoppingCart size={20} />
            {itemsCount > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-rose-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white shadow-sm">
                {itemsCount}
              </span>
            )}
            <span className="hidden xl:block text-[11px] font-black uppercase tracking-widest">Cart</span>
          </Link>

          <div className="w-px h-6 bg-slate-200 hidden md:block"></div>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center gap-3 pl-2 pr-4 py-1.5 border border-slate-200 rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all bg-white shadow-sm"
            >
              <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <UserCircle2 size={18} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-700 hidden md:block">
                {user ? user.username.split(" ")[0] : "Account"}
              </span>
              <ChevronDown
                size={14}
                className={`text-slate-400 transition-transform hidden md:block ${
                  openDropdown ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openDropdown && <AccountDropdown />}
          </div>
        </div>
      </div>

      {/* Simple Full-width Mobile Dropdown */}
      {isOpen && (
        <>
          <div 
            className="lg:hidden fixed inset-0 top-20 bg-slate-900/20 backdrop-blur-sm z-[90] animate-fade-in" 
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-2xl z-[100] animate-fade-in origin-top">
            <div className="ga-container py-4 flex flex-col max-h-[calc(100vh-5rem)] overflow-y-auto">
              <div className="py-2 space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.to;
                  return (
                    <Link
                      key={item.label}
                      href={item.to}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl text-[13px] font-black uppercase tracking-widest transition-all ${
                        isActive
                          ? 'bg-blue-50/50 text-blue-600'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon size={18} className={isActive ? "text-blue-600" : "text-slate-400"} /> 
                      {item.label}
                    </Link>
                  )
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100">
                <Link
                  href="/cart"
                  className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 rounded-xl transition-colors mb-2 group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-4 text-[13px] font-black uppercase tracking-widest text-slate-700 group-hover:text-blue-600 transition-colors">
                    <ShoppingCart size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                    Your Cart
                  </div>
                  {itemsCount > 0 && (
                    <span className="bg-blue-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm">
                      {itemsCount}
                    </span>
                  )}
                </Link>
              </div>

              <div className="px-4 py-4 mt-2 bg-slate-50 rounded-2xl border border-slate-100">
                {user ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm border border-slate-100">
                        <UserCircle2 size={20} />
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Signed in as</p>
                        <p className="text-sm font-black text-slate-900 tracking-tight">{user.username}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                       {user.role === 'admin' && (
                        <Link
                          href="/admin/dashboard"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-200 shadow-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          <LayoutDashboard size={14} /> Admin
                        </Link>
                      )}
                      <button
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                        }}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white text-rose-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-200 shadow-sm"
                      >
                        <LogOut size={14} /> Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <Link
                      href="/login"
                      className="flex-1 text-center py-3 bg-white text-slate-700 rounded-xl text-[11px] font-black uppercase tracking-widest border border-slate-200 shadow-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      Log In
                    </Link>
                    <Link
                      href="/signup"
                      className="flex-1 text-center py-3 bg-blue-600 text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;

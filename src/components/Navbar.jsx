import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/image.png';
import {
  ChevronRight,
  Menu,
  LayoutGrid,
  HomeIcon,
  PhoneCallIcon,
  Shield,
  ShoppingBag,
  UserCircle2,
  ShoppingCart,
  Wrench,
  X,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { itemsCount } = useCart();
  const { user } = useAuth();

  const navItems = [
    { to: '/', label: 'Home', icon: HomeIcon },
    { to: '/shop', label: 'Shop', icon: ShoppingBag },
    { to: '/services', label: 'Services', icon: Wrench },
    { to: '/gallery', label: 'Gallery', icon: LayoutGrid },
    { to: '/reach-us', label: 'Reach Us', icon: PhoneCallIcon },
  ];

  const linkClass = ({ isActive }) =>
    `inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.45)]'
        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
    }`;

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="ga-container flex h-20 items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Golden Associate logo"
              className="h-11 w-11 rounded-xl border border-slate-300 bg-slate-50 p-1"
            />
            <div>
              <p className="ga-text-gradient text-lg font-extrabold tracking-tight">
                Golden Associate
              </p>
              <p className="text-xs font-medium text-slate-500">
                Smart appliance solutions
              </p>
            </div>
          </div>

          <ul className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.to}>
                  <NavLink to={item.to} className={linkClass}>
                    <Icon size={16} />
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <ul className="hidden items-center gap-2 lg:flex">
            {user ? (
              <>
                {user?.role === 'admin' ? (
                  <li>
                    <NavLink
                      to="/admin-dashboard"
                      className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100"
                    >
                      <Shield size={18} />
                      Admin Panel
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink
                      to="/profile"
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    >
                      <UserCircle2 size={18} />
                      My Profile
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink
                    to="/cart"
                    className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-amber-500 to-orange-500 px-3 py-2 text-sm font-semibold text-white hover:from-amber-400 hover:to-orange-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] transition"
                  >
                    <ShoppingCart size={18} />
                    Cart
                    <span className="rounded-full bg-slate-200 px-2 py-1 text-xs">
                      {itemsCount}
                    </span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    className="rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] transition hover:brightness-110"
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cart"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
                  >
                    <ShoppingCart size={18} />
                    Cart
                    <span className="rounded-full bg-slate-200 px-2 py-1 text-xs text-slate-900">
                      {itemsCount}
                    </span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex rounded-lg border border-slate-200 p-2 text-slate-600 hover:text-slate-900 lg:hidden"
            type="button"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="ga-container ga-fade-up pb-3 lg:hidden">
          <div className="ga-panel mt-2 p-3">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={linkClass}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon size={16} />
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
              {user?.role === 'admin' ? (
                <li>
                  <NavLink
                    to="/admin-dashboard"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin Panel
                    <ChevronRight size={16} />
                  </NavLink>
                </li>
              ) : user ? (
                <li>
                  <NavLink
                    to="/profile"
                    className="inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <UserCircle2 size={18} />
                    My Profile
                  </NavLink>
                </li>
              ) : null}
              <li className="grid grid-cols-2 gap-2 pt-2">
                {!user && (
                  <>
                    <NavLink
                      to="/login"
                      className="rounded-lg border border-slate-200 px-3 py-2 text-center text-sm font-semibold text-slate-600 hover:text-slate-900"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className="rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </NavLink>
                  </>
                )}
                <NavLink
                  to="/cart"
                  className="col-span-2 rounded-lg bg-linear-to-r from-amber-500 to-orange-500 px-3 py-2 text-center text-sm font-semibold text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Cart ({itemsCount})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50/80 backdrop-blur-md py-10 relative z-10">
      <div className="ga-container grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="ga-text-gradient text-lg font-extrabold tracking-tight">
            Golden Associate
          </h3>
          <p className="mt-2 max-w-sm text-sm text-slate-500">
            Premium kitchen and home utility solutions with dependable
            installation and support.
          </p>
          <span className="ga-chip mt-4 inline-flex px-3 py-1 text-xs font-semibold">
            Trusted by 2,000+ homes
          </span>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-slate-600">
            Quick Links
          </h4>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            {[
              { to: '/', label: 'Home' },
              { to: '/shop', label: 'Shop' },
              { to: '/services', label: 'Services' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/reach-us', label: 'Reach Us' },
            ].map((link) => (
              <NavLink
                key={link.to}
                className="rounded-md px-2 py-1 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
                to={link.to}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-slate-600">
            Policies
          </h4>
          <div className="mt-3 space-y-2 text-sm text-slate-500">
            <p>
              <NavLink className="transition hover:text-blue-600" to="/privacy-policy">
                Privacy Policy
              </NavLink>
            </p>
            <p>
              <NavLink className="transition hover:text-blue-600" to="/refund-policy">
                Refund Policy
              </NavLink>
            </p>
            <p>
              <NavLink className="transition hover:text-blue-600" to="/terms-conditions">
                Terms & Conditions
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      <div className="ga-container mt-8 border-t border-slate-200 pt-4 text-xs text-slate-500">
        © 2026 Golden Associate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

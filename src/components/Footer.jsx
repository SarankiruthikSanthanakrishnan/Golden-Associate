import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  // Facebook,
  // Instagram,
  // Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-400">
      <div className="ga-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <NavLink
              to="/"
              className="text-xl font-black text-white hover:text-blue-400 transition-colors"
            >
              Golden Associate<span className="text-blue-500">.</span>
            </NavLink>
            <p className="text-xs font-medium leading-relaxed">
              Top player in kitchen appliances since 2010. Customer satisfaction
              is as important as our premium products.
            </p>
            {/* <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all"><Instagram size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all"><Twitter size={16} /></a>
            </div> */}
          </div>

          {/* Contact Details - Region Wise */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-widest uppercase">
                Contact Us
              </h4>
              <ul className="space-y-3 text-xs">
                <li className="flex gap-3">
                  <MapPin size={14} className="text-blue-500 shrink-0" />
                  <span>
                    52, 18th cross, 15th main, Kurubharahalli, JC Nagar,
                    Bangalore.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail size={14} className="text-blue-500 shrink-0" />
                  <a
                    href="mailto:karthiprakashwin@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    karthiprakashwin@gmail.com
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone size={14} className="text-blue-500 shrink-0" />
                  <a
                    href="tel:+919986683173"
                    className="hover:text-white transition-colors"
                  >
                    +91 99866 83173
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-widest uppercase">
                Regional Support
              </h4>
              <div className="space-y-3 text-[11px]">
                <p>
                  <span className="text-white font-bold">Karnataka:</span>{' '}
                  9361122349, 9663584500, 9986457992
                </p>
                <p>
                  <span className="text-white font-bold">Tamilnadu:</span>{' '}
                  8667632377, 9986683173, 9361122349, 8428993366
                </p>
                <p>
                  <span className="text-white font-bold">AP & Telangana:</span>{' '}
                  8778023083, 9361122349
                </p>
              </div>
            </div>
          </div>

          {/* Links & Working Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase">
              Working Hours
            </h4>
            <div className="flex items-center gap-3 text-xs bg-white/5 p-3 rounded-xl">
              <Clock size={16} className="text-blue-500" />
              <div>
                <p className="text-white font-bold">Mon - Sun</p>
                <p className="text-[10px]">09:02 AM - 05:02 PM</p>
              </div>
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-[10px] font-bold uppercase tracking-widest">
              <NavLink to="/privacy" className="hover:text-white">
                Privacy
              </NavLink>
              <NavLink to="/terms" className="hover:text-white">
                Terms
              </NavLink>
              <NavLink to="/refund" className="hover:text-white">
                Refund
              </NavLink>
              <NavLink to="/reach-us" className="hover:text-white">
                Contact
              </NavLink>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© {currentYear} Golden Associate. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            Designed by <span className="text-white">TeknoSpot</span>
            <ExternalLink size={10} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Send,
  ShieldCheck,
  Award
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 selection:bg-blue-500/30">

      <div className="ga-container pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 flex flex-col">
            <Link
              href="/"
              className="text-2xl font-black text-white hover:text-blue-400 transition-colors tracking-tight mb-4 inline-block"
            >
              Golden Associate<span className="text-blue-500">.</span>
            </Link>
            <p className="text-xs font-medium leading-relaxed mb-6 pr-4">
              Pioneering top-tier kitchen appliances since 2010. We empower modern homes and retail networks with premium quality products backed by unparalleled customer satisfaction.
            </p>
            <div className="flex gap-4 mt-auto">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20"><ShieldCheck size={14} /></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20"><Award size={14} /></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Certified</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 lg:col-start-6 space-y-6">
            <h4 className="text-white font-black text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Contact Details
            </h4>
            <ul className="space-y-4 text-xs font-medium">
              <li className="flex gap-4 group">
                <MapPin size={16} className="text-slate-600 group-hover:text-blue-400 transition-colors shrink-0 mt-0.5" />
                <span className="leading-relaxed group-hover:text-slate-300 transition-colors">
                  52, 18th cross, 15th main,<br /> Kurubharahalli, JC Nagar,<br /> Bangalore - 560086
                </span>
              </li>
              <li className="flex gap-4 group">
                <Mail size={16} className="text-slate-600 group-hover:text-blue-400 transition-colors shrink-0 mt-0.5" />
                <a
                  href="mailto:karthiprakashwin@gmail.com"
                  className="group-hover:text-white transition-colors"
                >
                  karthiprakashwin@gmail.com
                </a>
              </li>
              <li className="flex gap-4 group">
                <Phone size={16} className="text-slate-600 group-hover:text-blue-400 transition-colors shrink-0 mt-0.5" />
                <a
                  href="tel:+919986683173"
                  className="font-bold group-hover:text-white transition-colors"
                >
                  +91 99866 83173
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Support */}
          <div className="lg:col-span-3 lg:col-start-10 space-y-6">
            <h4 className="text-white font-black text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Regional Support
            </h4>
            <div className="space-y-5">
              <div className="group cursor-default">
                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5 group-hover:text-blue-400 transition-colors">Karnataka</h5>
                <p className="text-xs font-bold font-mono text-slate-300">9361122349, 9663584500<br />9986457992</p>
              </div>
              <div className="group cursor-default">
                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5 group-hover:text-blue-400 transition-colors">Tamilnadu</h5>
                <p className="text-xs font-bold font-mono text-slate-300">8667632377, 9986683173<br />8428993366</p>
              </div>
              <div className="group cursor-default">
                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5 group-hover:text-blue-400 transition-colors">AP & Telangana</h5>
                <p className="text-xs font-bold font-mono text-slate-300">8778023083, 9361122349</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-[9px] sm:text-[10px] font-black uppercase tracking-widest flex-wrap justify-center">
            <Link href="/privacy" className="hover:text-white transition-colors hover:translate-x-0.5 transform inline-block">Privacy Info</Link>
            <span className="w-1 h-1 bg-white/20 rounded-full hidden sm:block"></span>
            <Link href="/terms" className="hover:text-white transition-colors hover:translate-x-0.5 transform inline-block">Terms & Conditions</Link>
            <span className="w-1 h-1 bg-white/20 rounded-full hidden sm:block"></span>
            <Link href="/refund" className="hover:text-white transition-colors hover:translate-x-0.5 transform inline-block">Refunds</Link>
            <span className="w-1 h-1 bg-white/20 rounded-full hidden sm:block"></span>
            <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded text-slate-400">
              <Clock size={10} className="text-blue-400" /> 09:00 AM - 06:00 PM
            </div>
          </div>

          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest">
            <p className="text-slate-500">© {currentYear} Golden Associate</p>
            <p className="flex items-center gap-2 group whitespace-nowrap">
              Built by <span className="text-white group-hover:text-blue-400 transition-colors cursor-pointer">Dream2Way Solutions</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

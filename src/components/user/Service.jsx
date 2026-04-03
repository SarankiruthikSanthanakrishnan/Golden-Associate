"use client";
import React from 'react';
import {
  Wrench,
  Settings,
  ShieldCheck,
  Zap,
  Smartphone,
  Clock,
  CheckCircle2,
  PhoneCall,
} from 'lucide-react';
import { servicesData } from '../../data/data';
import Link from 'next/link';

const Service = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* --- CONDENSED HERO --- */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="ga-container grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="ga-chip mb-4 inline-flex items-center gap-2 px-3 py-1 text-blue-600 bg-blue-50">
              <Wrench size={12} /> EXPERT APPLIANCE CARE
            </span>
            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">
              Smart Kitchen <span className="ga-text-gradient">Solutions</span>
            </h1>
            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-lg">
              Beyond sales, we provide end-to-end support for your smart
              kitchen. From installation to multi-point maintenance, our
              Bangalore-based experts ensure your home runs smoothly.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: CheckCircle2, label: 'Standard Installation' },
              { icon: CheckCircle2, label: 'Annual Maintenance' },
              { icon: CheckCircle2, label: 'Smart Integration' },
              { icon: CheckCircle2, label: 'Repair & Spares' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-[10px] font-black text-slate-400 bg-white border border-slate-100 p-3 rounded-lg shadow-sm"
              >
                <item.icon size={14} className="text-blue-500" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-12 ga-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="ga-card p-6 bg-white flex flex-col group"
            >
              <div className="w-10 h-10 bg-slate-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Settings size={20} />
              </div>
              <h3 className="text-sm font-black text-slate-900 mb-3 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6 h-12 line-clamp-3">
                {service.description}
              </p>
              <div className="mt-auto space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 p-2 rounded">
                  <Clock size={12} /> TAT: 24-48 Hours
                </div>
                <button className="ga-button-secondary w-full py-2.5 text-[10px] font-black tracking-widest uppercase gap-2 hover:bg-slate-100 transition-all">
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONSULTATION STRIP --- */}
      <section className="ga-container mt-12">
        <div className="bg-slate-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between text-white border border-white/5 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-0">
            <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center border border-white/10">
              <PhoneCall size={28} className="text-blue-500" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-black uppercase tracking-tight">
                Need a Custom Quote?
              </h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                Direct support for Bangalore & Tamilnadu regions
              </p>
            </div>
          </div>
          <Link
            href="/reach-us"
            className="ga-button-primary scale-110 shadow-lg shadow-blue-500/20 px-8 py-3.5 text-xs font-black uppercase tracking-[0.2em]"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Service;

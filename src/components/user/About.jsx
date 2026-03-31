import React from 'react';
import {
  Target,
  MapPin,
  Phone,
  Mail,
  Heart,
  History,
  Store,
  Award,
} from 'lucide-react';
import { workData } from '../../data/data';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- CONDENSED HERO --- */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="ga-container grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="ga-chip mb-4 inline-flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1">
              <History size={14} /> ESTABLISHED 2010 IN BANGALORE
            </span>
            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight">
              A Legacy of{' '}
              <span className="ga-text-gradient">Quality Appliances</span> in
              Bangalore
            </h1>
            <p className="text-sm font-medium text-slate-600 leading-relaxed mb-6">
              Golden Associate established in 2010 Bangalore. We are a top
              player in the kitchen appliances dealers in Bangalore. This
              business has established a firm foothold in its industry.
            </p>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-3">
                Our Core Specialties
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Multimaker Juicer',
                  'Nutribullet',
                  'Massager',
                  'Handheld Blender',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-md border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1556912177-f547c126e89a?auto=format&fit=crop&q=80&w=800"
              alt="Golden Associate Office"
              className="rounded-2xl shadow-lg border border-slate-200 w-full aspect-video object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-xl hidden md:block">
              <p className="text-2xl font-black leading-none">14+</p>
              <p className="text-[9px] font-bold uppercase tracking-widest">
                Years Expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BUSINESS CORE --- */}
      <section className="py-16 ga-container">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6">
              <Target size={20} />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-3">
              Our Mission
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              We operate on the belief that customer satisfaction is as
              important as the product itself. We strive to provide the highest
              quality kitchen tools for every household.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6">
              <Store size={20} />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-3">
              Firm Foothold
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Through consistent quality and support, we have established a
              dominant position in the Bangalore appliance market, serving
              thousands of families.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6">
              <Heart size={20} />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-3">
              Core Values
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Integrity, service, and product excellence are the pillars that
              keep Golden Associate at the top of the industry.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONDENSED GALLERY --- */}
      <section className="py-16 bg-slate-950 text-white overflow-hidden">
        <div className="ga-container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                Our Portfolio
              </p>
              <h2 className="text-2xl lg:text-3xl font-black">
                Installation Gallery
              </h2>
            </div>
            <NavLink
              to="/explore"
              className="text-xs font-bold text-slate-400 hover:text-white transition-colors border-b border-white/20 pb-1"
            >
              View Products
            </NavLink>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {workData.slice(0, 8).map((work) => (
              <div
                key={work.id}
                className="aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
              >
                <img
                  src={work.image}
                  alt="Work"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT STRIP --- */}
      <section className="py-16 ga-container">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">
              Need Direct Support?
            </h2>
            <p className="text-xs font-medium text-slate-500 max-w-sm">
              Our experts are available to help you choose the right appliance
              for your home.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Phone size={14} />
              </div>
              <span className="text-xs font-bold text-slate-900">
                +91 99866 83173
              </span>
            </div>
            <NavLink to="/reach-us" className="ga-button-primary scale-90">
              Get In Touch
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

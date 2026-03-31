import React from 'react';
import { Clock3, Mail, MapPin, PhoneCall } from 'lucide-react';
import {
  companyProfile,
  officeBranches,
  supportSlots,
} from '../../data/companyInfo';

const Reachus = () => {
  return (
    <div className="ga-container pb-12 pt-10">
      <section className="ga-panel relative ga-fade-up p-7 md:p-10 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl z-0" />
        <div className="relative z-10">
          <span className="ga-chip inline-flex px-3 py-1 text-xs font-bold uppercase tracking-wide">
            Contact Center
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl ga-text-gradient">
            Reach our team for product help, orders, or service scheduling.
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
            {companyProfile.summary}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-4 hover:border-blue-200 transition duration-300">
              <PhoneCall className="text-blue-600" size={18} />
              <p className="mt-2 text-xs text-slate-500">Helpline</p>
              <p className="text-sm font-bold text-slate-900">
                {companyProfile.primaryPhone}
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-4 hover:border-cyan-200 transition duration-300">
              <Mail className="text-cyan-600" size={18} />
              <p className="mt-2 text-xs text-slate-500">Email</p>
              <p className="text-sm font-bold text-slate-900">
                {companyProfile.primaryEmail}
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-4 hover:border-sky-200 transition duration-300">
              <Clock3 className="text-sky-600" size={18} />
              <p className="mt-2 text-xs text-slate-500">Working Hours</p>
              <p className="text-sm font-bold text-slate-900">
                09:02 AM - 05:02 PM
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4 ga-fade-up">
          {officeBranches.map((branch) => (
            <article key={branch.city} className="ga-panel border-slate-200 bg-white backdrop-blur-sm p-5 hover:border-blue-200 transition">
              <h2 className="text-lg font-extrabold text-slate-900">
                {branch.city}
              </h2>
              <p className="mt-3 flex items-start gap-2 text-sm text-slate-600">
                <MapPin className="mt-0.5 text-blue-600" size={16} />
                {branch.address}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                <PhoneCall className="text-blue-600" size={15} />
                {branch.phone}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                <Mail className="text-blue-600" size={15} />
                {branch.email}
              </p>
              {branch.regionContacts && (
                <ul className="mt-3 space-y-1 text-xs text-slate-500 pl-6 border-l border-slate-200">
                  {branch.regionContacts.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <article className="ga-panel border-slate-200 bg-white backdrop-blur-sm p-5 hover:border-cyan-200 transition">
            <h3 className="text-base font-bold text-slate-900">
              Support Timings
            </h3>
            <ul className="mt-4 space-y-2">
              {supportSlots.map((slot) => (
                <li
                  key={slot.day}
                  className="flex items-center justify-between rounded-lg bg-slate-50 border border-slate-100 px-4 py-2 text-sm hover:bg-slate-100 transition"
                >
                  <span className="font-semibold text-slate-700">
                    {slot.day}
                  </span>
                  <span className="text-blue-700">{slot.time}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="ga-panel ga-fade-up p-6 border-slate-200 bg-white/90 backdrop-blur-md relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-600/10 blur-3xl z-0 pointer-events-none" />
          <h3 className="text-lg font-extrabold text-slate-900 relative z-10 ga-text-gradient">
            Quick Enquiry
          </h3>
          <p className="mt-2 text-sm text-slate-600 relative z-10">
            Share your requirement. Our team will call you back shortly.
          </p>

          <form className="mt-6 space-y-4 relative z-10">
            <input
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none focus:border-blue-500 focus:bg-slate-100 transition"
              placeholder="Full Name"
              type="text"
            />
            <input
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none focus:border-blue-500 focus:bg-slate-100 transition"
              placeholder="Phone Number"
              type="text"
            />
            <input
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none focus:border-blue-500 focus:bg-slate-100 transition"
              placeholder="Email Address"
              type="email"
            />
            <textarea
              className="min-h-32 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none focus:border-blue-500 focus:bg-slate-100 transition custom-scrollbar"
              placeholder="Tell us what you need"
            />
            <button
              className="w-full rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 px-4 py-3 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition duration-300"
              type="button"
            >
              Submit Enquiry
            </button>
          </form>
        </article>
      </section>
    </div>
  );
};

export default Reachus;

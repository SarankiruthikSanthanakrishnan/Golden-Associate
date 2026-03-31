import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleAlert, UserRound } from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate();
  const [form] = useState({ name: '', phone: '', email: '' });

  return (
    <div className="ga-container pb-12 pt-10">
      <section className="mx-auto max-w-3xl ga-panel ga-fade-up p-7 md:p-10 border-slate-200 bg-white/90 backdrop-blur-md relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl z-0" />
        <div className="relative z-10">
          <div className="inline-flex rounded-full border border-blue-200 bg-blue-100 p-3 text-blue-600">
            <UserRound size={20} />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-4xl ga-text-gradient">
            Create Your Account
          </h1>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Register your details to receive order updates and service support.
          </p>

          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none focus:border-blue-500 focus:bg-slate-100 transition duration-300"
              placeholder="Full Name"
              defaultValue={form.name}
              type="text"
            />
            <input
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none focus:border-blue-500 focus:bg-slate-100 transition duration-300"
              placeholder="Phone Number"
              defaultValue={form.phone}
              type="text"
            />
            <input
              className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none focus:border-blue-500 focus:bg-slate-100 transition duration-300"
              placeholder="Email Address"
              defaultValue={form.email}
              type="email"
            />
            <input
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none focus:border-blue-500 focus:bg-slate-100 transition duration-300"
              placeholder="Create Password"
              type="password"
            />
            <input
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none focus:border-blue-500 focus:bg-slate-100 transition duration-300"
              placeholder="Confirm Password"
              type="password"
            />

            <div className="md:col-span-2 mt-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-600">
              <span className="inline-flex items-center gap-2 font-bold">
                <CircleAlert size={16} />
                Demo Mode
              </span>
              <p className="mt-1.5 text-amber-200/80">
                Signup UI is ready. Backend registration can be connected later.
              </p>
            </div>

            <button
              className="mt-2 md:col-span-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 py-3.5 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition duration-300"
              type="button"
            >
              Create Account
            </button>
            <button
              className="md:col-span-2 rounded-xl border border-slate-300 bg-slate-50 py-3.5 text-sm font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition duration-300"
              onClick={() => navigate('/login')}
              type="button"
            >
              Back to Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;

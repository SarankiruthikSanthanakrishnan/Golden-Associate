import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { login, error, setError } = useAuth();
  const navigate = useNavigate();
  const [localError, setLocalError] = useState(null);
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setLocalError(null);
    setError(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.username || !form.password) {
      setLocalError('Please fill all fields');
      return;
    }

    const result = login(form);
    if (!result.success) {
      setLocalError(result.error);
    }
  };

  return (
    <div className="ga-container pb-12 pt-10">
      <section className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
        <article className="ga-panel ga-fade-up p-7 md:p-9 border-slate-200 bg-white/90 backdrop-blur-md relative overflow-hidden">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl z-0" />
          <div className="relative z-10">
            <span className="ga-chip inline-flex px-3 py-1 text-xs font-bold uppercase tracking-wide">
              Welcome Back
            </span>
            <h1 className="mt-4 text-3xl font-extrabold text-slate-900">
              Login to manage your orders and account.
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Use your credentials to access profile details and checkout history.
            </p>
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Admin demo login:</p>
              <p className="mt-1 text-blue-700">admin@goldenassociate.com</p>
              <p className="text-blue-700">golden@2026</p>
            </div>
          </div>
        </article>

        <article className="ga-panel ga-fade-up p-7 md:p-9 border-slate-200 bg-white/90 backdrop-blur-md relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-600/20 blur-3xl z-0" />
          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold text-slate-900 ga-text-gradient">Sign In</h2>

            {(localError || error) && (
              <div className="mt-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
                {localError || error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-blue-500 focus-within:bg-slate-100 transition duration-300">
                <Mail size={18} className="text-blue-600" />
                <input
                  type="text"
                  name="username"
                  placeholder="Email"
                  value={form.username}
                  onChange={handleChange}
                  className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-500 outline-none"
                />
              </label>

              <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-blue-500 focus-within:bg-slate-100 transition duration-300">
                <Lock size={18} className="text-blue-600" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-500 outline-none"
                />
              </label>

              <button
                className="mt-2 w-full rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 py-3.5 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition duration-300"
                type="submit"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 py-3.5 text-sm font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition duration-300"
                type="button"
              >
                Create New Account
              </button>
            </form>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Login;

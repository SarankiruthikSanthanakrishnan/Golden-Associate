import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const result = login({ username: email, password });
    if (result.success) {
      toast.success('Logged in successfully!');
      navigate('/');
    } else {
      toast.error(result.error || 'Invalid credentials');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full animate-fade-in">
        <div className="text-center mb-8">
          <NavLink
            to="/"
            className="text-2xl font-black text-slate-900 mb-4 inline-block"
          >
            Golden Associate<span className="text-blue-500">.</span>
          </NavLink>
          <h1 className="text-xl font-bold text-slate-900 uppercase tracking-widest">
            Welcome Back
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Please enter your details to sign in.
          </p>
        </div>

        <div className="ga-card p-8 bg-white">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={16}
                />
                <input
                  type="email"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-10 text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Password
                </label>
                <a
                  href="#"
                  className="text-[10px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-tight"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={16}
                />
                <input
                  type="password"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-10 text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="ga-button-primary w-full py-4 uppercase tracking-[0.2em] gap-2 shadow-lg shadow-blue-500/20"
            >
              Sign In <LogIn size={18} />
            </button>

            {/* <div className="relative flex items-center justify-center my-8">
              <div className="border-t border-slate-100 w-full"></div>
              <span className="bg-white px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest relative z-10 shrink-0">Or continue with</span>
              <div className="border-t border-slate-100 w-full"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="ga-button-secondary py-3 flex items-center justify-center gap-2 text-xs font-bold">
                <Chrome size={16} /> Google
              </button>
              <button type="button" className="ga-button-secondary py-3 flex items-center justify-center gap-2 text-xs font-bold">
                <Github size={16} /> GitHub
              </button>
            </div> */}
          </form>
        </div>

        <p className="text-center mt-8 text-xs font-medium text-slate-500">
          Don't have an account?{' '}
          <NavLink
            to="/signup"
            className="text-blue-600 font-bold hover:underline"
          >
            Sign up for free
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;

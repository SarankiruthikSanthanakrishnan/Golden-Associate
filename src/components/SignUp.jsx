"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, UserPlus, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const SignUp = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agree: false
  });
  const navigate = useRouter();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simulate signup success
    login({ username: formData.email, password: formData.password, role: 'admin' });
    toast.success('Account created and logged in!');
    navigate('/');
  };

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full animate-fade-in">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-black text-slate-900 mb-4 inline-block">
            Golden Associate<span className="text-blue-500">.</span>
          </Link>
          <h1 className="text-xl font-bold text-slate-900 uppercase tracking-widest">Create Account</h1>
          <p className="text-xs text-slate-500 font-medium mt-1">Start your journey with us today.</p>
        </div>

        <div className="ga-card p-8 bg-white">
          <form className="space-y-5" onSubmit={handleSignUp}>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-10 text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="email" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-10 text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="password" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-10 text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input 
                type="checkbox" 
                id="agree" 
                required
                className="mt-1 accent-blue-600"
                checked={formData.agree}
                onChange={(e) => setFormData({...formData, agree: e.target.checked})}
              />
              <label htmlFor="agree" className="text-[10px] font-bold text-slate-500 leading-normal">
                I agree to the <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            <button type="submit" className="ga-button-primary w-full py-4 uppercase tracking-[0.2em] gap-2 shadow-lg shadow-blue-500/20">
              Create Account <UserPlus size={18} />
            </button>
          </form>
        </div>

        <p className="text-center mt-8 text-xs font-medium text-slate-500">
          Already have an account? <Link href="/login" className="text-blue-600 font-bold hover:underline">Sign in instead</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

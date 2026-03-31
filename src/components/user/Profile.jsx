import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ShieldCheck, UserCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="ga-container pb-12 pt-10">
      <section className="mx-auto max-w-3xl ga-panel ga-fade-up p-7 md:p-10 border-slate-200 bg-white/90 backdrop-blur-md relative overflow-hidden">
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl z-0" />
        <div className="relative z-10">
          <div className="inline-flex rounded-full border border-blue-200 bg-blue-100 p-2.5 text-blue-600">
            <UserCircle2 size={24} />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-4xl ga-text-gradient">
            My Profile
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Manage account details and quick actions.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-5 hover:border-blue-200 transition duration-300">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Username</p>
              <p className="mt-2 text-lg font-bold text-slate-900">
                {user.username}
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-5 hover:border-blue-200 transition duration-300">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Role</p>
              <p className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-slate-900">
                <ShieldCheck size={20} className="text-blue-600" />
                {user.role}
              </p>
            </article>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <button
              className="rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 py-3.5 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition duration-300"
              onClick={() => navigate('/shop')}
              type="button"
            >
              Continue Shopping
            </button>
            <button
              className="rounded-xl border border-rose-200 bg-rose-50 py-3.5 text-sm font-bold text-rose-600 hover:bg-rose-100 transition duration-300"
              onClick={logout}
              type="button"
            >
              Logout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;

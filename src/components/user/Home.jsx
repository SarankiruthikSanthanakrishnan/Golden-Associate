import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  CreditCard,
  PlayCircle,
  ChevronRight
} from 'lucide-react';
import { productData, galleryVideoData } from '../../data/data';

const Home = () => {
  const featuredProducts = productData.slice(0, 4);
  const latestVideos = galleryVideoData.slice(0, 3);

  return (
    <div className="bg-white">
      {/* --- CONDENSED HERO --- */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 rounded-l-[50px] hidden lg:block"></div>
        <div className="ga-container grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <span className="ga-chip mb-4 inline-flex items-center gap-2 px-3 py-1 text-blue-600 bg-blue-50">
              <Star size={12} fill="currentColor" />
              #1 Bangalore Appliance Dealer
            </span>
            <h1 className="text-3xl lg:text-5xl font-black leading-tight mb-4 text-slate-900 tracking-tight">
              Smarter Living <br />
              <span className="ga-text-gradient">Professional Care</span>
            </h1>
            <p className="text-sm text-slate-500 mb-8 max-w-lg font-medium leading-relaxed">
              Premium kitchen and utility appliances designed for efficiency. Serving Bangalore with trust since 2010.
            </p>
            <div className="flex flex-wrap gap-3">
              <NavLink to="/explore" className="ga-button-primary flex items-center gap-2 group px-6 py-3">
                Shop Collection
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </NavLink>
              <NavLink to="/services" className="ga-button-secondary px-6 py-3">
                Smart Kitchen
              </NavLink>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800"
              alt="Premium Kitchen"
              className="rounded-2xl shadow-lg border border-slate-200 w-full object-cover aspect-video lg:aspect-auto"
            />
            {/* Condensed badge */}
            <div className="absolute -bottom-4 -left-4 bg-white px-4 py-3 rounded-xl shadow-lg border border-slate-100 hidden sm:block">
              <p className="text-2xl font-black ga-text-gradient leading-none">25% OFF</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 text-center">FIRST ORDER</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST STRIP --- */}
      <section className="bg-slate-900 py-6">
        <div className="ga-container grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Truck, label: 'Free Shipping', sub: 'Orders over ₹4999' },
            { icon: ShieldCheck, label: 'Secure Payment', sub: '100% Protected' },
            { icon: RotateCcw, label: '30-Day Return', sub: 'Hassle-Free Policy' },
            { icon: CreditCard, label: 'EMI Options', sub: 'Zero Interest Plans' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-blue-400">
                <item.icon size={16} />
              </div>
              <div>
                <p className="text-white font-bold text-[11px] leading-tight">{item.label}</p>
                <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEATURED COLLECTIONS --- */}
      <section className="py-16 ga-container">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">Featured <span className="ga-text-gradient">Collections</span></h2>
            <p className="text-xs text-slate-500 font-medium">Handpicked favorites for your modern home</p>
          </div>
          <NavLink to="/explore" className="text-[10px] font-black text-blue-600 hover:gap-1 transition-all uppercase tracking-widest flex items-center gap-1">
            Browse All <ChevronRight size={14} />
          </NavLink>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <NavLink key={product.id} to={`/products/${product.id}`} className="ga-card group overflow-hidden">
              <div className="h-56 bg-slate-50 relative border-b border-slate-100 p-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-white/90 px-2 py-0.5 rounded text-[10px] font-bold shadow-sm">{product.category}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 truncate">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-black text-slate-900">₹{product.price.toLocaleString()}</span>
                  <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* --- VIDEO EXPERIENCE --- */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="ga-container mb-10 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-2">Watch in <span className="ga-text-gradient">Action</span></h2>
          <p className="text-xs text-slate-500 font-medium">See how our appliances transform everyday tasks</p>
        </div>

        <div className="ga-container grid md:grid-cols-3 gap-6">
          {latestVideos.map((video) => (
            <div key={video.id} className="group relative rounded-xl overflow-hidden ga-card border-slate-200">
              <div className="aspect-video relative overflow-hidden bg-slate-200">
                <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center group-hover:bg-slate-900/10 transition-all z-10">
                  <PlayCircle size={40} className="text-white opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all" strokeWidth={1.5} />
                </div>
                <img 
                  src={`https://img.youtube.com/vi/${video.videoUrl.split('v=')[1]?.split('&')[0] || video.videoUrl.split('/').pop().split('?')[0]}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="text-sm font-black text-slate-900 mb-1 truncate">{video.title}</h4>
                <p className="text-[10px] text-slate-500 font-medium leading-relaxed line-clamp-2">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONDENSED CTA --- */}
      <section className="py-16 ga-container">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-700 to-blue-500 p-10 lg:p-14 text-white text-center shadow-lg">
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-3xl font-black mb-4">
              Upgrade Your Home <br className="md:hidden" /> Environment Today
            </h2>
            <p className="text-blue-100 mb-8 text-sm max-w-xl mx-auto font-medium">
              Join thousands of Bangalore families who trust Golden Associate for quality kitchen solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <NavLink to="/explore" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-black text-sm hover:bg-slate-50 transition-all">
                Browse Full Catalog
              </NavLink>
              <NavLink to="/reach-us" className="bg-blue-600 text-white border border-white/20 px-8 py-3 rounded-lg font-black text-sm hover:bg-blue-500 transition-all">
                Contact Agent
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

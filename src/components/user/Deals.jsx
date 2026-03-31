import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ShoppingBag, 
  Timer, 
  ArrowRight,
  Tags,
  BadgePercent
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { productData } from '../../data/data';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';

const Deals = () => {
  const { addToCart } = useCart();
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dealProducts = productData.slice(2, 8);

  return (
    <div className="bg-white min-h-screen">
      {/* --- CONDENSED HERO --- */}
      <section className="bg-slate-900 py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
        <div className="ga-container relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest">Limited Time</span>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Exclusive Deals</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">
              Mega <span className="text-blue-500">Flash Sale</span> Event
            </h1>
            <p className="text-xs text-slate-400 font-medium max-w-sm mb-8 leading-relaxed">
              Unbeatable prices on premium kitchen appliances. Shop our curated selection of high-performance tools before they're gone.
            </p>
            
            {/* Timer */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl w-fit">
              <Timer className="text-blue-500" size={20} />
              <div className="flex gap-4">
                {[
                  { val: timeLeft.hours, label: 'HRS' },
                  { val: timeLeft.minutes, label: 'MIN' },
                  { val: timeLeft.seconds, label: 'SEC' }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xl font-black text-white leading-none">{String(item.val).padStart(2, '0')}</p>
                    <p className="text-[8px] font-black text-slate-500 mt-1 uppercase">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DEALS GRID --- */}
      <section className="py-12 ga-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Zap size={18} className="text-amber-500 fill-amber-500" /> Today's Highlights
          </h2>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <Tags size={14} /> Refreshed Daily
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dealProducts.map((product) => {
            const discount = 15 + (product.id % 15); // Simulated discount
            const originalPrice = Math.floor(product.price / (1 - discount/100));
            
            return (
              <NavLink key={product.id} to={`/products/${product.id}`} className="ga-card group overflow-hidden border-slate-200">
                <NavLink to={`/products/${product.id}`} className="block h-56 bg-slate-50 relative p-3 group-hover:bg-slate-100 transition-colors">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply transition-transform group-hover:scale-105" />
                  <div className="absolute top-2 left-2">
                    <span className="bg-rose-500 text-white px-1.5 py-0.5 rounded-[4px] text-[8px] font-black shadow-lg uppercase tracking-tighter">-{discount}% Off</span>
                  </div>
                </NavLink>
                <div className="p-3">
                  <NavLink to={`/products/${product.id}`}>
                    <h3 className="text-[13px] font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-1 leading-tight">{product.name}</h3>
                  </NavLink>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-black text-slate-900">₹{product.price.toLocaleString()}</span>
                    <span className="text-[10px] font-medium text-slate-400 line-through">₹{originalPrice.toLocaleString()}</span>
                  </div>
                  <button 
                    onClick={() => {
                      addToCart(product);
                      toast.success(`${product.name} added to cart!`);
                    }}
                    className="ga-button-primary w-full scale-90 py-2.5 text-[9px] uppercase font-black tracking-widest gap-2"
                  >
                    Claim Deal <ArrowRight size={12} />
                  </button>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>

      {/* --- PROMO BANNER --- */}
      <section className="py-12 ga-container">
        <div className="bg-blue-600 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between text-white shadow-xl shadow-blue-100">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <BadgePercent size={32} />
            </div>
            <div>
              <h3 className="text-lg font-black leading-tight">Flash Friday is coming!</h3>
              <p className="text-xs text-blue-100 mt-1">Get an extra 10% off on all accessories this Friday.</p>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
            Get Notified
          </button>
        </div>
      </section>
    </div>
  );
};

export default Deals;

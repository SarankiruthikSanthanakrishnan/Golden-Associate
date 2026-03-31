import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { 
  Star, 
  ShoppingCart, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  ArrowLeft,
  ChevronRight,
  Minus,
  Plus,
  Share2,
  Heart
} from 'lucide-react';
import { productData } from '../../data/data';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';

const SingleProduct = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-slate-50">
        <div className="text-center bg-white p-12 rounded-3xl ga-card border-none">
          <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Product Not Found</h2>
          <NavLink to="/explore" className="ga-button-primary">Return to Catalog</NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* --- CONDENSED BREADCRUMBS --- */}
      <div className="py-4 ga-container sticky top-16 bg-slate-50/80 backdrop-blur-sm z-30">
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <ChevronRight size={10} />
          <NavLink to="/explore" className="hover:text-blue-600">Explore</NavLink>
          <ChevronRight size={10} />
          <span className="text-slate-900 truncate max-w-[150px]">{product.name}</span>
        </nav>
      </div>

      <main className="ga-container">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* --- IMAGE VIEW --- */}
          <div className="ga-card bg-white p-5 sticky top-28">
            <div className="aspect-square relative flex items-center justify-center bg-slate-50 rounded-lg overflow-hidden group">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="w-7 h-7 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 shadow-sm transition-all"><Share2 size={14} /></button>
                <button className="w-7 h-7 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-rose-500 shadow-sm transition-all"><Heart size={14} /></button>
              </div>
            </div>
            {/* Thumbs */}
            <div className="flex gap-2 mt-4">
              {[1,2,3,4].map(i => (
                <div key={i} className={`w-14 h-14 rounded-lg border-2 ${i === 1 ? 'border-blue-600' : 'border-slate-100'} overflow-hidden cursor-pointer bg-slate-50 p-1.5`}>
                  <img src={product.image} alt="thumb" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
              ))}
            </div>
          </div>

          {/* --- PRODUCT DATA --- */}
          <div className="space-y-4">
            <div className="ga-card bg-white p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-widest">{product.category}</span>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                  <span className="text-[10px] font-black text-slate-400 ml-1">4.9 (124 reviews)</span>
                </div>
              </div>
              <h1 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{product.name}</h1>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-black text-slate-900 tracking-tighter">₹{product.price.toLocaleString()}</span>
                <span className="text-sm font-bold text-slate-400 line-through">₹{(product.price * 1.2).toLocaleString()}</span>
                <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded tracking-tighter uppercase">20% Off</span>
              </div>

              {/* Interaction */}
              <div className="flex flex-wrap items-center gap-4 py-8 border-y border-slate-50">
                <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-lg border border-slate-200">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:bg-white rounded-md transition-all text-slate-600"><Minus size={14} /></button>
                  <span className="w-10 text-center font-black text-slate-900 text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-white rounded-md transition-all text-slate-600"><Plus size={14} /></button>
                </div>
                <button 
                  onClick={() => {
                    addToCart(product, quantity);
                    toast.success(`${quantity} ${product.name} added to cart!`);
                  }}
                  className="ga-button-primary flex-1 py-4 uppercase tracking-[0.2em] shadow-lg shadow-blue-100"
                >
                  <ShoppingCart size={18} className="mr-2" /> Add to Cart
                </button>
              </div>

              {/* Delivery Info */}
              <div className="grid grid-cols-3 gap-2 mt-8">
                {[
                  { icon: Truck, label: 'Free Delivery', sub: 'Bangalore City' },
                  { icon: ShieldCheck, label: '1yr Warranty', sub: 'On Site Support' },
                  { icon: RotateCcw, label: '7-Day Return', sub: 'Hassle-Free' },
                ].map((item, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <item.icon size={16} className="mx-auto text-blue-600 mb-2" />
                    <p className="text-[8px] font-black text-slate-900 uppercase leading-none mb-1">{item.label}</p>
                    <p className="text-[7px] font-bold text-slate-400 uppercase tracking-tighter">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Tab - Zoho Style Table */}
            <div className="ga-card bg-white overflow-hidden">
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-100">
                <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Product Specifications</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  ['Model Number', `GA-${product.id}X`],
                  ['Dimensions', '24" x 18" x 30"'],
                  ['Weight', '4.5 KG'],
                  ['Power Rating', '1200 Watts'],
                  ['Country of Origin', 'India'],
                  ['In the Box', 'Main Unit, User Manual, Warranty Card'],
                ].map(([label, value], i) => (
                  <div key={i} className="flex px-6 py-3 text-[11px] hover:bg-slate-50 transition-colors">
                    <span className="w-1/3 font-black text-slate-400 uppercase tracking-wider">{label}</span>
                    <span className="flex-1 font-bold text-slate-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleProduct;

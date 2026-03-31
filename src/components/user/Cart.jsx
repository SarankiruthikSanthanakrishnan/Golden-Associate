import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Trash2, 
  Minus, 
  Plus, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck,
  Truck,
  CreditCard
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal, itemsCount } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8 animate-fade-in">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-300 mb-6">
          <ShoppingBag size={40} />
        </div>
        <h2 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">Your cart is empty</h2>
        <p className="text-xs text-slate-500 font-medium mb-8 max-w-xs text-center">Looks like you haven't added any premium appliances to your collection yet.</p>
        <NavLink to="/explore" className="ga-button-primary px-8">
          Start Shopping
        </NavLink>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="ga-container">
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Your Shopping Bag</h1>
          <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full">{itemsCount} Items</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* --- ITEMS LIST --- */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="ga-card bg-white p-4 flex gap-6 items-center border-none shadow-sm">
                <div className="w-24 h-24 bg-slate-50 rounded-lg p-2 shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-black text-slate-900 truncate hover:text-blue-600 transition-colors">
                      <NavLink to={`/products/${item.id}`}>{item.name}</NavLink>
                    </h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-300 hover:text-rose-500 transition-colors p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">{item.category}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-100">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-white rounded transition-all text-slate-400 hover:text-slate-600"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-xs font-black text-slate-900">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-white rounded transition-all text-slate-400 hover:text-slate-600"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="text-sm font-black text-slate-900">₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <NavLink to="/explore" className="inline-flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline mt-4">
              <ShoppingBag size={14} /> Continue Shopping
            </NavLink>
          </div>

          {/* --- SUMMARY --- */}
          <div className="space-y-6">
            <div className="ga-card bg-white p-6 border-none shadow-sm sticky top-28">
              <h2 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <span>Subtotal ({itemsCount} units)</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <span>Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <span>Tax (Estimated)</span>
                  <span>₹0.00</span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 mb-8">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-black text-slate-900 uppercase">Total</span>
                  <span className="text-xl font-black text-blue-600">₹{subtotal.toLocaleString()}</span>
                </div>
              </div>

              <button className="ga-button-primary w-full py-4 uppercase tracking-[0.2em] gap-2 shadow-lg shadow-blue-500/20">
                Proceed to Checkout <ArrowRight size={18} />
              </button>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400">
                  <ShieldCheck size={16} className="text-blue-500" /> Secure SSL Encrypted Checkout
                </div>
                <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400">
                  <CreditCard size={16} className="text-blue-500" /> Multiple Payment Options Available
                </div>
                <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400">
                  <Truck size={16} className="text-blue-500" /> Bangalore Doorstep Delivery (24-48h)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

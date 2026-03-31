import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BadgeCheck, ShoppingCart } from 'lucide-react';
import { productData } from '../../data/data';
import { useCart } from '../../context/CartContext';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = productData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="ga-container pb-12 pt-14">
        <section className="ga-panel border-slate-200 bg-white/90 backdrop-blur-md p-7 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Product not found
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            This item might be removed or unavailable right now.
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="mt-6 rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-3 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition duration-300"
            type="button"
          >
            Back to Shop
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="ga-container pb-12 pt-10">
      <section className="ga-panel relative ga-fade-up grid gap-8 p-6 md:grid-cols-[1fr_1.1fr] md:p-8 overflow-hidden">
        <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl z-0 pointer-events-none" />
        
        <div className="rounded-2xl border border-slate-200 bg-slate-50 backdrop-blur-md p-6 relative z-10 flex items-center justify-center min-h-75">
          <img
            src={product.image}
            alt={product.name}
            className="h-full max-h-100 w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center">
          <div>
            <span className="ga-chip inline-flex px-3 py-1 text-xs font-bold uppercase tracking-wide">
              Product ID: {product.id}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Rs. {product.price.toLocaleString()}
            </p>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            {product.description}
          </p>

          <div className="mt-6 space-y-3 rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-5 text-sm text-slate-700">
            <p className="flex items-center gap-3">
              <BadgeCheck size={18} className="text-blue-600" />
              One-year service support coverage
            </p>
            <p className="flex items-center gap-3">
              <BadgeCheck size={18} className="text-blue-600" />
              Safe packing and fast dispatch
            </p>
            <p className="flex items-center gap-3">
              <BadgeCheck size={18} className="text-blue-600" />
              Installation guidance available
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-3.5 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition duration-300 flex-1 md:flex-none"
              type="button"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
            <button
              onClick={() => navigate('/shop')}
              className="rounded-xl border border-slate-300 bg-slate-50 backdrop-blur-sm px-6 py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition duration-300 flex-1 md:flex-none text-center"
              type="button"
            >
              Back to Shop
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

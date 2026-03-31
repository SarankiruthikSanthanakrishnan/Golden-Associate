import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { productData } from '../../data/data';
import { useCart } from '../../context/CartContext';

const categories = ['All', 'Kitchen', 'Utility'];

const Shop = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sort, setSort] = useState('featured');

  const products = useMemo(() => {
    const categorized = productData.map((item, index) => ({
      ...item,
      category: index % 2 === 0 ? 'Kitchen' : 'Utility',
    }));

    const filtered = categorized.filter((item) => {
      const byCategory =
        activeCategory === 'All' || item.category === activeCategory;
      const bySearch = item.name.toLowerCase().includes(search.toLowerCase());
      return byCategory && bySearch;
    });

    if (sort === 'low') {
      return [...filtered].sort((a, b) => a.price - b.price);
    }

    if (sort === 'high') {
      return [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [activeCategory, search, sort]);

  return (
    <div className="ga-container pb-12 pt-10">
      <section className="ga-panel relative ga-fade-up p-7 md:p-9 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl z-0" />
        <div className="relative z-10">
          <span className="ga-chip inline-flex px-3 py-1 text-xs font-bold uppercase tracking-wide">
            Storefront
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl ga-text-gradient">
            Explore products with clean filters and faster purchase flow.
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
            Browse our appliance catalog, compare prices, and add items
            instantly.
          </p>

          <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_auto_auto]">
            <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-md px-3 py-2 transition focus-within:border-blue-500/50 focus-within:bg-slate-100">
              <Search size={16} className="text-blue-600" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500"
                placeholder="Search product name"
                type="text"
              />
            </label>

            <label className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 transition cursor-pointer">
              <SlidersHorizontal size={16} className="text-blue-600" />
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="bg-transparent outline-none cursor-pointer text-slate-700"
              >
                <option
                  value="featured"
                  className="bg-white text-slate-700"
                >
                  Sort: Featured
                </option>
                <option value="low" className="bg-white text-slate-700">
                  Price: Low to High
                </option>
                <option value="high" className="bg-white text-slate-700">
                  Price: High to Low
                </option>
              </select>
            </label>

            <div className="inline-flex items-center rounded-xl bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-200">
              {products.length} Products
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 ga-fade-up">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
            <Filter size={14} className="text-cyan-600" />
            Filter by category
          </span>
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`rounded-full px-5 py-2 text-xs font-semibold shadow-sm transition duration-300 ${
                activeCategory === item
                  ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-transparent'
                  : 'border border-slate-300 bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <article
              key={item.id}
              className="ga-panel group cursor-pointer overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)]"
              onClick={() => navigate(`/shop/${item.id}`)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full bg-slate-50 object-contain p-3 backdrop-blur-md relative z-0"
                />
              </div>
              <div className="p-5 relative z-20">
                <p className="text-xs font-bold tracking-wider uppercase text-blue-600 mb-1">
                  {item.category}
                </p>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {item.name}
                </h3>
                <p className="mt-3 text-lg font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                  Rs. {item.price.toLocaleString()}
                </p>
                <button
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-300 px-3 py-2.5 text-sm font-semibold text-white transition duration-300 group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(37,99,235,0.45)]"
                  onClick={(event) => {
                    event.stopPropagation();
                    addToCart(item);
                  }}
                  type="button"
                >
                  <Sparkles size={16} />
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;

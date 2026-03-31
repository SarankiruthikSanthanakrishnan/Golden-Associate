import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  ChevronDown, 
  X, 
  ShoppingCart, 
  Eye,
  LayoutGrid,
  List
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { productData } from '../../data/data';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';

const Explore = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(100000);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categories = ['All', ...new Set(productData.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return productData
      .filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchesPrice = p.price <= priceRange;
        return matchesSearch && matchesCategory && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0;
      });
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* --- CONDENSED HEADER --- */}
      <div className="bg-white border-b border-slate-200 py-6 sticky top-16 z-40">
        <div className="ga-container flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">Product <span className="text-blue-600">Catalog</span></h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Showing {filteredProducts.length} Premium Results</p>
          </div>
          
          <div className="flex flex-1 max-w-xl relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search appliances, brands or specs..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-xs font-bold outline-none focus:bg-white focus:border-blue-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600"
            >
              <SlidersHorizontal size={14} /> Filters
            </button>
            <div className="relative flex items-center gap-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest hidden sm:block">Sort By:</span>
              <select 
                className="bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs font-bold outline-none focus:border-blue-500 cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="ga-container py-8 flex gap-8">
        {/* --- CONDENSED SIDEBAR FILTERS --- */}
        <aside className="hidden lg:block w-56 shrink-0 space-y-6">
          <div>
            <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-blue-600 rounded-full"></span>
              Categories
            </h3>
            <div className="space-y-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                    selectedCategory === cat 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'text-slate-600 hover:bg-white hover:text-blue-600'
                  }`}
                >
                  {cat}
                  {selectedCategory === cat && <ChevronDown size={12} className="-rotate-90" />}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-blue-600 rounded-full"></span>
              Price Range
            </h3>
            <input 
              type="range" 
              min="0" 
              max="100000" 
              step="5000"
              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
            />
            <div className="flex justify-between mt-3">
              <span className="text-[10px] font-black text-slate-400">₹0</span>
              <span className="text-xs font-black text-blue-600">Up to ₹{priceRange.toLocaleString()}</span>
            </div>
          </div>

          <div className="p-4 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-200">
            <h4 className="text-xs font-black mb-2 uppercase tracking-tight">Need Expert Help?</h4>
            <p className="text-[9px] font-medium leading-relaxed opacity-90 mb-3">Not sure what to buy? Our experts are available for Bangalore consultations.</p>
            <NavLink to="/reach-us" className="inline-block bg-white text-blue-600 px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
              Contact Us
            </NavLink>
          </div>
        </aside>

        {/* --- PRODUCT GRID --- */}
        <main className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="ga-card group flex flex-col bg-white overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-56 bg-slate-50 relative border-b border-slate-100 p-3">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-[4px] text-[8px] font-black text-slate-500 border border-slate-100 uppercase tracking-tighter">{product.category}</span>
                    </div>
                    
                    {/* Quick actions on hover */}
                    <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <NavLink 
                        to={`/products/${product.id}`}
                        className="bg-white text-slate-900 p-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:text-blue-600"
                      >
                        <Eye size={16} />
                      </NavLink>
                    </div>
                  </div>

                  <div className="p-3 flex flex-col flex-1">
                    <div className="mb-2">
                      <h3 className="text-[13px] font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-1 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-[10px] text-slate-400 font-medium line-clamp-2 leading-relaxed h-7">
                        {product.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                      <div>
                        <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Our Price</p>
                        <p className="text-base font-black text-slate-900">₹{product.price.toLocaleString()}</p>
                      </div>
                      <button 
                        onClick={() => {
                          addToCart(product);
                          toast.success(`${product.name} added to cart!`);
                        }}
                        className="ga-button-primary scale-90 px-4 py-2 text-[10px] uppercase font-black tracking-widest"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-16 text-center">
              <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">No results found</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto font-medium">Try adjusting your filters or search terms to find what you're looking for.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setPriceRange(100000);
                }}
                className="mt-6 text-xs font-black text-blue-600 hover:underline px-4 py-2"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* --- MOBILE FILTER MODAL --- */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-110 lg:hidden text-slate-900">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white p-6 shadow-2xl animate-fade-in flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-black uppercase tracking-widest">Filters</h3>
              <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 bg-slate-50 rounded-lg text-slate-400">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-8 pr-2">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Categories</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                        selectedCategory === cat 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                          : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Price Range</p>
                <input 
                  type="range" 
                  min="0" 
                  max="100000" 
                  step="5000"
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                />
                <div className="flex justify-between mt-3">
                  <span className="text-xs font-black text-slate-400">₹0</span>
                  <span className="text-sm font-black text-blue-600">₹{priceRange.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <button 
                onClick={() => setIsMobileFilterOpen(false)}
                className="ga-button-primary w-full py-4 uppercase tracking-[0.2em] font-black rounded-xl shadow-lg shadow-blue-100"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;

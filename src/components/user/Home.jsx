import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  CreditCard,
  PlayCircle,
  TrendingUp,
  Star,
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';
import { productData, galleryVideoData } from '../../data/data';

const Home = () => {
  const featuredProducts = productData.slice(0, 4);
  const latestVideos = galleryVideoData.slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* --- ODOO STYLE HERO --- */}
      <section className="bg-white border-b border-slate-200 pt-16 pb-20 overflow-hidden relative">
        {/* Subtle grid background pattern typical for enterprise software */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="ga-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest border border-blue-100 flex items-center gap-1.5">
                <Star size={12} className="fill-blue-600" /> Premium Quality
              </span>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Since 2010</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
              Intelligent Appliances <br />
              <span className="text-blue-600">For Modern Homes.</span>
            </h1>
            
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 max-w-md">
              Upgrade your living space with industry-leading utility appliances. Precision engineered for efficiency, durability, and seamless integration into your daily life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/explore" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors px-6 py-3.5 rounded-lg font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm">
                Explore Catalog <ArrowRight size={16} />
              </Link>
              <Link href="/reach-us" className="bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 transition-colors px-6 py-3.5 rounded-lg font-black text-xs uppercase tracking-widest flex items-center justify-center text-center shadow-sm">
                Contact Sales
              </Link>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-xs font-bold text-slate-500">
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-500" /> Certified</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-500" /> Waranteed</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-500" /> Support</div>
            </div>
          </div>

          <div className="relative animate-fade-in hidden lg:flex justify-center" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800"
              alt="Premium Kitchen"
              className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl border border-slate-100 object-cover aspect-[4/3] transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            {/* Enterprise floating metric card */}
            <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">Satisfaction</p>
                <p className="text-xl font-black text-slate-900 leading-none">99.8%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ZOHO STYLE VALUE PROPS CARDS --- */}
      <section className="ga-container -mt-10 relative z-20 mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Truck, title: 'Nationwide Delivery', desc: 'Free shipping on orders spanning over ₹4999 anywhere in India.' },
            { icon: ShieldCheck, title: 'Secure Checkout', desc: 'Enterprise-grade encryption ensures your data is 100% protected.' },
            { icon: RotateCcw, title: 'Easy Returns', desc: '30-day hassle-free return policy if you are not entirely satisfied.' },
            { icon: CreditCard, title: 'Flexible EMI', desc: 'Partnered with major banks to provide zero-interest EMI plans.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <item.icon size={20} />
              </div>
              <h3 className="text-sm font-black text-slate-900 mb-2">{item.title}</h3>
              <p className="text-[11px] font-medium text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ENTERPRISE PRODUCT SHOWCASE --- */}
      <section className="ga-container mb-20">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
          <div>
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">Top Rated</span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Enterprise Selections</h2>
          </div>
          <Link href="/explore" className="text-xs font-bold text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors uppercase tracking-widest">
            View Inventory <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col">
              <div className="h-48 bg-slate-50 p-6 relative flex items-center justify-center">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 p-6" 
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-white/90 border border-slate-200 text-slate-700 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest shadow-sm">{product.category}</span>
                </div>
              </div>
              <div className="p-4 border-t border-slate-100 flex flex-col flex-1">
                <h3 className="text-xs font-bold text-slate-900 line-clamp-2 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-sm font-black text-slate-900">₹{product.price.toLocaleString()}</span>
                  <div className="w-8 h-8 rounded border border-slate-200 bg-white flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- KNOWLEDGE BASE / MEDIA --- */}
      <section className="bg-white border-y border-slate-200 py-20">
        <div className="ga-container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">Resources</span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">Product Visualizations</h2>
            <p className="text-xs font-medium text-slate-500">Discover inside-views and operational guides for our premium appliances through our curated media library.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestVideos.map((video) => (
              <div key={video.id} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden group cursor-pointer hover:border-slate-300 transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center group-hover:bg-slate-900/40 transition-all z-10">
                    <PlayCircle size={48} className="text-white opacity-90 group-hover:scale-110 transition-transform" strokeWidth={1} />
                  </div>
                  <img 
                    src={`https://img.youtube.com/vi/${video.videoUrl.split('v=')[1]?.split('&')[0] || video.videoUrl.split('/').pop().split('?')[0]}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-sm font-black text-slate-900 mb-2 line-clamp-1">{video.title}</h4>
                  <p className="text-[11px] font-medium text-slate-500 leading-relaxed line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ODOO STYLE CLEAN CTA --- */}
      <section className="ga-container mt-20">
        <div className="bg-slate-900 rounded-2xl overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px] pointer-events-none"></div>
          <div className="p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl lg:text-3xl font-black text-white mb-4 tracking-tight">
                Ready to optimize your infrastructure?
              </h2>
              <p className="text-slate-400 text-sm font-medium">
                Our support engineers are ready to help you select the perfect appliances for your residential or commercial needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/explore" className="bg-blue-600 text-white hover:bg-blue-500 transition-colors px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest text-center shadow-lg shadow-blue-900/20">
                Browse Directory
              </Link>
              <Link href="/reach-us" className="bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 transition-colors px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest text-center">
                Contact Experts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

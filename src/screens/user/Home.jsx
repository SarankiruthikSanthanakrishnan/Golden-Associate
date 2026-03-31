import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  Headset,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { productData, servicesData, workData } from '../../data/data';
import aboutImg from '../../assets/about.jpeg';

const Home = () => {
  const navigate = useNavigate();
  const featuredProducts = productData.slice(0, 4);
  const spotlightServices = servicesData.slice(0, 3);
  const showcaseWorks = workData.slice(0, 6);

  return (
    <div className="pb-8">
      <section className="ga-container ga-fade-up pt-10 md:pt-14">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="ga-panel relative overflow-hidden p-7 md:p-10">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl z-0" />
            <div className="relative z-10">
              <span className="ga-chip inline-flex px-3 py-1 text-xs font-bold uppercase tracking-wide">
                Kitchen and Home Utilities
              </span>
              <h1 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                Powering smarter homes with reliable appliances and support.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 md:text-base">
                Golden Associate brings dependable products, quick service, and
                practical solutions for modern families.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('/shop')}
                  className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition hover:brightness-110"
                  type="button"
                >
                  Explore Products
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="rounded-xl border border-slate-300 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                  type="button"
                >
                  View Services
                </button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 backdrop-blur-sm">
                  <p className="text-xs text-slate-500">Happy Customers</p>
                  <p className="mt-1 text-lg font-extrabold text-slate-900">
                    2,000+
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 backdrop-blur-sm">
                  <p className="text-xs text-slate-500">Service Coverage</p>
                  <p className="mt-1 text-lg font-extrabold text-slate-900">
                    Tamil Nadu
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 backdrop-blur-sm">
                  <p className="text-xs text-slate-500">Response Time</p>
                  <p className="mt-1 text-lg font-extrabold text-slate-900">
                    24 Hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ga-panel relative overflow-hidden p-5 flex items-center justify-center">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-blue-600/30 blur-2xl z-0" />
            <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-sky-100 blur-2xl z-0" />
            <img
              src={aboutImg}
              alt="Golden Associate kitchen solutions"
              className="relative z-10 h-80 w-full rounded-2xl object-cover md:h-105 shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="ga-container mt-12 ga-fade-up">
        <div className="ga-panel p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 p-3">
              <ShieldCheck className="text-emerald-600" size={20} />
              <div>
                <p className="text-xs text-slate-500">Safety First</p>
                <p className="text-sm font-semibold text-slate-900">
                  Certified quality checks
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 p-3">
              <Truck className="text-sky-600" size={20} />
              <div>
                <p className="text-xs text-slate-500">Delivery</p>
                <p className="text-sm font-semibold text-slate-900">
                  Fast dispatch and tracking
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 p-3">
              <Headset className="text-cyan-600" size={20} />
              <div>
                <p className="text-xs text-slate-500">Support</p>
                <p className="text-sm font-semibold text-slate-900">
                  Friendly service assistance
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 p-3">
              <BadgeCheck className="text-amber-600" size={20} />
              <div>
                <p className="text-xs text-slate-500">Warranty</p>
                <p className="text-sm font-semibold text-slate-900">
                  Trusted post-sale support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-container mt-12 ga-fade-up">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Featured Collection
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              Popular Products
            </h2>
          </div>
          <button
            onClick={() => navigate('/shop')}
            className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            type="button"
          >
            Browse Full Catalog
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((item) => (
            <article key={item.id} className="ga-panel overflow-hidden group">
              <div
                className="relative"
                onClick={() => navigate(`/shop/${item.id}`)}
              >
                <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-52 w-full bg-slate-50 object-contain p-3 backdrop-blur-md relative z-0"
                />
              </div>
              <div className="p-4 relative z-20">
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.name}
                </h3>
                <p className="mt-2 inline-block rounded-md bg-blue-100 px-2 py-1 text-sm font-extrabold text-blue-700">
                  Rs. {item.price.toLocaleString()}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ga-container mt-12 ga-fade-up">
        <div className="mb-5">
          <p className="text-sm font-semibold text-blue-600">
            Service Expertise
          </p>
          <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
            What We Do Best
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {spotlightServices.map((service) => (
            <article
              key={service.id}
              className="ga-panel overflow-hidden group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-[#030712]/50 to-transparent z-10" />
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-0"
                />
              </div>
              <div className="relative z-20 -mt-12 p-4">
                <h3 className="text-base font-bold text-slate-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ga-container mt-12 ga-fade-up">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Project Highlights
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              Recent Work Gallery
            </h2>
          </div>
          <button
            onClick={() => navigate('/gallery')}
            className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            type="button"
          >
            Open Full Gallery
          </button>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {showcaseWorks.map((work) => (
            <div
              key={work.id}
              className="ga-panel overflow-hidden relative group cursor-pointer border-0 p-1"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition duration-300" />
              <img
                src={work.image}
                alt={`Work ${work.id}`}
                className="relative z-10 h-44 w-full rounded-xl object-cover md:h-56 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

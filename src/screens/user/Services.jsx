import React from 'react';
import { BadgeCheck, Clock3, ShieldCheck, Wrench } from 'lucide-react';
import { servicesData } from '../../data/data';

const Services = () => {
  const processSteps = [
    {
      title: 'Requirement Call',
      detail:
        'Product usage, budget, and site details are collected through a quick call.',
    },
    {
      title: 'On-site Assessment',
      detail:
        'Our service engineer validates installation points and safety requirements.',
    },
    {
      title: 'Installation & Demo',
      detail:
        'Final setup is completed with performance check and customer handover demo.',
    },
  ];

  const supportHighlights = [
    { label: 'Avg. service response', value: '24 Hours', icon: Clock3 },
    { label: 'Installations completed', value: '8,500+', icon: Wrench },
    { label: 'Quality assurance', value: '100% Checklist', icon: ShieldCheck },
    { label: 'Customer rating', value: '4.8/5', icon: BadgeCheck },
  ];

  return (
    <div className="ga-container pb-12 pt-10">
      <section className="ga-panel relative ga-fade-up p-7 md:p-10 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-600/20 blur-3xl z-0" />
        <div className="relative z-10">
          <span className="ga-chip inline-flex px-3 py-1 text-xs font-bold uppercase tracking-wide">
            Service Desk
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Service plans designed for durability and peace of mind.
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
            From installation to annual maintenance, Golden Associate delivers
            reliable and simple service workflows for every home appliance.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {supportHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-4"
                >
                  <Icon className="text-blue-600" size={18} />
                  <p className="mt-2 text-xs text-slate-500">{item.label}</p>
                  <p className="text-lg font-extrabold text-slate-900">
                    {item.value}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-10 ga-fade-up">
        <div className="mb-4">
          <p className="text-sm font-semibold text-blue-600">Core Offerings</p>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Popular Services
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <article key={service.id} className="ga-panel overflow-hidden group">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-[#030712]/50 to-transparent z-10" />
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-0"
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

      <section className="mt-10 ga-panel ga-fade-up p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl z-0" />
        <div className="relative z-10">
          <p className="text-sm font-semibold text-blue-600">How It Works</p>
          <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
            Simple 3-step Process
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-4 transition hover:bg-slate-100"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-cyan-600 text-sm font-bold text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-base font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {step.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

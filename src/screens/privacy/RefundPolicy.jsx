import React from 'react';
import { RotateCcw, CreditCard, ShieldCheck, HelpCircle, Phone, Mail, MapPin } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="ga-container max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in text-slate-600">
          {/* Header */}
          <div className="bg-slate-900 px-8 py-10 text-center relative overflow-hidden">
            <div className="relative z-10 text-white">
              <RotateCcw size={24} className="mx-auto mb-4 text-amber-500" />
              <h1 className="text-2xl font-black tracking-tight uppercase">Refund & Return</h1>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-1">Version 2.0 • March 2026</p>
            </div>
          </div>

          <div className="p-8 lg:p-12 leading-relaxed">
            <div className="space-y-8">
              {/* Logic Sections */}
              {[
                { 
                  icon: ShieldCheck, 
                  title: '7-Day Return Policy', 
                  desc: 'We offer a 7-day return policy for unused appliances in their original packaging. Return requests after 7 days will follow warranty guidelines.' 
                },
                { 
                  icon: CreditCard, 
                  title: 'Refund Process', 
                  desc: 'Once approved, refunds are processed within 5-7 business days to the original payment source. Processing fees may apply.' 
                },
                { 
                  icon: HelpCircle, 
                  title: 'Damaged Items', 
                  desc: 'Please report any shipping damage within 24 hours of delivery with photographic evidence for immediate replacement or full refund.' 
                }
              ].map((section, i) => (
                <section key={i} className="flex gap-6 group">
                  <div className="shrink-0 w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                    <section.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900 mb-2 uppercase tracking-tight">{section.title}</h3>
                    <p className="text-xs font-medium leading-relaxed">{section.desc}</p>
                  </div>
                </section>
              ))}

              <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 mt-12">
                <h3 className="text-sm font-black text-slate-900 mb-6 uppercase">Return Center</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <p className="font-black text-slate-400 uppercase text-[9px] tracking-widest">Office</p>
                    <div className="flex gap-2 text-xs font-medium">
                      <MapPin size={14} className="text-blue-600 shrink-0" />
                      <p>52, 18th cross, 15th main, <br />Kurubharahalli, JC Nagar, Bangalore.</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="font-black text-slate-400 uppercase text-[9px] tracking-widest">Connect</p>
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <Phone size={14} className="text-blue-600" />
                      <span>+91 99866 83173</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;

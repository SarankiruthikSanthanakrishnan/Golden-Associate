import React from 'react';
import { Shield, Lock, Eye, Users, FileText, Bell, Phone, Mail, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="ga-container max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in text-slate-600">
          {/* Condensed Header */}
          <div className="bg-slate-900 px-8 py-10 text-center relative overflow-hidden">
            <div className="relative z-10 text-white">
              <Shield size={24} className="mx-auto mb-4 text-blue-500" />
              <h1 className="text-2xl font-black tracking-tight uppercase">Privacy Policy</h1>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-1">Last Updated: March 31, 2026</p>
            </div>
          </div>

          <div className="p-8 lg:p-12 leading-relaxed">
            <p className="text-sm font-medium mb-8 text-slate-500">
              This Privacy Policy outlines how <strong className="text-slate-900">Golden Associate</strong> collects, uses, discloses, and protects the personal information of our valued users and customers.
            </p>

            <div className="space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-black">1</span>
                  Information Collection
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: Users, title: 'Personal Data', desc: 'Name, email, and contact details for registration.' },
                    { icon: Lock, title: 'Payments', desc: 'Securely processed via encrypted gateways.' },
                    { icon: Eye, title: 'Usage Data', desc: 'Non-identifiable activity logs for analytics.' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <item.icon size={16} className="text-blue-500 mb-2" />
                      <h3 className="text-[10px] font-black text-slate-900 uppercase mb-1">{item.title}</h3>
                      <p className="text-[10px] font-medium leading-tight">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 2 */}
              <section className="pt-8 border-t border-slate-100">
                <h2 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-black">2</span>
                  Data Usage
                </h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Order processing and shipping',
                    'Direct customer support and warranty',
                    'Promotional updates (if opted-in)',
                    'Service and catalog improvement'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-medium">
                      <div className="w-1 h-1 rounded-full bg-blue-600"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Contact Card */}
              <section className="pt-8 border-t border-slate-100">
                <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                  <h3 className="text-sm font-black text-slate-900 mb-6 uppercase">Privacy Concerns?</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <p className="font-black text-slate-400 uppercase text-[9px] tracking-widest">Bangalore Office</p>
                      <div className="flex gap-2 text-xs font-medium">
                        <MapPin size={14} className="text-blue-600 shrink-0" />
                        <p>52, 18th cross, 15th main, <br />Kurubharahalli, JC Nagar, Bangalore.</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="font-black text-slate-400 uppercase text-[9px] tracking-widest">Contact Lines</p>
                      <div className="flex items-center gap-2 text-xs font-medium">
                        <Phone size={14} className="text-blue-600" />
                        <span>+91 99866 83173</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium">
                        <Mail size={14} className="text-blue-600" />
                        <span>support@goldenassociate.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          
          <div className="bg-slate-100 p-4 text-center">
            <p className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase">
              GOLDEN ASSOCIATE PRIVACY COMPLIANCE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

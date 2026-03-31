import React from 'react';
import { FileText, Gavel, Scale, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

const TermsNconditon = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="ga-container max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in text-slate-600">
          {/* Header */}
          <div className="bg-slate-900 px-8 py-10 text-center relative overflow-hidden">
            <div className="relative z-10 text-white">
              <FileText size={24} className="mx-auto mb-4 text-blue-400" />
              <h1 className="text-2xl font-black tracking-tight uppercase">Terms & Conditions</h1>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-1">Effective Date: March 2026</p>
            </div>
          </div>

          <div className="p-8 lg:p-12 leading-relaxed">
            <div className="space-y-10">
              <section>
                <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
                  <Gavel size={16} className="text-blue-500" /> Agreement to Terms
                </h3>
                <p className="text-xs font-medium leading-relaxed">
                  By accessing or using the Golden Associate website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations in India.
                </p>
              </section>

              <section>
                <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
                  <Scale size={16} className="text-blue-500" /> Use License
                </h3>
                <ul className="space-y-2 text-xs font-medium list-disc pl-5">
                  <li>Permission is granted to download one copy of the materials for personal, non-commercial use.</li>
                  <li>You may not modify, copy, or redistribute the content without explicit written consent.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
                  <AlertCircle size={16} className="text-blue-500" /> Disclaimer
                </h3>
                <p className="text-xs font-medium leading-relaxed italic">
                  The materials on Golden Associate's website are provided on an 'as is' basis. We make no warranties, expressed or implied, regarding product performance beyond the manufacturer's guarantee.
                </p>
              </section>

              <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <h3 className="text-sm font-black text-slate-900 mb-4 uppercase">Legal Jurisdiction</h3>
                <p className="text-xs font-medium mb-6">Any claim relating to Golden Associate's website shall be governed by the laws of the State of Karnataka without regard to its conflict of law provisions.</p>
                <div className="flex gap-6 mt-4">
                  <div className="flex gap-2 text-xs font-medium items-center">
                    <MapPin size={14} className="text-blue-600" /> 
                    <span>Bangalore, KA</span>
                  </div>
                  <div className="flex gap-2 text-xs font-medium items-center">
                    <Mail size={14} className="text-blue-600" /> 
                    <span>legal@goldenassociate.com</span>
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

export default TermsNconditon;

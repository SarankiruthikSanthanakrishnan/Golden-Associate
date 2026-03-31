import React from 'react';
import { 
  Printer, 
  Download, 
  Mail, 
  ShieldCheck, 
  MapPin, 
  Phone,
  FileText
} from 'lucide-react';

const InvoiceGenerator = ({ orderId = 'GA-2026-001', customer = 'Saran K', items = [] }) => {
  const date = new Date().toLocaleDateString();
  
  return (
    <div className="bg-white min-h-[800px] w-full max-w-4xl mx-auto p-12 shadow-2xl rounded-sm border border-slate-100 animate-fade-in relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] -rotate-45 pointer-events-none">
        <h1 className="text-[200px] font-black text-slate-900">GOLDEN</h1>
      </div>

      {/* Header */}
      <div className="flex justify-between items-start mb-16 relative">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <FileText size={20} />
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Golden Associate</h1>
          </div>
          <div className="space-y-1 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <div className="flex items-center gap-2"><MapPin size={12} className="text-blue-500" /> 52, 18th Cross, 15th Main, Bangalore</div>
            <div className="flex items-center gap-2"><Phone size={12} className="text-blue-500" /> +91 99866 83173</div>
            <div className="flex items-center gap-2"><Mail size={12} className="text-blue-500" /> contact@goldenassociate.com</div>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-2">Invoice</h2>
          <p className="text-xs font-black text-blue-600 uppercase tracking-widest">#{orderId}</p>
          <div className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <p>Invoice Date: {date}</p>
            <p>Due Date: Upon Receipt</p>
          </div>
        </div>
      </div>

      {/* Addresses */}
      <div className="grid grid-cols-2 gap-12 mb-16 relative">
        <div>
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Bill To</h3>
          <div className="space-y-1">
            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{customer || 'Premium Customer'}</p>
            <p className="text-[11px] font-bold text-slate-500 leading-relaxed max-w-[250px]">
              123, 15th Main, JC Nagar, Bangalore,<br />
              Karnataka, India - 560001
            </p>
            <p className="text-xs font-black text-blue-600 mt-2">+91 90000 00000</p>
          </div>
        </div>
        <div className="text-right">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Payment Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[11px] font-bold text-slate-500">
              <span className="uppercase tracking-widest opacity-60">Status</span>
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-[9px] font-black uppercase">Paid</span>
            </div>
            <div className="flex justify-between items-center text-[11px] font-bold text-slate-500">
              <span className="uppercase tracking-widest opacity-60">Method</span>
              <span className="text-slate-900 uppercase">Bank Transfer</span>
            </div>
            <div className="flex justify-between items-center text-[11px] font-bold text-slate-500">
              <span className="uppercase tracking-widest opacity-60">Currency</span>
              <span className="text-slate-900 uppercase">INR (₹)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Items Table */}
      <div className="mb-16 relative">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900 text-white uppercase tracking-widest text-[9px] font-black">
              <th className="px-6 py-4 rounded-l-lg">Description</th>
              <th className="px-6 py-4 text-center">Qty</th>
              <th className="px-6 py-4 text-right">Unit Price</th>
              <th className="px-6 py-4 text-right rounded-r-lg">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[1, 2].map((i) => (
              <tr key={i} className="text-xs font-bold text-slate-600">
                <td className="px-6 py-5">
                  <p className="text-slate-900 font-black uppercase tracking-tight">Instant Geyser MCB Model</p>
                  <p className="text-[9px] text-slate-400 mt-1 uppercase">GE-2026-X1 • 12 Months Warranty</p>
                </td>
                <td className="px-6 py-5 text-center">01</td>
                <td className="px-6 py-5 text-right">₹2,675.00</td>
                <td className="px-6 py-5 text-right text-slate-900 font-black">₹2,675.00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="flex justify-end mb-20 relative">
        <div className="w-64 space-y-4">
          <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span>Subtotal</span>
            <span className="text-slate-900">₹5,350.00</span>
          </div>
          <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span>Tax (GST 18%)</span>
            <span className="text-slate-900">₹963.00</span>
          </div>
          <div className="pt-4 border-t-2 border-slate-900 flex justify-between items-baseline">
            <span className="text-sm font-black text-slate-900 uppercase">Grand Total</span>
            <span className="text-3xl font-black text-blue-600 tracking-tighter">₹6,313.00</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 pt-10 text-center relative">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
          <ShieldCheck size={14} className="text-blue-600" /> This is a computer generated invoice
        </p>
        <div className="flex justify-center gap-12 text-[9px] font-black text-slate-300 uppercase tracking-widest">
          <span>Terms & Conditions Apply</span>
          <span>Golden Associate © 2026</span>
          <span>Thank you for your business!</span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;

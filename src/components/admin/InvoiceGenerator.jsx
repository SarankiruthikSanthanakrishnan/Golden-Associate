import React from 'react';
import { X, Printer, Building2 } from 'lucide-react';

const InvoiceGenerator = ({ order, onClose }) => {
  if (!order) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-50/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white text-slate-900 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 print:hidden">
          <h3 className="text-lg font-bold text-slate-800">Invoice Preview</h3>
          <div className="flex items-center gap-2">
            <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
              <Printer className="w-4 h-4" /> Print
            </button>
            <button onClick={onClose} className="p-2 text-slate-500 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Invoice Body */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12 print:p-0 bg-white" id="invoice-printable-area">
          {/* Header */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2 text-blue-600">
                <Building2 className="w-8 h-8" />
                <h1 className="text-2xl font-black tracking-tight">Golden Associate</h1>
              </div>
              <p className="text-sm border-l-2 border-blue-600 pl-3 py-1 text-slate-500">
                123 Industrial Estate, Tech Park<br />
                Coimbatore, Tamil Nadu 641014<br />
                support@goldenassociate.com
              </p>
            </div>
            <div className="text-right">
              <h2 className="text-3xl font-black text-slate-600 uppercase tracking-widest mb-2">INVOICE</h2>
              <p className="text-sm font-bold text-slate-700">Invoice No: <span className="font-medium text-slate-500 ml-1">INV-{order.id.replace('ORD-', '')}</span></p>
              <p className="text-sm font-bold text-slate-700">Date: <span className="font-medium text-slate-500 ml-1">{order.date}</span></p>
              <p className="text-sm gap-2 mt-2">
                 <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${order.payment === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {order.payment}
                 </span>
              </p>
            </div>
          </div>

          {/* Billing Info */}
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Billed To:</p>
              <h3 className="text-lg font-bold text-slate-800">{order.customer}</h3>
              <p className="text-sm text-slate-500 mt-1">
                45, Customer Address Street<br />
                City, State, 600001<br />
                India
              </p>
            </div>
          </div>

          {/* Items Table */}
          <div className="mb-10 rounded-xl overflow-hidden border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-5 py-3 font-bold text-slate-600">Item Description</th>
                  <th className="px-5 py-3 font-bold text-slate-600 text-center">Qty</th>
                  <th className="px-5 py-3 font-bold text-slate-600 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-5 py-4 font-medium text-slate-800">{order.product}</td>
                  <td className="px-5 py-4 text-slate-600 text-center">1</td>
                  <td className="px-5 py-4 font-medium text-slate-800 text-right">{order.amount}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="flex justify-end mb-12">
            <div className="w-full max-w-xs space-y-3 pt-4 border-t border-slate-200">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-500">Subtotal</span>
                <span className="font-semibold text-slate-800">{order.amount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-500">Tax (0%)</span>
                <span className="font-semibold text-slate-800">Rs. 0</span>
              </div>
              <div className="flex justify-between items-center py-3 border-t border-slate-200">
                <span className="font-bold text-slate-800 uppercase tracking-wider">Total</span>
                <span className="text-xl font-black text-blue-600">{order.amount}</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t border-slate-200 text-center">
            <p className="text-sm font-semibold text-slate-600">Thank you for your business!</p>
            <p className="text-xs text-slate-500 mt-1">This is a system generated invoice and does not require a physical signature.</p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body * {
            visibility: hidden;
          }
          #invoice-printable-area, #invoice-printable-area * {
            visibility: visible;
          }
          #invoice-printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            padding: 20mm !important;
          }
        }
      `}} />
    </div>
  );
};

export default InvoiceGenerator;

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  Printer, 
  Download, 
  Truck, 
  CheckCircle2, 
  Clock, 
  User, 
  MapPin, 
  Mail, 
  Phone,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  FileText
} from 'lucide-react';
import Image from 'next/image';
import { productData } from '../../data/data';

const OrderDetail = () => {
  const { id } = useParams();
  const [status, setStatus] = useState('Processing');

  const orderItems = productData.slice(0, 2).map(p => ({ ...p, quantity: 1 }));
  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="animate-fade-in">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/orders" className="p-2 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-blue-600 shadow-sm transition-all">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight uppercase">Order Detail</h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Reference: #{id}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="ga-button-secondary border-slate-200 gap-2 px-4 py-2.5 text-xs font-bold bg-white text-slate-600 uppercase tracking-widest">
            <Printer size={16} /> Print
          </button>
          <Link href={`/admin/invoice/${id}`} className="ga-button-primary bg-slate-900 gap-2 px-6 py-2.5 text-xs font-black uppercase tracking-widest shadow-xl shadow-slate-900/10 flex items-center">
            <FileText size={16} /> Generate Invoice
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Status Tracker */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6">Order Status</h2>
            <div className="flex items-center justify-between relative px-2">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 -z-10"></div>
              {[
                { label: 'Placed', icon: CheckCircle2, active: true },
                { label: 'Confirmed', icon: ShieldCheck, active: true },
                { label: 'Processing', icon: Clock, active: true },
                { label: 'Shipped', icon: Truck, active: false },
                { label: 'Delivered', icon: CheckCircle2, active: false },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${step.active ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <step.icon size={14} />
                  </div>
                  <p className={`text-[10px] font-black uppercase tracking-tighter ${step.active ? 'text-blue-600' : 'text-slate-400'}`}>{step.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Items Table */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50">
              <h2 className="text-xs font-black text-slate-900 uppercase tracking-widest">Items Partition</h2>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-50">
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Product</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Qty</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Price</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {orderItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-50 rounded-lg p-1 border border-slate-100 relative overflow-hidden">
                          <Image src={item.image} alt={item.name} fill sizes="40px" className="object-contain mix-blend-multiply p-1" />
                        </div>
                        <p className="text-xs font-black text-slate-900">{item.name}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-xs font-bold text-slate-500">x{item.quantity}</td>
                    <td className="px-6 py-4 text-right text-xs font-black text-slate-900">₹{item.price.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right text-xs font-black text-blue-600">₹{(item.price * item.quantity).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-6 border-t border-slate-50 flex justify-end">
              <div className="w-64 space-y-3">
                <div className="flex justify-between text-xs font-bold text-slate-400">
                  <span>Subtotal</span>
                  <span className="text-slate-900">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-slate-400">
                  <span>Shipping</span>
                  <span className="text-emerald-600">FREE</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-slate-100 items-baseline">
                  <span className="text-xs font-black text-slate-900 uppercase">Total Amount</span>
                  <span className="text-xl font-black text-blue-600">₹{subtotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl">
            <h2 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-6">Customer Profile</h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-blue-400">
                <User size={24} />
              </div>
              <div>
                <p className="text-sm font-black tracking-tight">{id.startsWith('GA-2026-001') ? 'Saran K' : 'Kiruthik S'}</p>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Premium Customer</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <Mail size={16} className="text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500">Email</p>
                  <p className="text-xs font-medium text-slate-300">customer@example.com</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={16} className="text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500">Phone</p>
                  <p className="text-xs font-medium text-slate-300">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={16} className="text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500">Shipping Address</p>
                  <p className="text-xs font-medium text-slate-300 leading-relaxed">
                    123, 15th Main, JC Nagar,<br />
                    Bangalore, Karnataka - 560001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6">Payment Method</h2>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <CreditCard size={18} className="text-blue-600" />
                <p className="text-xs font-black text-slate-900 uppercase">Cash on Delivery</p>
              </div>
              <CheckCircle2 size={16} className="text-emerald-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;

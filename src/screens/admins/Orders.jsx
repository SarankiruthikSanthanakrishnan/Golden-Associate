import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  ChevronRight, 
  Clock, 
  CheckCircle2, 
  Truck, 
  AlertCircle,
  Eye,
  Download
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 'GA-2026-001', customer: 'Saran K', total: 5975, items: 3, status: 'Processing', date: '2026-03-31' },
    { id: 'GA-2026-002', customer: 'Kiruthik S', total: 2275, items: 1, status: 'Shipped', date: '2026-03-30' },
    { id: 'GA-2026-003', customer: 'Prakash W', total: 12450, items: 5, status: 'Delivered', date: '2026-03-29' },
    { id: 'GA-2026-004', customer: 'Anitha R', total: 3575, items: 1, status: 'Pending', date: '2026-03-31' },
    { id: 'GA-2026-005', customer: 'Rajesh V', total: 8950, items: 2, status: 'Delivered', date: '2026-03-25' },
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-emerald-50 text-emerald-600';
      case 'Shipped': return 'bg-blue-50 text-blue-600';
      case 'Processing': return 'bg-amber-50 text-amber-600';
      default: return 'bg-slate-100 text-slate-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered': return <CheckCircle2 size={12} />;
      case 'Shipped': return <Truck size={12} />;
      case 'Processing': return <Clock size={12} />;
      default: return <AlertCircle size={12} />;
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Order Management</h1>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Showing active transactions for March 2026</p>
        </div>
        <button className="ga-button-secondary border-slate-200 gap-2 px-4 py-2.5 text-xs font-bold bg-white text-slate-600">
          <Download size={16} /> Batch Export
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Order ID</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Customer</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Total</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="text-xs font-black text-blue-600">#{order.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-slate-900">{order.customer}</p>
                    <p className="text-[9px] font-medium text-slate-400 mt-0.5 uppercase tracking-tighter">{order.items} Units</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-black text-slate-900">₹{order.total.toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${getStatusStyle(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {order.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-500">{order.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <NavLink 
                        to={`/admin/orders/${order.id}`}
                        className="p-2 text-slate-400 hover:text-blue-600 transition-colors bg-slate-50 rounded-lg group-hover:bg-blue-50"
                      >
                        <Eye size={16} />
                      </NavLink>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;

import React, { useState, useEffect } from 'react';
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
  Download,
  Loader2
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const fetchedOrders = [];
        querySnapshot.forEach((doc) => {
          fetchedOrders.push({ id: doc.id, ...doc.data() });
        });
        setOrders(fetchedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

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
              {isLoading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
                    <Loader2 className="animate-spin mx-auto mb-2" size={24} />
                    <p className="text-xs font-bold uppercase tracking-widest">Loading Orders...</p>
                  </td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
                    <p className="text-xs font-bold uppercase tracking-widest">No Active Orders Found</p>
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-xs font-black text-blue-600">#{order.id.slice(0, 8).toUpperCase()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs font-bold text-slate-900">{order.customerInfo?.name || 'Unknown User'}</p>
                      <p className="text-[9px] font-medium text-slate-400 mt-0.5 uppercase tracking-tighter">{order.totalItems || 0} Units</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs font-black text-slate-900">₹{(order.totalAmount || 0).toLocaleString()}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${getStatusStyle(order.status)}`}>
                        {getStatusIcon(order.status)}
                        {order.status || 'Pending'}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-500">
                      {order.createdAt ? order.createdAt.toDate().toLocaleDateString() : 'N/A'}
                    </td>
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;

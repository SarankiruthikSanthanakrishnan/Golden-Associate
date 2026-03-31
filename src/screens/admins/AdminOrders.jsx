import React, { useState } from 'react';
import { Search, Filter, Eye, FileText, ArrowUpDown, Truck } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import InvoiceGenerator from '../../components/admin/InvoiceGenerator';

const AdminOrders = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedInvoiceOrder, setSelectedInvoiceOrder] = useState(null);

  const orders = [
    { id: 'ORD-89234123', customer: 'Arun Kumar', product: 'Premium Wireless Headphones', amount: 'Rs. 5,999', date: '24 Oct 2023', status: 'Delivered', payment: 'Paid' },
    { id: 'ORD-89234124', customer: 'Priya Raj', product: 'Smart Convection Microwave', amount: 'Rs. 12,499', date: '25 Oct 2023', status: 'Processing', payment: 'Paid' },
    { id: 'ORD-89234125', customer: 'Karthik S', product: 'Men\'s Cotton Graphic T-Shirt x2', amount: 'Rs. 1,798', date: '25 Oct 2023', status: 'Delivered', payment: 'Paid' },
    { id: 'ORD-89234126', customer: 'Deepa M', product: 'Leather Minimalist Wallet', amount: 'Rs. 1,299', date: '26 Oct 2023', status: 'Cancelled', payment: 'Refunded' },
    { id: 'ORD-89234127', customer: 'Vijay', product: '4K Ultra HD Action Camera', amount: 'Rs. 14,999', date: '26 Oct 2023', status: 'Processing', payment: 'Pending' },
    { id: 'ORD-89234128', customer: 'Anitha', product: 'Complete React Development Guide', amount: 'Rs. 1,499', date: '27 Oct 2023', status: 'Shipped', payment: 'Paid' },
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          order.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || order.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'Processing': return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'Shipped': return 'bg-cyan-50 text-cyan-600 border-cyan-200';
      case 'Cancelled': return 'bg-rose-50 text-rose-600 border-rose-200';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  const getPaymentColor = (payment) => {
    switch (payment) {
      case 'Paid': return 'text-emerald-600';
      case 'Pending': return 'text-amber-600';
      case 'Refunded': return 'text-rose-600';
      default: return 'text-slate-500';
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 ga-text-gradient">Orders</h2>
          <p className="text-sm text-slate-500 mt-1">Track and manage customer orders and invoices.</p>
        </div>
      </div>

      <div className="ga-panel rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by Order ID (8-digit) or Customer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white/95 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-inner"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex items-center w-full sm:w-auto">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full sm:w-auto pl-9 pr-8 py-2 bg-white/95 border border-slate-200 rounded-xl text-sm text-slate-600 focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer shadow-inner"
              >
                <option value="all">All Statuses</option>
                <option value="Delivered">Delivered</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-600 font-medium">
              <tr>
                <th className="px-6 py-4 cursor-pointer hover:text-slate-900 transition-colors group">
                  <div className="flex items-center gap-2">Order ID <ArrowUpDown className="w-3 h-3 text-slate-500 group-hover:text-blue-600" /></div>
                </th>
                <th className="px-6 py-4">Customer & Product</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status & Payment</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-slate-600">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                          <Truck className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{order.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-900">{order.customer}</p>
                      <p className="text-xs text-slate-500 truncate max-w-[200px]" title={order.product}>{order.product}</p>
                    </td>
                    <td className="px-6 py-4 font-semibold text-blue-600">
                      {order.amount}
                    </td>
                    <td className="px-6 py-4 text-slate-500">
                      {order.date}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5 items-start">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                        <span className={`text-[11px] font-semibold ${getPaymentColor(order.payment)}`}>
                          • {order.payment}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View Order">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setSelectedInvoiceOrder(order)}
                          className="p-2 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                          title="Generate Invoice"
                        >
                          <FileText className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-slate-500">
                    No orders found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 bg-slate-50">
          <p>Showing {filteredOrders.length} of {orders.length} orders</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      <InvoiceGenerator 
        order={selectedInvoiceOrder} 
        onClose={() => setSelectedInvoiceOrder(null)} 
      />
    </AdminLayout>
  );
};

export default AdminOrders;

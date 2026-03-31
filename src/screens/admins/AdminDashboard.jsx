import React from 'react';
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  Clock,
  IndianRupee,
  MapPin,
  Package,
  ShoppingBag,
  Store,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminDashboard = () => {
  const mainStats = [
    {
      label: 'Total Revenue',
      value: 'Rs. 4,25,000',
      trend: 'up',
      change: '+12.5%',
      icon: IndianRupee,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100',
      trendColor: 'text-emerald-600 bg-emerald-50',
    },
    {
      label: 'Total Orders',
      value: '1,248',
      trend: 'up',
      change: '+8.2%',
      icon: ShoppingBag,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      trendColor: 'text-emerald-600 bg-emerald-50',
    },
    {
      label: 'Active Users',
      value: '8,432',
      trend: 'down',
      change: 'Active Accounts',
      icon: Users,
      color: 'text-violet-600',
      bg: 'bg-violet-100',
      trendColor: 'text-slate-500 bg-slate-50',
    },
    {
      label: 'Growth Rate',
      value: '14.2%',
      trend: 'up',
      change: 'vs last month',
      icon: TrendingUp,
      color: 'text-amber-600',
      bg: 'bg-amber-100',
      trendColor: 'text-emerald-600 bg-emerald-50',
    },
  ];

  const recentOrders = [
    {
      id: 'ORD-89234123',
      customer: 'Arun Kumar',
      amount: 'Rs. 4,500',
      status: 'Delivered',
    },
    {
      id: 'ORD-89234124',
      customer: 'Priya Raj',
      amount: 'Rs. 1,200',
      status: 'Processing',
    },
    {
      id: 'ORD-89234125',
      customer: 'Karthik S',
      amount: 'Rs. 8,900',
      status: 'Delivered',
    },
    {
      id: 'ORD-89234126',
      customer: 'Deepa M',
      amount: 'Rs. 300',
      status: 'Cancelled',
    },
    {
      id: 'ORD-89234127',
      customer: 'Vijay',
      amount: 'Rs. 12,400',
      status: 'Processing',
    },
    {
      id: 'ORD-89234128',
      customer: 'Anitha',
      amount: 'Rs. 2,100',
      status: 'Delivered',
    },
  ];

  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 ga-text-gradient">
            Dashboard
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Overview of your store's performance.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
          <Clock className="w-4 h-4" />
          Updated:{' '}
          {new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {mainStats.map((stat, index) => (
          <div
            key={index}
            className="ga-panel p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-3 rounded-lg ${stat.bg} group-hover:scale-110 transition-transform`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <span
                className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${stat.trendColor}`}
              >
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">
                {stat.label}
              </p>
              <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Operational Overview */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Operational Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Inventory Health */}
          <div className="ga-panel p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-rose-100 rounded-lg">
                <Package className="w-5 h-5 text-rose-600" />
              </div>
              <h4 className="font-semibold text-slate-900">Inventory Health</h4>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-rose-50 rounded-lg border border-rose-200">
                <span className="text-sm text-rose-600 font-medium flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Low Stock
                </span>
                <span className="text-lg font-bold text-rose-600">12</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-sm text-slate-600 font-medium">
                  Out of Stock
                </span>
                <span className="text-lg font-bold text-slate-900">3</span>
              </div>
              <Link
                to="/admin/inventory"
                className="block w-full text-center text-xs font-semibold text-blue-600 hover:text-blue-700 mt-2 transition"
              >
                Manage Inventory →
              </Link>
            </div>
          </div>

          {/* User Network */}
          <div className="ga-panel p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Store className="w-5 h-5 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-slate-900">Customers</h4>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Active Customers</span>
                <span className="text-lg font-bold text-slate-900">24</span>
              </div>
              <div className="h-px bg-slate-100 my-2"></div>
              <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                <span className="text-sm text-indigo-600 font-medium flex items-center gap-2">
                  <UserCheck className="w-4 h-4" />
                  Pending Approval
                </span>
                <span className="text-lg font-bold text-indigo-600">5</span>
              </div>
              <Link
                to="/admin/customers"
                className="block w-full text-center text-xs font-semibold text-indigo-600 hover:text-indigo-700 mt-2 transition"
              >
                View Partners →
              </Link>
            </div>
          </div>

          {/* Logistics Status */}
          <div className="ga-panel p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-100 rounded-lg">
                <Truck className="w-5 h-5 text-cyan-600" />
              </div>
              <h4 className="font-semibold text-slate-900">Live Orders</h4>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Active Orders</span>
                <span className="text-lg font-bold text-slate-900">18</span>
              </div>
              <div className="h-px bg-slate-100 my-2"></div>
              <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                <span className="text-sm text-cyan-600 font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  On Delivery
                </span>
                <span className="text-lg font-bold text-cyan-600">8</span>
              </div>
              <Link
                to="/admin/orders"
                className="block w-full text-center text-xs font-semibold text-cyan-600 hover:text-cyan-700 mt-2 transition"
              >
                Track Fleet →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Charts & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Placeholder for Revenue Chart */}
        <div className="ga-panel lg:col-span-2 h-[450px] p-6 rounded-xl border border-slate-200 flex flex-col justify-center items-center text-slate-500">
          <TrendingUp className="w-12 h-12 mb-4 text-blue-600 opacity-50" />
          <p className="font-semibold text-slate-900">
            Revenue Chart Visualization
          </p>
          <p className="text-sm mt-2">
            Placeholder for dynamic chart integration
          </p>
        </div>

        {/* Recent Orders List */}
        <div className="ga-panel p-6 rounded-xl border border-slate-200 shadow-sm h-[450px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Recent Orders</h3>
            <Link
              to="/admin/orders"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline uppercase tracking-wide"
            >
              View All
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent group cursor-default"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 shadow-sm ${
                      order.status === 'Delivered'
                        ? 'bg-emerald-100 text-emerald-600'
                        : order.status === 'Processing'
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {order.customer.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 line-clamp-1">
                      {order.customer}
                    </p>
                    <p className="text-xs text-slate-500">{order.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-900">
                    {order.amount}
                  </p>
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      order.status === 'Delivered'
                        ? 'bg-emerald-100 text-emerald-600'
                        : order.status === 'Cancelled'
                          ? 'bg-rose-100 text-rose-600'
                          : 'bg-amber-100 text-amber-600'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

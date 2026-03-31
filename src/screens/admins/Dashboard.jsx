import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  ShoppingCart,
  Package,
  Users,
  Clock,
  RefreshCw,
} from 'lucide-react';

const Dashboard = () => {
  const [lastRefreshed, setLastRefreshed] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [stats, setStats] = useState({
    revenue: 124500,
    orders: 48,
    products: 156,
    avgOrder: 2593,
  });

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastRefreshed(new Date());
      setIsRefreshing(false);
      // Fictional data update
      setStats((prev) => ({
        ...prev,
        revenue: prev.revenue + Math.floor(Math.random() * 500),
      }));
    }, 1000);
  };

  // Simulation of "refresh on time" auto-updates
  useEffect(() => {
    const timer = setInterval(() => {
      // Don't update timestamp here, keep it for manual refresh as requested
      setStats((prev) => ({
        ...prev,
        revenue: prev.revenue + Math.floor(Math.random() * 100),
        orders: prev.orders + (Math.random() > 0.98 ? 1 : 0),
      }));
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const statsCards = [
    {
      label: 'Total Revenue',
      value: `₹${stats.revenue.toLocaleString()}`,
      trend: '+12.5%',
      icon: BarChart3,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      label: 'Active Orders',
      value: stats.orders,
      trend: '+4.2%',
      icon: ShoppingCart,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      label: 'Total Products',
      value: stats.products,
      trend: '+2',
      icon: Package,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      label: 'Avg Order Value',
      value: `₹${stats.avgOrder.toLocaleString()}`,
      trend: '-1.5%',
      icon: BarChart3,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <div
              className={`w-2 h-2 rounded-full ${isRefreshing ? 'bg-amber-400' : 'bg-blue-500 animate-pulse'}`}
            ></div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Live Data Feed • Last Modified: {lastRefreshed.getHours()}:
              {lastRefreshed.getMinutes().toString().padStart(2, '0')}
            </p>
          </div>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className={`ga-button-secondary border-none bg-white p-2 h-10 w-10 flex items-center justify-center rounded-xl shadow-sm hover:text-blue-600 transition-all ${isRefreshing ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <RefreshCw
            color="blue"
            size={18}
            className={isRefreshing ? 'animate-spin text-blue-600' : ''}
          />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((card, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:border-blue-200 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg ${card.bg} ${card.color}`}>
                <card.icon size={20} />
              </div>
              <span
                className={`text-[10px] font-black px-2 py-1 rounded-full ${card.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}
              >
                {card.trend}
              </span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
              {card.label}
            </p>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              {card.value}
            </h3>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
            <h2 className="text-xs font-black text-slate-900 uppercase tracking-widest">
              Real-time Activity Stream
            </h2>
            <TrendingUp size={14} className="text-blue-600" />
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-blue-400 opacity-20 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-slate-700">
                      New order{' '}
                      <span className="text-blue-600">#GA-2026-00{item}</span>{' '}
                      received from Bangalore.
                    </p>
                    <p className="text-[10px] font-medium text-slate-400 mt-0.5">
                      2 mins ago • Transaction processing
                    </p>
                  </div>
                  <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
                    View Detail
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Insights */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl shadow-slate-200">
          <h2 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-6">
            Inventory Insights
          </h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-end mb-2">
                <p className="text-xs font-black uppercase tracking-tighter text-slate-300">
                  Geyser Stock
                </p>
                <p className="text-xs font-black text-emerald-400">85% Safe</p>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 w-[85%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end mb-2">
                <p className="text-xs font-black uppercase tracking-tighter text-slate-300">
                  Juicer Demand
                </p>
                <p className="text-xs font-black text-blue-400">High</p>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 w-[92%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end mb-2">
                <p className="text-xs font-black uppercase tracking-tighter text-slate-300">
                  System Uptime
                </p>
                <p className="text-xs font-black text-amber-400">99.9%</p>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 w-[99.9%]"></div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Clock size={16} className="text-blue-400" />
              <p className="text-[10px] font-black uppercase tracking-widest">
                Next Auto-Report
              </p>
            </div>
            <p className="text-[10px] font-medium text-slate-400">
              Scheduled for Today, 23:59 IST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

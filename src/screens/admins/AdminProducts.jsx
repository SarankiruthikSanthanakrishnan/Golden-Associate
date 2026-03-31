import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, ArrowUpDown, Image as ImageIcon } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const products = [
    { id: 'PROD-01', sku: 'SKU-HEAT-001', name: 'Instant Geyser MCB Model', category: 'Water Heaters', price: 'Rs. 2,675', stock: 45, status: 'In Stock' },
    { id: 'PROD-02', sku: 'SKU-HEAT-002', name: 'Sun Instant Geyser', category: 'Water Heaters', price: 'Rs. 2,275', stock: 12, status: 'Low Stock' },
    { id: 'PROD-03', sku: 'SKU-KITO-001', name: '4 in 1 Kitchen Set', category: 'Kitchen Tools', price: 'Rs. 5,975', stock: 120, status: 'In Stock' },
    { id: 'PROD-04', sku: 'SKU-KAPP-001', name: 'Amazing Health Boiler', category: 'Kitchen Appliances', price: 'Rs. 3,575', stock: 8, status: 'Low Stock' },
    { id: 'PROD-05', sku: 'SKU-KAPP-002', name: 'Multimaker Grill', category: 'Kitchen Appliances', price: 'Rs. 3,975', stock: 65, status: 'In Stock' },
    { id: 'PROD-06', sku: 'SKU-KITO-002', name: 'Electric Chopper', category: 'Kitchen Tools', price: 'Rs. 1,600', stock: 0, status: 'Out of Stock' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterCategory === 'all' || product.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Stock': return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'Low Stock': return 'bg-amber-50 text-amber-600 border-amber-200';
      case 'Out of Stock': return 'bg-rose-50 text-rose-600 border-rose-200';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 ga-text-gradient">Products</h2>
          <p className="text-sm text-slate-500 mt-1">Manage catalog, SKUs, and inventory.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/20">
          <Plus className="w-5 h-5" />
          Add Product
        </button>
      </div>

      <div className="ga-panel rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by name, ID, or SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white/95 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-inner"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex items-center w-full sm:w-auto">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full sm:w-auto pl-9 pr-8 py-2 bg-white/95 border border-slate-200 rounded-xl text-sm text-slate-600 focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer shadow-inner"
              >
                <option value="all">All Categories</option>
                <option value="Water Heaters">Water Heaters</option>
                <option value="Kitchen Tools">Kitchen Tools</option>
                <option value="Kitchen Appliances">Kitchen Appliances</option>
                <option value="Services">Services</option>
                <option value="Spare Parts">Spare Parts</option>
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
                  <div className="flex items-center gap-2">Product Details <ArrowUpDown className="w-3 h-3 text-slate-500 group-hover:text-blue-600" /></div>
                </th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-slate-600">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
                          <ImageIcon className="w-5 h-5 opacity-50" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">{product.name}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-slate-500">{product.id}</span>
                            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                            <span className="text-[10px] uppercase font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                              {product.sku}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {product.price}
                    </td>
                    <td className="px-6 py-4 text-slate-500">
                      <span className="bg-slate-50 px-2.5 py-1 rounded-full text-xs font-medium border border-slate-200">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-600">
                      {product.stock}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border ${getStatusColor(product.status)}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-slate-500">
                    No products found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 bg-slate-50">
          <p>Showing {filteredProducts.length} of {products.length} products</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProducts;

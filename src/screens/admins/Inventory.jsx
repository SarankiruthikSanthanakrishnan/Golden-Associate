"use client";
import React, { useState } from 'react';
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Download
} from 'lucide-react';
import Image from 'next/image';
import { productData } from '../../data/data';

const Inventory = () => {
  const [products, setProducts] = useState(productData);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Inventory Management</h1>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Stock: {products.length} Professional Tools</p>
        </div>
        <div className="flex gap-3">
          <button className="ga-button-secondary border-slate-200 gap-2 px-4 py-2.5 text-xs font-bold bg-white text-slate-600">
            <Download size={16} /> Export CSV
          </button>
          <button className="ga-button-primary gap-2 px-6 py-2.5 text-xs font-black uppercase tracking-widest">
            <Plus size={16} /> Add Product
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Filters & Search */}
        <div className="p-4 border-b border-slate-50 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search by SKU, Name or Category..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-xs font-medium focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all"
            />
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg transition-colors border border-slate-200"><Filter size={18} /></button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Product Info</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">SKU</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Price</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-50 rounded-lg p-1 shrink-0 border border-slate-100 relative overflow-hidden">
                        <Image src={product.image} alt={product.name} fill sizes="40px" className="object-contain mix-blend-multiply p-1" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-900 leading-tight">{product.name}</p>
                        <p className="text-[9px] font-medium text-slate-400 mt-0.5 line-clamp-1">{product.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-bold font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">GA-SKU-{1000 + product.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-tighter">{product.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-black text-slate-900">₹{product.price.toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><Edit size={16} /></button>
                      <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors"><Trash2 size={16} /></button>
                      <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors"><ExternalLink size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Info */}
        <div className="px-6 py-4 border-t border-slate-50 flex items-center justify-between bg-slate-50/30">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Showing 1 to {products.length} of {products.length} results</p>
          <div className="flex gap-1">
            <button className="p-1.5 text-slate-300 cursor-not-allowed"><ChevronLeft size={18} /></button>
            <button className="p-1.5 text-slate-900 bg-white border border-slate-200 rounded-lg shadow-sm"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;

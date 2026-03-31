import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { inventoryItems } from '../../data/adminData';

const STATUS_CLASS = {
  'In Stock': 'bg-emerald-100 text-emerald-600 border-emerald-200',
  'Low Stock': 'bg-amber-100 text-amber-600 border-amber-200',
};

const AdminInventory = () => {
  const lowStockCount = inventoryItems.filter(
    (item) => item.status === 'Low Stock'
  ).length;

  return (
    <AdminLayout
      pageTitle="Inventory"
      pageSubtitle="Track stock levels for all frontend product listings"
    >
      <section className="grid gap-5 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-5 shadow-sm hover:border-blue-200 transition duration-300">
          <p className="text-sm text-slate-500">Total SKUs</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">
            {inventoryItems.length}
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-5 shadow-sm hover:border-amber-200 transition duration-300">
          <p className="text-sm text-slate-500">Low Stock</p>
          <p className="mt-2 text-3xl font-bold text-amber-600">
            {lowStockCount}
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-5 shadow-sm hover:border-emerald-200 transition duration-300">
          <p className="text-sm text-slate-500">Healthy Stock</p>
          <p className="mt-2 text-3xl font-bold text-emerald-600">
            {inventoryItems.length - lowStockCount}
          </p>
        </article>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white backdrop-blur-sm shadow-sm overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 p-5">
          <h2 className="text-base font-semibold text-slate-900">
            Inventory Records
          </h2>
          <button className="rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 px-4 py-2 text-sm font-bold text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition duration-300">
            Add SKU
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-180 text-left text-sm">
            <thead className="bg-white/90 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-4 font-semibold">SKU</th>
                <th className="px-5 py-4 font-semibold">Product</th>
                <th className="px-5 py-4 font-semibold">Category</th>
                <th className="px-5 py-4 font-semibold">Price</th>
                <th className="px-5 py-4 font-semibold">Stock</th>
                <th className="px-5 py-4 font-semibold">Reorder Level</th>
                <th className="px-5 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => (
                <tr
                  key={item.sku}
                  className="border-t border-slate-100 hover:bg-slate-50 transition"
                >
                  <td className="px-5 py-4 font-medium text-slate-900">
                    {item.sku}
                  </td>
                  <td className="px-5 py-4 text-slate-600">{item.name}</td>
                  <td className="px-5 py-4 text-slate-600">{item.category}</td>
                  <td className="px-5 py-4 text-blue-700 font-medium">
                    Rs. {item.price.toLocaleString()}
                  </td>
                  <td className="px-5 py-4 text-slate-600">{item.stock}</td>
                  <td className="px-5 py-4 text-slate-500">
                    {item.reorderLevel}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${STATUS_CLASS[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminInventory;

import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { galleryUpdateQueue } from '../../data/adminData';

const STATUS_CLASS = {
  Published: 'bg-emerald-100 text-emerald-600 border-emerald-200',
  'Pending Review': 'bg-amber-100 text-amber-600 border-amber-200',
};

const AdminGalleryUpdates = () => {
  return (
    <AdminLayout
      pageTitle="Gallery Updates"
      pageSubtitle="Review, publish, and manage gallery images shown on frontend"
    >
      <section className="rounded-xl border border-slate-200 bg-white backdrop-blur-sm shadow-sm overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 p-5">
          <h2 className="text-base font-semibold text-slate-900">
            Gallery Update Queue
          </h2>
          <button className="rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 px-4 py-2.5 text-sm font-bold text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition duration-300">
            Upload Images
          </button>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryUpdateQueue.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-bold text-slate-900">{item.title}</p>
                <div className="mt-2 space-y-1">
                  <p className="text-xs text-slate-500">
                    Section:{' '}
                    <span className="text-slate-600">{item.section}</span>
                  </p>
                  <p className="text-xs text-slate-500">
                    Owner: <span className="text-slate-600">{item.owner}</span>
                  </p>
                  <p className="text-xs text-slate-500">
                    Updated:{' '}
                    <span className="text-slate-600">{item.updatedAt}</span>
                  </p>
                </div>
                <span
                  className={`mt-3 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${STATUS_CLASS[item.status]}`}
                >
                  {item.status}
                </span>
                <button className="mt-4 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition">
                  Edit Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminGalleryUpdates;

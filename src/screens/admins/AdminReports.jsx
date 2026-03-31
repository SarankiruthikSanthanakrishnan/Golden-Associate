import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { galleryUpdateQueue } from '../../data/adminData';

const REVIEW_CLASS = {
  Approved: 'bg-emerald-100 text-emerald-600 border-emerald-200',
  Pending: 'bg-amber-100 text-amber-600 border-amber-200',
};

const AdminReports = () => {
  const approvedCount = galleryUpdateQueue.filter(
    (item) => item.review === 'Approved'
  ).length;

  return (
    <AdminLayout
      pageTitle="Gallery Asset Manager"
      pageSubtitle="Control all gallery assets rendered in frontend pages"
    >
      <section className="grid gap-5 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-5 shadow-sm hover:border-blue-200 transition duration-300">
          <p className="text-sm text-slate-500">Total Gallery Assets</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">
            {galleryUpdateQueue.length}
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-5 shadow-sm hover:border-emerald-200 transition duration-300">
          <p className="text-sm text-slate-500">Approved</p>
          <p className="mt-2 text-3xl font-bold text-emerald-600">
            {approvedCount}
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-5 shadow-sm hover:border-amber-200 transition duration-300">
          <p className="text-sm text-slate-500">Pending Review</p>
          <p className="mt-2 text-3xl font-bold text-amber-600">
            {galleryUpdateQueue.length - approvedCount}
          </p>
        </article>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white backdrop-blur-sm p-6 shadow-sm">
        <h2 className="mb-6 text-base font-semibold text-slate-900">
          Gallery Records
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryUpdateQueue.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={`Gallery ${item.id}`}
                  className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-bold text-slate-900">
                  Asset #{item.id}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Album: <span className="text-slate-600">{item.album}</span>
                </p>
                <span
                  className={`mt-3 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${REVIEW_CLASS[item.review]}`}
                >
                  {item.review}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminReports;

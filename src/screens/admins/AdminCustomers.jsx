import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { serviceRecords } from '../../data/adminData';
import { officeBranches, supportSlots } from '../../data/companyInfo';

const STATUS_CLASS = {
  Active: 'bg-emerald-100 text-emerald-600 border-emerald-200',
  Review: 'bg-amber-100 text-amber-600 border-amber-200',
};

const AdminCustomers = () => {
  return (
    <AdminLayout
      pageTitle="Services and Reach Us"
      pageSubtitle="Manage service cards and contact details shown in frontend"
    >
      <section className="rounded-xl border border-slate-200 bg-white backdrop-blur-sm shadow-sm overflow-hidden">
        <div className="border-b border-slate-200 p-5">
          <h2 className="text-base font-semibold text-slate-900">
            Service Records
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-180 text-left text-sm">
            <thead className="bg-white/90 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-4 font-semibold">ID</th>
                <th className="px-5 py-4 font-semibold">Service Name</th>
                <th className="px-5 py-4 font-semibold">Owner</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {serviceRecords.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-slate-100 hover:bg-slate-50 transition"
                >
                  <td className="px-5 py-4 font-medium text-slate-900">
                    #{item.id}
                  </td>
                  <td className="px-5 py-4 text-slate-600">{item.service}</td>
                  <td className="px-5 py-4 text-slate-600">{item.owner}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${STATUS_CLASS[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        {officeBranches.map((branch) => (
          <article
            key={branch.city}
            className="rounded-xl border border-slate-200 bg-white backdrop-blur-sm p-6 shadow-sm hover:border-blue-200 transition"
          >
            <h3 className="text-base font-semibold text-slate-900">
              {branch.city}
            </h3>
            <p className="mt-3 text-sm text-slate-600">{branch.address}</p>
            <p className="mt-2 text-sm text-slate-500">Phone: <span className="text-slate-600">{branch.phone}</span></p>
            <p className="mt-1 text-sm text-slate-500">Email: <span className="text-slate-600">{branch.email}</span></p>
            <div className="mt-3 space-y-1 text-xs text-slate-500">
              {branch.regionContacts.map((contact) => (
                <p key={contact}>{contact}</p>
              ))}
            </div>
          </article>
        ))}

        <article className="rounded-xl border border-slate-200 bg-white backdrop-blur-sm p-6 shadow-sm hover:border-cyan-200 transition">
          <h3 className="text-base font-semibold text-slate-900">
            Working Hours
          </h3>
          <ul className="mt-4 space-y-2">
            {supportSlots.map((slot) => (
              <li
                key={slot.day}
                className="flex items-center justify-between rounded-lg bg-slate-50 border border-slate-100 px-4 py-3 text-sm hover:bg-slate-100 transition"
              >
                <span className="font-medium text-slate-700">{slot.day}</span>
                <span className="text-blue-700 font-medium">{slot.time}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </AdminLayout>
  );
};

export default AdminCustomers;

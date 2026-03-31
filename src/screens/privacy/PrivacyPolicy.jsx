import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="ga-container pb-12 pt-10">
      <div className="max-w-5xl mx-auto p-6 md:p-10 leading-7 ga-fade-up text-slate-600 ga-panel border border-slate-200 bg-white/90 backdrop-blur-md">
        {/* Title */}
        <h1 className="text-3xl font-extrabold mb-8 text-center text-slate-900 ga-text-gradient">Privacy Policy</h1>

        <p className="mb-4">
          This Privacy Policy outlines how <strong className="text-blue-600">Golden Associate</strong>{' '}
          collects, uses, discloses, and protects the personal information of
          users.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-bold mt-8 mb-3 text-slate-900">
          1. Information We Collect
        </h2>

        <p className="mb-2">
          <strong className="text-blue-600">a. Personal Information:</strong> We may collect personal
          information such as name, address, email address, and phone number when
          you register, place an order, or subscribe.
        </p>

        <p className="mb-2">
          <strong className="text-blue-600">b. Payment Information:</strong> Payment details are securely
          processed through a payment gateway. We do not store your payment
          information.
        </p>

        <p className="mb-4">
          <strong className="text-blue-600">c. Usage Information:</strong> We collect data like pages
          visited, products viewed, and interactions on our website.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-bold mt-8 mb-3 text-slate-900">
          2. How We Use Your Information
        </h2>

        <p className="mb-2">
          <strong className="text-blue-600">a. Order Fulfillment:</strong> To process orders and provide
          support.
        </p>

        <p className="mb-2">
          <strong className="text-blue-600">b. Marketing:</strong> To send promotional emails (only with
          your consent).
        </p>

        <p className="mb-4">
          <strong className="text-blue-600">c. Website Improvement:</strong> To analyze and improve our
          services.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-bold mt-8 mb-3 text-slate-900">
          3. Information Sharing
        </h2>

        <p className="mb-2">
          <strong className="text-blue-600">a. Service Providers:</strong> We may share data with trusted
          third parties.
        </p>

        <p className="mb-4">
          <strong className="text-blue-600">b. Legal Compliance:</strong> We may disclose information if
          required by law.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-bold mt-8 mb-3 text-slate-900">4. Cookies</h2>
        <p className="mb-4">
          We use cookies to enhance user experience and analyze website traffic.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-bold mt-8 mb-3 text-slate-900">5. Your Choices</h2>
        <p className="mb-4">
          You can opt out of promotional emails or adjust your account settings.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-bold mt-8 mb-3 text-slate-900">6. Data Security</h2>
        <p className="mb-4">
          We use industry-standard measures to protect your data, but no system is
          100% secure.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-bold mt-8 mb-3 text-slate-900">7. Third-Party Links</h2>
        <p className="mb-4">
          We are not responsible for external website privacy practices.
        </p>

        {/* Section 8 */}
        <h2 className="text-xl font-bold mt-8 mb-3 text-slate-900">8. Children's Privacy</h2>
        <p className="mb-4">
          Our services are not intended for children under 13 years.
        </p>

        {/* Section 9 */}
        <h2 className="text-xl font-bold mt-8 mb-3 text-slate-900">9. Changes to Policy</h2>
        <p className="mb-4">
          We may update this policy. Changes will be posted on this page.
        </p>

        {/* Section 10 */}
        <h2 className="text-xl font-bold mt-8 mb-3 text-slate-900">
          10. Contact Information
        </h2>

        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mt-4 backdrop-blur-sm">
          <p>
            <strong className="text-slate-900">Golden Associate</strong>
          </p>
          <p className="mt-1">No 8/36, Loganathan Nagar, 1st Street</p>
          <p>Choolaimedu, Chennai - 600094</p>
          <p className="mt-2 text-blue-700">📞 9986683173</p>
          <p className="text-blue-700">📧 karthiprakashwin@gmail.com</p>
        </div>

        {/* Footer */}
        <p className="mt-10 text-sm text-slate-500 text-center">
          Effective Date: 03-06-2026
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

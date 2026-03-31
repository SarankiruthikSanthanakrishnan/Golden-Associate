import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

const ReachUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for contacting us! We will get back to you shortly.');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="ga-container max-w-5xl">
        <div className="mb-10 animate-fade-in text-center">
          <h1 className="text-3xl font-black text-slate-900 mb-2">Reach <span className="ga-text-gradient">Us</span></h1>
          <p className="text-slate-500 text-sm font-medium">Have a question? We are here to help you 7 days a week.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Details Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Main Office */}
            <div className="ga-card p-6">
              <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" /> Main Office
              </h3>
              <p className="text-xs font-medium text-slate-600 leading-relaxed mb-4">
                52, 18th cross, 15th main, Kurubharahalli, JC Nagar, Bangalore.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs">
                  <Mail size={14} className="text-slate-400" />
                  <a href="mailto:karthiprakashwin@gmail.com" className="font-bold text-slate-900">karthiprakashwin@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Phone size={14} className="text-slate-400" />
                  <a href="tel:+919986683173" className="font-bold text-slate-900">+91 99866 83173</a>
                </div>
              </div>
            </div>

            {/* Regional Support */}
            <div className="ga-card p-6">
              <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck size={16} className="text-blue-600" /> Regional Support
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Karnataka</p>
                  <p className="text-xs font-bold text-slate-700">9361122349, 9663584500, 9986457992</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Tamilnadu</p>
                  <p className="text-xs font-bold text-slate-700">8667632377, 9986683173, 9361122349, 8428993366</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">AP & Telangana</p>
                  <p className="text-xs font-bold text-slate-700">8778023083, 9361122349</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="ga-card p-6 border-l-4 border-l-blue-600">
              <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
                <Clock size={16} className="text-blue-600" /> Working Hours
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-xs">
                  <span className="text-slate-500 font-medium">Monday - Sunday</span>
                  <span className="font-bold text-slate-900">09:02 AM - 05:02 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <div className="ga-card p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Get In Touch</h3>
                  <p className="text-xs font-medium text-slate-500">Submit your queries and we will convey the details.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="gap-6 grid">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Email Id</label>
                    <input 
                      type="email" 
                      required
                      placeholder="email@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Details</label>
                    <span className="text-[10px] font-bold text-slate-400">{formData.details.length}/300</span>
                  </div>
                  <textarea 
                    required
                    maxLength={300}
                    rows={6}
                    placeholder="Enter the details you want to convey..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:outline-none focus:border-blue-500 transition-all resize-none"
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                  ></textarea>
                  <p className="text-[10px] text-slate-400 mt-2 font-medium">You can use up to 300 characters.</p>
                </div>
                <button type="submit" className="ga-button-primary w-full py-4 uppercase tracking-widest gap-2">
                  Submit Details <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;

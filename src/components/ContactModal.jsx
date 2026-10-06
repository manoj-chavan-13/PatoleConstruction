import React, { useState } from 'react';
import { X, Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Residential Construction',
    location: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E8E5DF] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#182026] flex items-center justify-center transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-12 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#FFF4ED] text-[#EB5A1E] flex items-center justify-center mb-5">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-heading text-3xl font-extrabold text-[#182026] mb-2">
              Thank You!
            </h3>
            <p className="text-[16px] text-[#4B5563] max-w-md">
              Your inquiry has been received. Our senior RCC project engineer will connect with you within 2 business hours.
            </p>
          </div>
        ) : (
          <div className="p-7 sm:p-9">
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.16em] text-[#EB5A1E] uppercase mb-1">
                <span className="w-4 h-[2px] bg-[#EB5A1E]" />
                <span>Let's Build Together</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#182026]">
                Get a Free Project Consultation
              </h3>
              <p className="text-[14px] text-[#6B7280] mt-1">
                Share your construction requirements and our team will provide a tailored plan & cost estimate.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#374151] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D1D5DB] focus:outline-none focus:border-[#EB5A1E] focus:ring-2 focus:ring-[#EB5A1E]/20 text-[14px]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#374151] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D1D5DB] focus:outline-none focus:border-[#EB5A1E] focus:ring-2 focus:ring-[#EB5A1E]/20 text-[14px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#374151] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. contact@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D1D5DB] focus:outline-none focus:border-[#EB5A1E] focus:ring-2 focus:ring-[#EB5A1E]/20 text-[14px]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#374151] mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D1D5DB] focus:outline-none focus:border-[#EB5A1E] focus:ring-2 focus:ring-[#EB5A1E]/20 text-[14px] bg-white"
                  >
                    <option>Residential Construction</option>
                    <option>Commercial Construction</option>
                    <option>RCC & Structural Works</option>
                    <option>Renovation & Interior Works</option>
                    <option>Turnkey Construction Project</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#374151] mb-1">
                  Project Location / City
                </label>
                <input
                  type="text"
                  placeholder="e.g. Nashik / Pune / Mumbai"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D1D5DB] focus:outline-none focus:border-[#EB5A1E] focus:ring-2 focus:ring-[#EB5A1E]/20 text-[14px]"
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#374151] mb-1">
                  Project Details / Requirements
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your plot size, timeline or specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D1D5DB] focus:outline-none focus:border-[#EB5A1E] focus:ring-2 focus:ring-[#EB5A1E]/20 text-[14px]"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#EB5A1E] hover:bg-[#D4470F] text-white text-[15px] font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

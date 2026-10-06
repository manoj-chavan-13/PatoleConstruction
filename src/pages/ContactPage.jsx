import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  User,
  Building2,
  FileText,
  MessageSquare,
  ArrowRight,
  HardHat,
  ShieldCheck,
  ChevronDown,
  Info,
} from "lucide-react";

// Social Icons
const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="w-4 h-4 fill-none stroke-current stroke-2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const projectParam = searchParams.get("project") || "";
  const serviceParam = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Residential Construction",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (projectParam) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry regarding ${projectParam}`,
        message: `Hello Patole Constructions, I am interested in building a project similar to "${projectParam}". Please get in touch to discuss site feasibility, planning, and cost estimates.`,
      }));
    } else if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        projectType: serviceParam.includes("Commercial")
          ? "Commercial Complex / Office"
          : serviceParam.includes("RCC")
          ? "Structural Strengthening & Repair"
          : "Residential Construction",
        subject: `Inquiry about ${serviceParam}`,
        message: `Hello Patole Constructions, I would like to consult on your ${serviceParam} services.`,
      }));
    }
  }, [projectParam, serviceParam]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const scrollToForm = () => {
    const el = document.getElementById("contact-form-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="contact-page bg-[#FAF7F2] text-[#172027] overflow-x-hidden selection:bg-[#EB5A1E] selection:text-white">
      {/* ================================================================
          1. COMPACT HERO SECTION with contact-hero-bg.png (Plain BG, Zero Overlay)
      ================================================================ */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 border-b border-[#E8E2D8] overflow-hidden bg-[#FAF7F2]">
        {/* Background Desk & Hardhat Architectural Image - Plane BG with Zero Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/assets/images/contact-hero-bg.png"
            alt="Patole Construction Office Desk"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-6 h-[2px] bg-[#EB5A1E] inline-block" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#EB5A1E] uppercase">
                Contact Us
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-[#172027] leading-[1.12] mb-3">
              Let&apos;s Build <span className="text-[#EB5A1E]">Together.</span>
            </h1>

            <p className="text-[14px] sm:text-[15px] text-[#424F5A] leading-relaxed max-w-[500px] mb-6 font-medium">
              Have a project or question? Connect with our engineering team for honest advice and timely estimates.
            </p>

            {/* Minimal Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-sm border border-[#E8E2D8] text-[12px] font-bold text-[#172027] shadow-xs">
                <Clock className="w-4 h-4 text-[#EB5A1E]" />
                <span>24h Response</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-sm border border-[#E8E2D8] text-[12px] font-bold text-[#172027] shadow-xs">
                <HardHat className="w-4 h-4 text-[#EB5A1E]" />
                <span>Expert Guidance</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-sm border border-[#E8E2D8] text-[12px] font-bold text-[#172027] shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#EB5A1E]" />
                <span>Transparent Process</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          2. MAIN SECTION: SEND US A MESSAGE & GET IN TOUCH (White Background, Seamless Editorial Layout)
      ================================================================ */}
      <section id="contact-form-section" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-[#E8E2D8]">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Professional Seamless Form (7 cols - No Card Box) */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between gap-4 mb-2">
                <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#172027] tracking-tight">
                  Send Us a Message
                </h2>
                <span className="text-[11px] font-semibold text-[#8C98A4] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E8E2D8]">
                  * Required fields
                </span>
              </div>
              <p className="text-xs sm:text-[14px] text-[#6B7580] mb-8 leading-relaxed">
                Fill in the details below and our lead civil engineering team will get in touch with you.
              </p>

              {submitted ? (
                <div className="py-14 text-center rounded-2xl bg-[#FAF7F2] border border-[#E8E2D8] p-8">
                  <div className="w-16 h-16 rounded-full bg-[#FFF1E8] border border-[#FED7C0] text-[#EB5A1E] flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-black text-[#172027] mb-2">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D6770] max-w-[420px] mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-[#172027]">{formData.name}</strong>. Our project director has received your request and will call you back within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        projectType: "Residential Construction",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#EB5A1E] hover:underline cursor-pointer"
                  >
                    <span>Send Another Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Context Banner if routed from a project or service */}
                  {(projectParam || serviceParam) && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-[#FFF6F0] border border-[#EB5A1E]/30 text-[#172027]">
                      <div className="w-8 h-8 rounded-lg bg-[#EB5A1E] text-white flex items-center justify-center shrink-0">
                        <Info className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#EB5A1E]">
                          {projectParam ? "Selected Project Reference" : "Selected Service Inquiry"}
                        </span>
                        <p className="text-xs sm:text-[13.5px] font-bold text-[#172027] truncate">
                          {projectParam || serviceParam}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-[#4B5660] uppercase tracking-wider mb-2">
                        Full Name <span className="text-[#EB5A1E]">*</span>
                      </label>
                      <div className="relative group">
                        <User className="w-4 h-4 text-[#8C98A4] group-focus-within:text-[#EB5A1E] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] focus:bg-white text-xs sm:text-[13.5px] text-[#172027] placeholder:text-[#9AA4AF] focus:outline-none focus:border-[#EB5A1E] focus:ring-2 focus:ring-[#EB5A1E]/15 transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#4B5660] uppercase tracking-wider mb-2">
                        Phone Number <span className="text-[#EB5A1E]">*</span>
                      </label>
                      <div className="relative group">
                        <Phone className="w-4 h-4 text-[#8C98A4] group-focus-within:text-[#EB5A1E] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] focus:bg-white text-xs sm:text-[13.5px] text-[#172027] placeholder:text-[#9AA4AF] focus:outline-none focus:border-[#EB5A1E] focus:ring-2 focus:ring-[#EB5A1E]/15 transition-all shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-[#4B5660] uppercase tracking-wider mb-2">
                        Email Address <span className="text-[#EB5A1E]">*</span>
                      </label>
                      <div className="relative group">
                        <Mail className="w-4 h-4 text-[#8C98A4] group-focus-within:text-[#EB5A1E] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                        <input
                          type="email"
                          required
                          placeholder="rahul@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] focus:bg-white text-xs sm:text-[13.5px] text-[#172027] placeholder:text-[#9AA4AF] focus:outline-none focus:border-[#EB5A1E] focus:ring-2 focus:ring-[#EB5A1E]/15 transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#4B5660] uppercase tracking-wider mb-2">
                        Project Type
                      </label>
                      <div className="relative group">
                        <Building2 className="w-4 h-4 text-[#8C98A4] group-focus-within:text-[#EB5A1E] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] focus:bg-white text-xs sm:text-[13.5px] text-[#172027] focus:outline-none focus:border-[#EB5A1E] focus:ring-2 focus:ring-[#EB5A1E]/15 transition-all appearance-none cursor-pointer shadow-2xs"
                        >
                          <option>Residential Construction</option>
                          <option>Commercial Complex / Office</option>
                          <option>Industrial Shed / PEB</option>
                          <option>Structural Strengthening &amp; Repair</option>
                          <option>Turnkey Civil Project</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#8C98A4] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Subject */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#4B5660] uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <div className="relative group">
                      <FileText className="w-4 h-4 text-[#8C98A4] group-focus-within:text-[#EB5A1E] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                      <input
                        type="text"
                        placeholder="e.g. New 4BHK Villa Construction Quotation"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] focus:bg-white text-xs sm:text-[13.5px] text-[#172027] placeholder:text-[#9AA4AF] focus:outline-none focus:border-[#EB5A1E] focus:ring-2 focus:ring-[#EB5A1E]/15 transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Row 4: Message Textarea */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#4B5660] uppercase tracking-wider mb-2">
                      Project Scope / Requirements <span className="text-[#EB5A1E]">*</span>
                    </label>
                    <div className="relative group">
                      <MessageSquare className="w-4 h-4 text-[#8C98A4] group-focus-within:text-[#EB5A1E] absolute left-4 top-4 pointer-events-none transition-colors" />
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your plot location, square footage, expected timeline or any specific drawings available..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] focus:bg-white text-xs sm:text-[13.5px] text-[#172027] placeholder:text-[#9AA4AF] focus:outline-none focus:border-[#EB5A1E] focus:ring-2 focus:ring-[#EB5A1E]/15 transition-all resize-none shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Submit Button & Assurance */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2.5 bg-[#EB5A1E] hover:bg-[#D94F16] text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <span className="text-[11px] text-[#7C8894] flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#EB5A1E]" />
                      Your details are protected &amp; kept confidential
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Direct Contact Section (5 cols - Seamless, No Card Box) */}
            <div className="lg:col-span-5 lg:pl-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-5 h-[2px] bg-[#EB5A1E] inline-block" />
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#EB5A1E] uppercase">
                    Direct Contact
                  </span>
                </div>

                <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#172027] tracking-tight mb-2">
                  Get in Touch
                </h2>
                <p className="text-xs sm:text-[14px] text-[#6B7580] mb-8 leading-relaxed">
                  You can also reach our engineering heads directly through the channels below. We&apos;re always available for site visits and consults.
                </p>

                {/* 3 Channels (Clean List, Exact Reference Layout without Inner Cards) */}
                <div className="space-y-7">
                  {/* Call Us */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFF2EA] border border-[#FCE1D2] flex items-center justify-center text-[#EB5A1E] shrink-0 mt-0.5 shadow-2xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#7C8894]">
                        Call Us
                      </div>
                      <a
                        href="tel:+919876543210"
                        className="font-heading font-extrabold text-[17px] text-[#172027] hover:text-[#EB5A1E] transition-colors block mt-0.5"
                      >
                        +91 98765 43210
                      </a>
                      <div className="text-xs text-[#7C8894] mt-0.5">
                        Mon - Sat, 9:00 AM - 6:00 PM
                      </div>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFF2EA] border border-[#FCE1D2] flex items-center justify-center text-[#EB5A1E] shrink-0 mt-0.5 shadow-2xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#7C8894]">
                        Email Us
                      </div>
                      <a
                        href="mailto:info@vraconstructions.in"
                        className="font-heading font-extrabold text-[16px] text-[#172027] hover:text-[#EB5A1E] transition-colors block mt-0.5 break-all"
                      >
                        info@vraconstructions.in
                      </a>
                      <div className="text-xs text-[#7C8894] mt-0.5">
                        We typically respond within 24 hours
                      </div>
                    </div>
                  </div>

                  {/* Visit Our Office */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFF2EA] border border-[#FCE1D2] flex items-center justify-center text-[#EB5A1E] shrink-0 mt-0.5 shadow-2xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#7C8894]">
                        Visit Our Office
                      </div>
                      <div className="font-heading font-bold text-[14.5px] text-[#172027] mt-0.5 leading-snug">
                        Plot No. 12, MIDC, Nashik,
                        <br />
                        Maharashtra - 422010
                      </div>
                      <div className="text-xs text-[#7C8894] mt-0.5">
                        Mon - Sat, 9:00 AM - 6:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="pt-8 mt-8 border-t border-[#E8E2D8] flex items-center gap-4">
                <span className="text-xs font-bold text-[#6B7580]">Follow Us</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E2DBD0] flex items-center justify-center text-[#172027] hover:bg-[#EB5A1E] hover:text-white hover:border-[#EB5A1E] shadow-2xs transition-all"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E2DBD0] flex items-center justify-center text-[#172027] hover:bg-[#EB5A1E] hover:text-white hover:border-[#EB5A1E] shadow-2xs transition-all"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E2DBD0] flex items-center justify-center text-[#172027] hover:bg-[#EB5A1E] hover:text-white hover:border-[#EB5A1E] shadow-2xs transition-all"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E2DBD0] flex items-center justify-center text-[#172027] hover:bg-[#EB5A1E] hover:text-white hover:border-[#EB5A1E] shadow-2xs transition-all"
                    aria-label="YouTube"
                  >
                    <YoutubeIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          3. OUR LOCATION: FIND US EASILY
      ================================================================ */}
      <section className="py-14 sm:py-18 bg-[#FAF7F2] border-t border-[#E8E2D8]">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Map Preview (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[340px] sm:h-[400px] rounded-[24px] overflow-hidden border border-[#E2DBD0] shadow-sm bg-[#EBE5DB]">
                {/* Embedded Responsive Google Map of Nashik */}
                <iframe
                  title="Patole Constructions Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.26415053428!2d73.7210793!3d19.9974533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddee0137533515%3A0x892a065db7204b7b!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Office Marker Badge Overlay on Map */}
                <div className="absolute top-5 left-5 z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white shadow-md flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EB5A1E] animate-pulse" />
                  <span className="font-heading font-extrabold text-xs text-[#172027]">
                    Patole Constructions &bull; Nashik Office
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Location Details & Directions Button (5 cols) */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-2.5">
                <span className="w-7 h-[2px] bg-[#EB5A1E] inline-block" />
                <span className="text-[11px] font-bold tracking-[0.24em] text-[#EB5A1E] uppercase">
                  Our Location
                </span>
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#172027] mb-3">
                Find Us Easily
              </h2>

              <p className="text-xs sm:text-sm text-[#556068] leading-relaxed mb-6">
                Located in the heart of Nashik, our office is easily accessible for project discussions, consultations and site visits.
              </p>

              {/* Highlighted Address Card */}
              <div className="bg-[#FFF9F5] border border-[#F8E2D2] rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF1E8] border border-[#FCE0D0] flex items-center justify-center text-[#EB5A1E] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#172027]">
                      Patole Constructions
                    </h3>
                    <p className="text-xs text-[#6B7580] mt-0.5">
                      Plot No. 12, MIDC, Nashik, Maharashtra - 422010
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=MIDC,Nashik,Maharashtra"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-[#EB5A1E]/30 flex items-center justify-center text-[#EB5A1E] hover:bg-[#EB5A1E] hover:text-white transition-all shrink-0"
                  aria-label="View on Google Maps"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Get Directions Button */}
              <a
                href="https://maps.google.com/?q=MIDC,Nashik,Maharashtra"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#EB5A1E] text-[#EB5A1E] hover:bg-[#EB5A1E] hover:text-white transition-all text-xs font-bold cursor-pointer"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================
          4. BOTTOM DARK BANNER: READY TO START YOUR NEXT PROJECT?
      ================================================================ */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#11171C] text-white overflow-hidden">
        {/* Architectural Villa Background Photo with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-25"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/images/clean-project-featured.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1014]/95 via-[#0C1014]/85 to-[#0C1014]/70" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-[700px]">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-7 h-[2px] bg-[#EB5A1E] inline-block" />
                <span className="text-[11px] font-bold tracking-[0.24em] text-[#EB5A1E] uppercase">
                  Let&apos;s Turn Your Ideas Into Reality
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12] text-white mb-3.5">
                Ready to Start <br />
                Your <span className="text-[#EB5A1E]">Next Project?</span>
              </h2>

              <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-[560px]">
                Whether it&apos;s a home, a commercial space, or an industrial facility, we&apos;re here to make it happen with quality, safety and transparency.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-2.5 bg-[#EB5A1E] hover:bg-[#D94F16] text-white text-xs sm:text-sm font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

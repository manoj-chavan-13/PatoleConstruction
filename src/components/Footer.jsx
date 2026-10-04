import React from "react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Residential Construction",
  "Commercial Construction",
  "RCC & Structural Works",
  "Renovation & Interior Works",
  "Turnkey Projects",
  "Consultation & Planning",
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67v-8.6h2.67ZM7 8.23a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18 18h-2.67v-4.2c0-1-.02-2.3-1.4-2.3s-1.61 1.1-1.61 2.22V18H9.65v-8.6h2.56v1.18h.04a2.8 2.8 0 0 1 2.52-1.38c2.7 0 3.23 1.78 3.23 4.1Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12a12 12 0 1 0-13.875 11.85v-8.38H7.08V12h3.045V9.36c0-3 1.79-4.66 4.53-4.66 1.31 0 2.69.23 2.69.23v2.96h-1.52c-1.49 0-1.95.93-1.95 1.88V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0 0 24 12Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4L15.8 12Z" />
      </svg>
    ),
  },
];

export default function Footer({ onOpenContact }) {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-[#FAF8F5]"
    >
      {/* Construction Background matching footer.png */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
        <img
          src="/assets/images/footer-slab.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-bottom"
        />

        {/* Enhanced Cream Gradient ensuring crystal-clear text visibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #FAF8F5 0%, #FAF8F5 30%, rgba(250,248,245,0.97) 42%, rgba(250,248,245,0.8) 54%, rgba(250,248,245,0.3) 68%, transparent 80%)",
          }}
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 pt-10 pb-[130px] sm:px-10 sm:pt-12 sm:pb-[160px] lg:px-14 lg:pt-14 lg:pb-[180px]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-0">

          {/* Brand */}
          <div className="lg:col-span-4 lg:border-r lg:border-[#E8E3DA] lg:pr-12">
            <Link
              to="/"
              className="mb-4 inline-block cursor-pointer"
            >
              <img
                src="/assets/images/logo.png"
                alt="पाटोळे Constructions"
                className="h-28 sm:h-36 lg:h-44 max-w-full w-auto object-contain drop-shadow-sm"
              />
            </Link>

            <p className="max-w-[340px] text-[14px] sm:text-[15px] font-medium leading-relaxed text-[#374151]">
              Building stronger communities
              <br />
              for a brighter tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:border-r lg:border-[#E8E3DA] lg:px-12">
            <h3 className="mb-2.5 text-lg font-bold text-[#111827]">
              Quick Links
            </h3>

            <div className="mb-5 h-[2px] w-8 bg-[#EB5A1E]" />

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[14px] font-medium text-[#374151] transition-colors duration-200 hover:text-[#EB5A1E] cursor-pointer text-left block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3 lg:border-r lg:border-[#E8E3DA] lg:px-12">
            <h3 className="mb-2.5 text-lg font-bold text-[#111827]">
              Our Services
            </h3>

            <div className="mb-5 h-[2px] w-8 bg-[#EB5A1E]" />

            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="whitespace-nowrap text-[14px] font-medium text-[#374151] transition-colors duration-200 hover:text-[#EB5A1E] cursor-pointer text-left block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="lg:col-span-2 lg:pl-12">
            <h3 className="mb-2.5 text-lg font-bold text-[#111827]">
              Follow Us
            </h3>

            <div className="mb-5 h-[2px] w-8 bg-[#EB5A1E]" />

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFECE6] text-[#111827] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EB5A1E] hover:text-white shadow-xs"
                >
                  <span className="h-4 w-4">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar - positioned directly over the concrete slab face matching footer.png */}
      <div className="relative z-20 border-t border-[#BEBBB5]/50 bg-[#D9D6D0]/95 sm:bg-transparent sm:border-0 sm:absolute sm:inset-x-0 sm:bottom-4 md:bottom-6 lg:bottom-8">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-3 px-6 py-4 sm:px-10 sm:py-0 md:flex-row md:gap-6 lg:px-14">
          <p className="whitespace-nowrap text-center text-xs sm:text-[13.5px] font-medium text-[#22292F]">
            © {new Date().getFullYear()} पाटोळे Constructions. All rights reserved.
          </p>

          {/* Orange Divider */}
          <div className="hidden h-[1.5px] flex-1 bg-[#EB5A1E] md:block" />

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-[13px] font-medium text-[#22292F] sm:gap-4">
            <Link
              to="/contact"
              className="transition-colors hover:text-[#EB5A1E]"
            >
              Privacy Policy
            </Link>

            <span className="text-[#858B8E]">|</span>

            <Link
              to="/contact"
              className="transition-colors hover:text-[#EB5A1E]"
            >
              Terms &amp; Conditions
            </Link>

            <span className="text-[#858B8E]">|</span>

            <Link
              to="/contact"
              className="transition-colors hover:text-[#EB5A1E]"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
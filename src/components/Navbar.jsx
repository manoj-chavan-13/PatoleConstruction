import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin, Clock } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const defaultContact = {
  phone: "+91 98765 43210",
  email: "contact@patoleconstructions.com",
  location: "Nashik & Pune, Maharashtra",
  hours: "Mon–Sat, 9:00 AM – 7:30 PM",
};

export default function Navbar({
  onOpenContact,
  contact = defaultContact,
  transparentAtTop = true,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const closeRef = useRef(null);

  const phoneHref = `tel:${contact.phone.replace(/[^+\d]/g, "")}`;
  const isHome = location.pathname === "/";
  // Transparent overlay only on Home page when at very top
  const overlay = transparentAtTop && isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock scroll + handle Escape when mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    if (path === "/projects") {
      return (
        location.pathname.startsWith("/projects") ||
        location.pathname.startsWith("/project")
      );
    }
    return location.pathname.startsWith(path);
  };

  const openContact = () => {
    setMenuOpen(false);
    navigate("/contact");
  };

  return (
    <>
      <style>{`
        @keyframes mobileNavSlideIn {
          0% {
            opacity: 0;
            transform: translate3d(-18px, 0, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes mobileCardSlideUp {
          0% {
            opacity: 0;
            transform: translate3d(0, 16px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500">
        {/* =========================================================================
            ROW 1: TOP UTILITY STRIP (Collapses smoothly on scroll)
        ========================================================================= */}
        <div
          className={`hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:block ${
            scrolled
              ? "max-h-0 -translate-y-full opacity-0 pointer-events-none"
              : "max-h-11 translate-y-0 opacity-100"
          } ${
            overlay
              ? "bg-black/35 backdrop-blur-md text-white/85 border-b border-white/10"
              : "bg-[#F7F4EE] text-[#556068] border-b border-[#E8E2D8]"
          }`}
        >
          <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-between px-6 text-[12.5px] xl:px-10">
            {/* Left: Location & Standards */}
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 font-medium">
                <MapPin className="h-3.5 w-3.5 text-[#EB5A1E]" aria-hidden="true" />
                <span>{contact.location}</span>
              </span>
              <span className="flex items-center gap-2 opacity-85">
                <Clock className="h-3.5 w-3.5 text-[#EB5A1E]" aria-hidden="true" />
                <span>{contact.hours}</span>
              </span>
            </div>

            {/* Right: Phone & Email */}
            <div className="flex items-center gap-6">
              <a
                href={phoneHref}
                className="group flex items-center gap-2 transition-colors hover:text-[#EB5A1E] focus-visible:outline-none"
              >
                <Phone className="h-3.5 w-3.5 text-[#EB5A1E] transition-transform duration-300 group-hover:scale-115" aria-hidden="true" />
                <span className="font-semibold">{contact.phone}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-2 transition-colors hover:text-[#EB5A1E] focus-visible:outline-none"
              >
                <Mail className="h-3.5 w-3.5 text-[#EB5A1E] transition-transform duration-300 group-hover:scale-115" aria-hidden="true" />
                <span>{contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            ROW 2: MAIN NAVIGATION BAR (Logo on FAR LEFT, All Navigation on FAR RIGHT)
        ========================================================================= */}
        <div
          className={`relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            overlay
              ? "bg-gradient-to-b from-black/60 via-black/30 to-transparent border-b border-white/10"
              : "bg-white/95 backdrop-blur-xl border-b border-[#E8E2D8] shadow-[0_10px_35px_rgba(23,32,38,0.07)]"
          }`}
        >
          <div
            className={`mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 transition-all duration-500 sm:px-8 xl:px-10 ${
              scrolled ? "h-18 lg:h-[74px]" : "h-20 lg:h-[86px]"
            }`}
          >
            {/* ================= FAR LEFT: LOGO ================= */}
            <Link
              to="/"
              aria-label="Patole Constructions home"
              className="group flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB5A1E] focus-visible:ring-offset-2"
            >
              {overlay ? (
                <div className="flex items-center rounded-xl bg-white/95 px-3.5 py-1.5 shadow-md backdrop-blur-md transition-colors duration-300">
                  <img
                    src="/assets/images/logo.png"
                    alt="पाटोळे CONSTRUCTIONS"
                    className="h-10 w-auto object-contain sm:h-12 lg:h-14"
                  />
                </div>
              ) : (
                <img
                  src="/assets/images/logo.png"
                  alt="पाटोळे CONSTRUCTIONS"
                  className="h-11 w-auto object-contain sm:h-13 lg:h-15"
                />
              )}
            </Link>

            {/* ================= FAR RIGHT: ALL NAVIGATION ITEMS & ACTIONS ================= */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 justify-end">
              {/* Navigation links */}
              <nav aria-label="Main navigation" className="flex items-center gap-1 xl:gap-2">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      aria-current={active ? "page" : undefined}
                      className={`group relative flex items-center px-3.5 xl:px-4 py-2 text-[14px] font-semibold tracking-[-0.01em] transition-all duration-300 rounded-lg focus-visible:outline-none ${
                        overlay
                          ? active
                            ? "text-white font-bold bg-white/10"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                          : active
                          ? "text-[#172026] font-bold bg-[#FAF7F2]"
                          : "text-[#556068] hover:text-[#172026] hover:bg-[#FAF7F2]"
                      }`}
                    >
                      <span>{link.name}</span>
                      {/* Active Accent Underline (NO DIAMOND DOT) */}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3 bottom-0 h-[2.5px] rounded-full bg-[#EB5A1E] shadow-[0_0_8px_rgba(235,90,30,0.8)] transition-all duration-300 ease-out xl:inset-x-3.5 ${
                          active
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Architectural vertical divider */}
              <div
                className={`h-6 w-px ${overlay ? "bg-white/20" : "bg-[#E8E2D8]"}`}
                aria-hidden="true"
              />

              {/* Direct Call Button */}
              <a
                href={phoneHref}
                className={`group flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none ${
                  overlay
                    ? "border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                    : "border-[#E4DED5] bg-[#FAF8F5] text-[#172026] hover:border-[#EB5A1E]/40 hover:bg-white"
                }`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EB5A1E] text-white shadow-xs transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <div className="text-left leading-tight pr-1">
                  <span className="block text-[9.5px] font-bold uppercase tracking-wider opacity-70">
                    Call Direct
                  </span>
                  <span className="block text-xs font-bold tracking-tight">
                    {contact.phone}
                  </span>
                </div>
              </a>

              {/* Start a Project Primary CTA */}
              <button
                type="button"
                onClick={openContact}
                className="group relative inline-flex h-11 cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-[#EB5A1E] px-5 xl:px-6 text-sm font-bold text-white shadow-[0_4px_16px_rgba(235,90,30,0.28)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#D4470F] hover:shadow-[0_8px_25px_rgba(235,90,30,0.42)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                <span className="pointer-events-none absolute -inset-full top-0 block -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 ease-in-out group-hover:inset-full" />
                <span className="relative z-10">Start a Project</span>
                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* ================= MOBILE ACTIONS (FAR RIGHT) ================= */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={phoneHref}
                aria-label="Call Patole Constructions"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EB5A1E] text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:bg-[#D4470F] active:scale-95"
              >
                <Phone className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav-dialog"
                className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-all duration-300 active:scale-95 ${
                  overlay
                    ? "border-white/40 bg-white/15 text-white backdrop-blur-md hover:bg-white hover:text-neutral-900"
                    : "border-[#E0D8CE] bg-white text-[#172026] hover:bg-[#F5F1EB]"
                }`}
              >
                <div
                  className={`transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    menuOpen ? "rotate-90 scale-105" : "rotate-0 scale-100"
                  }`}
                >
                  {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PREMIUM LIGHT-THEMED MOBILE DRAWER (No dark theme, No diamond dots)
        ========================================================================= */}
        <div
          id="mobile-nav-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className={`fixed inset-0 z-50 flex flex-col bg-white text-[#172026] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
            menuOpen
              ? "visible opacity-100 translate-y-0"
              : "invisible opacity-0 -translate-y-6 pointer-events-none"
          }`}
        >
          {/* Top Header inside Drawer */}
          <div className="flex h-20 shrink-0 items-center justify-between border-b border-[#EFEBE4] px-6">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center"
            >
              <img
                src="/assets/images/logo.png"
                alt="पाटोळे CONSTRUCTIONS"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>

            <button
              ref={closeRef}
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#E0D8CE] bg-[#FAF8F5] text-[#172026] transition-all duration-300 hover:bg-[#F0EBE3]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <nav aria-label="Mobile primary navigation" className="space-y-1">
              {navLinks.map((link, idx) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    style={
                      menuOpen
                        ? {
                            animation: "mobileNavSlideIn 450ms cubic-bezier(0.16, 1, 0.3, 1) both",
                            animationDelay: `${idx * 50 + 60}ms`,
                          }
                        : undefined
                    }
                    className={`group flex items-center justify-between rounded-xl px-4 py-3.5 transition-all duration-200 ${
                      active
                        ? "bg-[#FFF2EB] text-[#EB5A1E] font-bold"
                        : "text-[#323D47] font-semibold hover:bg-[#FAF7F2] hover:text-[#172026]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-wider text-[#A1ABB2]">
                        0{idx + 1}
                      </span>
                      <span className="text-lg">{link.name}</span>
                    </div>

                    <ArrowUpRight
                      className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        active ? "text-[#EB5A1E]" : "text-[#A1ABB2] group-hover:text-[#172026]"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Quick Actions & Office Card in Warm Linen */}
            <div
              className="mt-6 space-y-4 pt-6 border-t border-[#EFEBE4]"
              style={
                menuOpen
                  ? {
                      animation: "mobileCardSlideUp 500ms cubic-bezier(0.16, 1, 0.3, 1) both",
                      animationDelay: "320ms",
                    }
                  : undefined
              }
            >
              {/* Primary CTA */}
              <button
                type="button"
                onClick={openContact}
                className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#EB5A1E] text-base font-bold text-white shadow-md shadow-orange-500/25 transition-all duration-300 hover:bg-[#D4470F] active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              {/* Office Details Card */}
              <div className="rounded-2xl border border-[#E8E2D8] bg-[#FAF8F5] p-5 text-xs text-[#556068] space-y-3">
                <a
                  href={phoneHref}
                  className="flex items-center gap-3 font-semibold text-[#172026] hover:text-[#EB5A1E]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF2EB] text-[#EB5A1E]">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  <span>{contact.phone}</span>
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-[#172026] hover:text-[#EB5A1E]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF2EB] text-[#EB5A1E]">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  <span className="truncate">{contact.email}</span>
                </a>

                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF2EB] text-[#EB5A1E]">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <span>Patole Tower, Gangapur Road, Nashik & Pune, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
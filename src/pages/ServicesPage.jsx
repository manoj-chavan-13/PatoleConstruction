import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import CompactCta from "../components/CompactCta";
import {
  Home,
  Building2,
  Warehouse,
  Wrench,
  Check,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  ClipboardList,
  Key,
  FileText,
  HardHat,
  Settings,
  Users,
  Calendar,
} from "lucide-react";

// Custom SVG Icons matching exact mockup
const ExcavatorIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 17h13a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H9L5 5H2v4h2" />
    <circle cx="5" cy="18" r="2.5" />
    <circle cx="13" cy="18" r="2.5" />
    <path d="M18 11l4-4v4l-4 4" />
  </svg>
);

const BrickWallIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M3 15h18" />
    <path d="M9 3v6M15 3v6" />
    <path d="M6 9v6M12 9v6M18 9v6" />
    <path d="M9 15v6M15 15v6" />
  </svg>
);

const services = [
  {
    id: "01",
    slug: "residential",
    icon: Home,
    title: "Residential Construction",
    subtitle: "Custom Luxury Villas, Bungalows & Homes",
    description:
      "From modern contemporary bungalows to sprawling family villas — every home we build is crafted with precision, strong RCC foundations, and long-lasting finishes built to last for generations.",
    image: "/assets/images/clean-service-1.jpg",
    specs: [
      "Earthquake-resistant RCC structural framework",
      "Integral waterproofing for leak-free roofs and wet areas",
      "Spacious open floor plans, cantilever decks, and double-height ceilings",
      "Complete turnkey execution from foundation to final paint and handover",
    ],
    idealFor: "Private residences, weekend bungalows, duplex homes, independent villas",
    highlight: "Custom Homes & Turnkey Delivery",
  },
  {
    id: "02",
    slug: "commercial",
    icon: Building2,
    title: "Commercial Complexes",
    subtitle: "Corporate Offices, Retail Plazas & Clinics",
    description:
      "Modern office spaces, retail complexes, and healthcare buildings designed with open column spacing, high load-bearing capacity, and practical layouts for heavy everyday use.",
    image: "/assets/images/clean-service-2.jpg",
    specs: [
      "Open-span column layouts for flexible office and retail arrangements",
      "Heavy load-bearing floor slabs for high footfall and equipment",
      "Dedicated utility shafts, fire-safe staircases, and basement parking",
      "Assistance with municipal approvals and structural stability certificates",
    ],
    idealFor: "Corporate offices, retail showrooms, diagnostic centers, commercial plazas",
    highlight: "High Footfall & Flexible Spaces",
  },
  {
    id: "03",
    slug: "industrial",
    icon: Warehouse,
    title: "Industrial Sheds & PEB",
    subtitle: "Factories, Warehouses & Manufacturing Units",
    description:
      "Durable industrial manufacturing units, pre-engineered steel buildings (PEB), and logistics warehouses featuring heavy-load flooring and overhead crane support.",
    image: "/assets/images/clean-service-4.jpg",
    specs: [
      "Heavy-duty laser-screed concrete flooring for forklifts and machinery",
      "Overhead crane beam support built directly into the frame",
      "Pre-engineered steel sheds anchored on strong concrete footings",
      "Perimeter storm drainage, sturdy boundary walls, and access roads",
    ],
    idealFor: "Factories, packaging facilities, logistics centers, storage godowns",
    highlight: "Heavy Machinery & Crane Support",
  },
  {
    id: "04",
    slug: "retrofitting",
    icon: Wrench,
    title: "Structural Strengthening & Repairs",
    subtitle: "Restoration, Beam Strengthening & Floor Additions",
    description:
      "Specialized repairs and strengthening for aging buildings — reinforcing existing columns, repairing cracked beams, and adding new floors safely.",
    image: "/assets/images/clean-service-3.jpg",
    specs: [
      "Column and beam jacketing to increase load capacity",
      "Advanced carbon-fiber wrapping for cracked or weakened beams",
      "Non-destructive testing to verify the health of existing concrete",
      "Foundation strengthening, leak sealing, and safe vertical floor additions",
    ],
    idealFor: "Older buildings, commercial renovations, additional floor construction",
    highlight: "Strengthening & Modernization",
  },
];

// Exact Approach Steps Matching Reference Mockup
const approachSteps = [
  {
    icon: FileText,
    title: "Detailed Planning & Design",
    desc: "We study your requirements and create precise plans for efficient execution.",
  },
  {
    icon: HardHat,
    title: "Expert Execution",
    desc: "Our skilled team implements the plan using best practices and modern techniques.",
  },
  {
    icon: Settings,
    title: "Strict Quality Checks",
    desc: "Every stage is inspected to ensure strength, safety and compliance.",
  },
  {
    icon: Home,
    title: "On-Time Delivery",
    desc: "We stay committed to delivering your project within the promised timeline.",
  },
];

// 5-Stage Blueprint Data: Simple English, Minimal Content, No Weeks/Days
const executionPhases = [
  {
    step: "01",
    phase: "STAGE 01",
    title: "Planning & Design",
    desc: "Reviewing drawings, site checks, and accurate cost estimation.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/assets/images/clean-process-1.jpg",
    icon: ClipboardList,
    bullets: [
      "Drawing review",
      "Site inspection & checks",
      "Clear budget plan",
    ],
  },
  {
    step: "02",
    phase: "STAGE 02",
    title: "Ground & Foundation",
    desc: "Excavating to firm soil, pest treatment, and solid concrete base.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/assets/images/clean-process-2.jpg",
    icon: ExcavatorIcon,
    bullets: [
      "Ground leveling & digging",
      "Anti-termite treatment",
      "Solid concrete footings",
    ],
  },
  {
    step: "03",
    phase: "STAGE 03",
    title: "Structure & Slabs",
    desc: "Certified steel reinforcement and high-strength concrete pour.",
    image: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/assets/images/clean-process-3.jpg",
    icon: Building2,
    bullets: [
      "Certified steel rebar tying",
      "Machine concrete pour",
      "Full water curing process",
    ],
  },
  {
    step: "04",
    phase: "STAGE 04",
    title: "Walls & Waterproofing",
    desc: "Brick masonry, concealed conduits, and multi-layer waterproofing.",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/assets/images/clean-process-4.jpg",
    icon: BrickWallIcon,
    bullets: [
      "Clean brick masonry",
      "Plumbing & electrical lines",
      "Full leak-proof treatment",
    ],
  },
  {
    step: "05",
    phase: "STAGE 05",
    title: "Finishing & Handover",
    desc: "Smooth plaster, exterior coatings, quality check, and key handover.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/assets/images/clean-why-villa.jpg",
    icon: Key,
    bullets: [
      "Wall plaster & painting",
      "Final quality checks",
      "Clean key handover",
    ],
  },
];

const materialsMatrix = [
  {
    category: "Primary Steel",
    specification: "High-Strength Fe 550D TMT Steel",
    brands: "Tata Tiscon / Jindal Panther / JSW",
    standard: "Certified Genuine Prime Mill",
  },
  {
    category: "Structural Cement",
    specification: "53 Grade Heavy-Duty Cement",
    brands: "UltraTech / ACC / Ambuja",
    standard: "High Early Strength & Durability",
  },
  {
    category: "Concrete Mix",
    specification: "Machine-Mixed Design Concrete",
    brands: "M25 / M30 Grade Certified Mixes",
    standard: "Controlled Quality & Slump",
  },
  {
    category: "Waterproofing",
    specification: "Advanced Crystalline Sealant",
    brands: "Dr. Fixit / Fosroc / Sika",
    standard: "Guaranteed Leak-Free Protection",
  },
];

export default function ServicesPage({ onOpenContact }) {
  const [active, setActive] = useState(0);
  const { hash } = useLocation();
  const showcaseRef = useRef(null);
  const hoverTimer = useRef(null);

  // Deep linking to specific service if URL has hash (e.g. /services#industrial)
  useEffect(() => {
    if (!hash) return;
    const index = services.findIndex((s) => s.slug === hash.slice(1));
    if (index === -1) return;
    setActive(index);
    const t = setTimeout(() => {
      showcaseRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
    return () => clearTimeout(t);
  }, [hash]);

  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  const hoverIn = (i) => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActive(i), 120);
  };
  const hoverOut = () => clearTimeout(hoverTimer.current);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") setActive((a) => Math.min(a + 1, services.length - 1));
    if (e.key === "ArrowLeft") setActive((a) => Math.max(a - 1, 0));
  };

  return (
    <div className="services-page bg-[#FAF7F2] text-[#172027] overflow-x-hidden selection:bg-[#EB5A1E] selection:text-white">
      {/* SVG ClipPath for Slanted Card Images with Rounded Corners */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="slantedBlueprintClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.18 C 0,0.09 0.04,0.06 0.12,0.05 L 0.88,0.005 C 0.95,0 1,0.03 1,0.10 L 1,0.92 C 1,0.97 0.95,1 0.88,1 L 0.12,1 C 0.04,1 0,0.97 0,0.92 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ================================================================
          1. COMPACT HERO SECTION (Raw Image, Zero White Background)
      ================================================================ */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 border-b border-[#2B3540] overflow-hidden bg-[#0D1217]">
        {/* Background Panoramic Architectural Imagery (Direct, no white overlay) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/services-hero-bg.png"
            alt="Patole Construction Services"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle soft dark vignette on the left to ensure bright white & orange text pops directly */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-7 h-[2px] bg-[#EB5A1E] inline-block" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#EB5A1E]">
                Our Services
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12] drop-shadow-md">
              Quality Construction. <span className="text-[#EB5A1E]">Built to Last.</span>
            </h1>
            <p className="mt-3.5 text-sm sm:text-base text-white/85 leading-relaxed font-medium drop-shadow-sm max-w-xl">
              From custom luxury homes and commercial spaces to industrial sheds and structural repairs — we build every structure with certified materials, disciplined supervision, and honest timelines across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          2. CORE SERVICES SHOWCASE (Interactive Panels & Accordion)
      ================================================================ */}
      <section
        id="services"
        ref={showcaseRef}
        className="scroll-mt-20 py-14 sm:py-18 lg:py-20 bg-white border-b border-[#E8E2D8] relative"
      >
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#EB5A1E]" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-[#EB5A1E] uppercase">
                  What We Build
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172027] tracking-tight">
                Our Construction Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#6B7580] max-w-md">
              Select any service to view construction details, highlights, and recommended project scopes.
            </p>
          </div>

          {/* Desktop Expanding Panels */}
          <div
            role="group"
            aria-label="Our services"
            onKeyDown={onKeyDown}
            className="hidden h-[clamp(580px,76svh,680px)] gap-3.5 lg:flex"
          >
            {services.map((s, i) => {
              const isActive = i === active;
              const Icon = s.icon;
              return (
                <article
                  key={s.slug}
                  className={`relative min-w-0 basis-0 overflow-hidden rounded-[24px] bg-neutral-900 border border-[#262D35] transition-[flex-grow] duration-[800ms] ease-[cubic-bezier(.4,0,.2,1)] ${isActive ? "grow-[6] shadow-[0_20px_50px_rgba(23,32,39,0.18)]" : "grow-[1] cursor-pointer"
                    }`}
                >
                  {/* Photo */}
                  <img
                    src={s.image}
                    alt={s.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out ${isActive ? "scale-100" : "scale-110"
                      }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1115]/95 via-[#0C1115]/50 to-[#0C1115]/20" />
                  <div
                    className={`absolute inset-0 bg-[#0C1115]/40 transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-100"
                      }`}
                  />

                  {/* Switch trigger covering collapsed panels */}
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => hoverIn(i)}
                    onMouseLeave={hoverOut}
                    onFocus={() => setActive(i)}
                    aria-expanded={isActive}
                    aria-label={s.title}
                    className={`absolute inset-0 z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB5A1E] ${isActive ? "pointer-events-none" : "cursor-pointer"
                      }`}
                  />

                  {/* Collapsed Label (Vertical Spine) */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 z-10 flex flex-col justify-between p-6 text-white transition-opacity duration-500 ${isActive ? "pointer-events-none opacity-0" : "opacity-100 delay-300"
                      }`}
                  >
                    <span className="font-mono text-sm font-bold text-white/80">{s.id}</span>
                    <span className="rotate-180 self-start whitespace-nowrap text-xl font-bold tracking-tight [writing-mode:vertical-rl]">
                      {s.title}
                    </span>
                  </div>

                  {/* Expanded Content Panel */}
                  <div
                    aria-hidden={!isActive}
                    className={`absolute bottom-0 left-0 z-10 w-[540px] max-w-none p-8 xl:p-9 text-white transition-all duration-500 xl:w-[780px] ${isActive
                      ? "translate-y-0 opacity-100 delay-300"
                      : "pointer-events-none translate-y-4 opacity-0"
                      }`}
                  >
                    <div className="mb-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 backdrop-blur-md text-[#FF7A45]">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="font-mono text-xs font-bold tracking-wider text-white/70">
                          SERVICE {s.id}
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#EB5A1E]/90 text-[11px] font-extrabold uppercase tracking-wider text-white">
                        {s.highlight}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#FF8A50]">{s.subtitle}</p>
                    <p className="mt-3 max-w-2xl text-[13.5px] sm:text-[14px] leading-relaxed text-white/85">
                      {s.description}
                    </p>

                    {/* Specifications List */}
                    <ul className="mt-4 grid gap-x-8 gap-y-2 border-t border-white/20 pt-3.5 xl:grid-cols-2">
                      {s.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-2.5">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#FF8A50]"
                            aria-hidden="true"
                          />
                          <span className="text-[12.5px] leading-snug text-white/90">{spec}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom Action Row */}
                    <div className="mt-5 pt-3.5 border-t border-white/15 flex items-center justify-between">
                      <p className="text-[12px] leading-relaxed text-white/70 max-w-md">
                        <span className="font-bold text-white">Ideal for: </span>
                        {s.idealFor}
                      </p>

                      <Link
                        to={`/contact?service=${encodeURIComponent(s.title)}`}
                        className="inline-flex items-center gap-2 bg-[#EB5A1E] hover:bg-[#D94F16] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all cursor-pointer shadow-md shrink-0"
                      >
                        <span>Consult on This Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Mobile / Tablet Accordion */}
          <div className="divide-y divide-[#E5DED2] border-y border-[#E5DED2] lg:hidden">
            {services.map((s, i) => {
              const open = i === active;
              return (
                <div key={s.slug} className="py-2">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={open}
                      className="flex w-full cursor-pointer items-center gap-4 py-4 text-left focus-visible:outline-none"
                    >
                      <span className="font-mono text-sm font-extrabold text-[#EB5A1E]">
                        {s.id}
                      </span>
                      <span className="flex-1 font-heading text-xl font-bold tracking-tight text-[#172027]">
                        {s.title}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#55606A] transition-transform duration-300 ${open ? "rotate-180 text-[#EB5A1E]" : ""
                          }`}
                      />
                    </button>
                  </h3>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-6">
                        <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-200 mb-4">
                          <img
                            src={s.image}
                            alt={s.title}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="text-sm font-bold text-[#EB5A1E]">{s.subtitle}</p>
                        <p className="mt-2 text-[14px] leading-relaxed text-[#55606A]">
                          {s.description}
                        </p>

                        <ul className="mt-4 border-t border-[#E5DED2] divide-y divide-[#E5DED2]">
                          {s.specs.map((spec) => (
                            <li key={spec} className="flex items-start gap-2.5 py-2.5">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#EB5A1E]" />
                              <span className="text-[13px] leading-snug text-[#374151]">
                                {spec}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <p className="text-xs text-[#6B7580]">
                            <span className="font-bold text-[#172027]">Ideal for: </span>
                            {s.idealFor}
                          </p>
                          <Link
                            to={`/contact?service=${encodeURIComponent(s.title)}`}
                            className="inline-flex items-center justify-center gap-2 bg-[#EB5A1E] text-white text-xs font-bold px-4 py-2.5 rounded-lg"
                          >
                            <span>Consult on This</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          3. OUR APPROACH: Quality You Can Trust (Matching Exact Mockup)
      ================================================================ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8] relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: Header, Feature Image & 3 Metrics (6 cols) */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between">
              <div>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2.5 mb-2.5">
                  <span className="w-8 h-[2px] bg-[#EB5A1E] inline-block" />
                  <span className="text-[11px] font-bold tracking-[0.24em] text-[#EB5A1E] uppercase">
                    Our Approach
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#172027] leading-[1.12] mb-3">
                  Quality You Can <span className="text-[#EB5A1E]">Trust.</span>
                </h2>

                {/* Subtitle */}
                <p className="text-[14px] sm:text-[15.5px] text-[#556068] leading-relaxed max-w-[500px] mb-8">
                  We follow a structured and transparent process to deliver safe, durable and future-ready construction.
                </p>

                {/* Image Showcase with offset peach backdrop & floating badge */}
                <div className="relative max-w-[520px]">
                  {/* Offset decorative peach card backdrop */}
                  <div className="absolute -left-3 -top-3 sm:-left-4 sm:-top-3 w-full h-full bg-[#FCEEE4] rounded-[26px] sm:rounded-[30px] -z-0 pointer-events-none" />

                  {/* Main Image Container */}
                  <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_12px_36px_rgba(23,32,39,0.08)] bg-[#E9E3D9] aspect-[16/10] sm:aspect-[16/10.5] z-10">
                    <img
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                      alt="Quality You Can Trust - Built with Precision & Care"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/images/clean-process-1.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Floating Badge on Bottom-Right */}
                  <div className="absolute -bottom-4 right-3 sm:-bottom-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-[0_8px_24px_rgba(23,32,39,0.08)] border border-white/90 z-20">
                    <div className="font-heading font-extrabold text-[13px] sm:text-[14px] text-[#172027] leading-tight">
                      Built with<br />Precision &amp; Care
                    </div>
                    <div className="w-6 h-[2px] bg-[#EB5A1E] mt-1.5" />
                  </div>
                </div>
              </div>

              {/* 3 Metrics Row */}
              <div className="mt-10 sm:mt-12 pt-6 max-w-[520px] grid grid-cols-3 divide-x divide-[#E5DDD0]">
                {/* Metric 1 */}
                <div className="pr-3 sm:pr-5">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF2EA] flex items-center justify-center text-[#EB5A1E] mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#EB5A1E]" />
                  </div>
                  <div className="font-heading text-xl sm:text-2xl font-black text-[#172027]">100%</div>
                  <div className="text-[11.5px] sm:text-xs text-[#6B7580] font-medium leading-snug mt-0.5">Quality Assurance</div>
                </div>

                {/* Metric 2 */}
                <div className="px-3 sm:px-5">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF2EA] flex items-center justify-center text-[#EB5A1E] mb-2">
                    <Users className="w-4 h-4 text-[#EB5A1E]" />
                  </div>
                  <div className="font-heading text-xl sm:text-2xl font-black text-[#172027]">500+</div>
                  <div className="text-[11.5px] sm:text-xs text-[#6B7580] font-medium leading-snug mt-0.5">Projects Delivered</div>
                </div>

                {/* Metric 3 */}
                <div className="pl-3 sm:pl-5">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF2EA] flex items-center justify-center text-[#EB5A1E] mb-2">
                    <Calendar className="w-4 h-4 text-[#EB5A1E]" />
                  </div>
                  <div className="font-heading text-xl sm:text-2xl font-black text-[#172027]">15+</div>
                  <div className="text-[11.5px] sm:text-xs text-[#6B7580] font-medium leading-snug mt-0.5">Years of Experience</div>
                </div>
              </div>
            </div>

            {/* Right Column: Vertical Timeline & 4 Stacked Cards (6 cols) */}
            <div className="lg:col-span-6 xl:col-span-6 relative lg:pl-10 flex flex-col justify-between gap-4 sm:gap-5">
              {/* Vertical Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute left-0 top-10 bottom-10 w-[2px] bg-[#F7C0A6]" />

              {approachSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="relative group bg-white rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 border border-[#ECE5D9] shadow-[0_4px_20px_rgba(23,32,39,0.04)] hover:shadow-[0_10px_32px_rgba(23,32,39,0.08)] hover:-translate-y-0.5 transition-all flex items-center gap-4 sm:gap-5"
                  >
                    {/* Node Dot on the vertical line (Desktop) */}
                    <span className="hidden lg:block absolute -left-[45px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#EB5A1E] ring-4 ring-[#FAF7F2] z-10 group-hover:scale-125 transition-transform" />

                    {/* Peach Icon Box */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF2EA] border border-[#FBE3D4] flex items-center justify-center shrink-0 text-[#EB5A1E] group-hover:bg-[#FFE8DA] transition-colors">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-extrabold text-[16px] sm:text-[17px] text-[#172027] leading-snug mb-1 group-hover:text-[#EB5A1E] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[13px] sm:text-[13.5px] text-[#556068] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================
          4. EXACT 5-STAGE PROJECT EXECUTION BLUEPRINT (Matching Mockup)
      ================================================================ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E8E2D8] relative overflow-hidden">
        {/* Top-Right Architectural Building Sketch Watermark */}
        <div className="pointer-events-none absolute top-0 right-0 z-0 w-[420px] sm:w-[540px] opacity-[0.14] mix-blend-multiply select-none">
          <img
            src="/assets/images/projects-landmarks-sketch.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain object-top-right"
          />
        </div>

        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          {/* Top Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-[700px]">
              <div className="inline-flex items-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#EB5A1E] inline-block" />
                <span className="text-[11px] font-bold tracking-[0.24em] text-[#556068] uppercase">
                  End-to-End Workflow
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#172027] leading-[1.12]">
                5-Stage Project <span className="text-[#EB5A1E]">Execution Blueprint</span>
              </h2>
              <p className="mt-3 text-[14px] sm:text-[15px] text-[#556068] leading-relaxed max-w-[620px]">
                A clear, step-by-step process to ensure quality, safety, and on-time completion from start to finish.
              </p>
            </div>

            <div className="flex items-center gap-4 lg:pl-8 lg:border-l-2 lg:border-[#EB5A1E]">
              <div className="text-[13px] sm:text-[13.5px] text-[#556068] font-medium leading-relaxed space-y-0.5">
                <p>Planned with care.</p>
                <p>Built with strength.</p>
                <p>Delivered with pride.</p>
              </div>
            </div>
          </div>

          {/* Connecting Wavy Flow Line & 5 Cards */}
          <div className="relative">
            {/* Subtle wavy SVG curve running across the 5 step nodes (Desktop) */}
            <div className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-10 z-0 pointer-events-none">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 1000 48"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0,16 C 60,16 90,32 130,32 C 170,32 210,16 270,16 C 330,16 360,32 400,32 C 440,32 470,16 530,16 C 590,16 620,32 670,32 C 720,32 750,16 800,16 C 850,16 880,32 930,32 C 970,32 990,16 1000,16"
                  stroke="#F6B898"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* 5 Columns Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-6 relative z-10">
              {executionPhases.map((phase) => {
                const Icon = phase.icon;
                return (
                  <div key={phase.step} className="flex flex-col group">
                    {/* Top Step Number & Orange Node Dot */}
                    <div className="flex flex-col items-center mb-5 relative z-10">
                      <span className="font-heading font-black text-2xl lg:text-3xl text-[#EB5A1E] leading-none mb-1.5">
                        {phase.step}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EB5A1E] ring-4 ring-white shadow-xs" />
                    </div>

                    {/* Slanted Card Photo Container with overlapping Icon */}
                    <div className="relative mb-6">
                      {/* Slanted Image with Rounded Corners */}
                      <div
                        className="relative w-full aspect-[16/11] bg-[#EAE4DC] overflow-hidden shadow-[0_10px_25px_rgba(23,32,39,0.06)] group-hover:shadow-[0_16px_35px_rgba(23,32,39,0.12)] transition-shadow duration-300"
                        style={{ clipPath: "url(#slantedBlueprintClip)" }}
                      >
                        <img
                          src={phase.image}
                          alt={phase.title}
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = phase.fallbackImage;
                          }}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Overlapping Floating Icon Badge */}
                      <div className="absolute -bottom-4 left-3 sm:left-4 z-20 w-11 h-11 rounded-xl bg-white border border-[#EFE8DD] shadow-md flex items-center justify-center text-[#EB5A1E] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-[#EB5A1E]" />
                      </div>
                    </div>

                    {/* Card Body Content */}
                    <div className="pt-2 flex flex-col flex-1">
                      <span className="text-[11px] font-bold text-[#EB5A1E] uppercase tracking-wider mb-1.5">
                        {phase.phase}
                      </span>

                      <h3 className="font-heading font-extrabold text-[15px] sm:text-[16px] text-[#172027] leading-snug mb-2 group-hover:text-[#EB5A1E] transition-colors">
                        {phase.title}
                      </h3>

                      <p className="text-[12px] sm:text-[12.5px] text-[#556068] leading-relaxed mb-4">
                        {phase.desc}
                      </p>

                      {/* Bullet Checkpoints */}
                      <div className="space-y-1.5 mt-auto">
                        {phase.bullets.map((b, bi) => (
                          <div key={bi} className="flex items-start gap-2">
                            <span className="w-3.5 h-3.5 rounded-full bg-[#FFEAE0] text-[#EB5A1E] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-[#EB5A1E] stroke-[3]" />
                            </span>
                            <span className="text-[11.5px] sm:text-[12px] text-[#4F5B65] font-medium leading-snug">
                              {b}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          5. MATERIALS QUALITY GUARANTEE MATRIX
      ================================================================ */}
      <section className="py-14 sm:py-16 bg-[#FAF7F2] border-b border-[#E8E2D8]">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Context */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#EB5A1E] inline-block" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#EB5A1E] uppercase">
                  Raw Materials
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#172027] tracking-tight leading-snug mb-3">
                Only Proven, Branded Materials
              </h3>
              <p className="text-[13.5px] text-[#556068] leading-relaxed mb-6">
                A building is only as strong as what goes inside it. We strictly use top-tier steel and cement brands, avoiding unbranded or low-grade substitutes.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#717E8A]">
                <ShieldCheck className="w-4 h-4 text-[#EB5A1E]" />
                <span>Tata Tiscon &bull; UltraTech &bull; ACC &bull; Dr. Fixit</span>
              </div>
            </div>

            {/* Right Matrix Table Cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {materialsMatrix.map((item, mi) => (
                <div
                  key={mi}
                  className="p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[11px] font-mono font-bold text-[#EB5A1E] uppercase tracking-wider mb-1">
                      {item.category}
                    </div>
                    <div className="text-[13.5px] font-bold text-[#172027] mb-1.5 leading-snug">
                      {item.specification}
                    </div>
                    <div className="text-xs text-[#5D6770] leading-snug">
                      {item.brands}
                    </div>
                  </div>
                  <div className="mt-3.5 pt-2.5 border-t border-[#F0EAE1] text-[10.5px] font-mono text-[#7C8894]">
                    Guarantee: <span className="text-[#172027] font-bold">{item.standard}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Creative Compact CTA */}
      <CompactCta
        badge="Architectural Blueprints Ready?"
        title="Bring Your Drawings For a Technical"
        highlight="Review."
        subtitle="Bring your floor plans or site details for an honest, transparent estimate and structural evaluation with our senior construction team."
        primaryText="Book Free Consultation"
      />
    </div>
  );
}
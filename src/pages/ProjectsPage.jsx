import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CompactCta from "../components/CompactCta";
import { ArrowUpRight, MapPin, MoveRight, Plus, ArrowRight } from "lucide-react";

/* STREAMING_CHUNK: Base Project Data */
const baseProjects = [
  {
    id: 1,
    tag: "01",
    title: "The Cantilever Luxury Villa",
    location: "Gangapur Road, Nashik",
    category: "residential",
    status: "Completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    fallbackImage: "/assets/images/clean-project-featured.jpg",
    area: "5,500 Sq. Ft.",
    structure: "M30 Grade RCC Frame",
    duration: "12 Months",
  },
  {
    id: 2,
    tag: "02",
    title: "Horizon Corporate IT Park",
    location: "Baner, Pune",
    category: "commercial",
    status: "Completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    fallbackImage: "/assets/images/clean-project-3.jpg",
    area: "32,000 Sq. Ft.",
    structure: "G+5 Multi-Story RCC",
    duration: "18 Months",
  },
  {
    id: 3,
    tag: "03",
    title: "MIDC Heavy Engineering Facility",
    location: "Ambad MIDC, Nashik",
    category: "industrial",
    status: "Completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    fallbackImage: "/assets/images/clean-project-4.jpg",
    area: "48,000 Sq. Ft.",
    structure: "RCC & PEB Hybrid",
    duration: "14 Months",
  },
  {
    id: 4,
    tag: "04",
    title: "Hillside Mountain Retreat",
    location: "Igatpuri, Western Ghats",
    category: "residential",
    status: "Under Construction",
    year: "2024",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800",
    fallbackImage: "/assets/images/clean-why-villa.jpg",
    area: "7,200 Sq. Ft.",
    structure: "Stepped Pile RCC",
    duration: "15 Months",
  },
  {
    id: 5,
    tag: "05",
    title: "Metro Care Diagnostic Plaza",
    location: "College Road, Nashik",
    category: "commercial",
    status: "Completed",
    year: "2022",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    fallbackImage: "/assets/images/clean-service-2.jpg",
    area: "22,000 Sq. Ft.",
    structure: "Heavy Live-Load RCC",
    duration: "11 Months",
  },
  {
    id: 6,
    tag: "06",
    title: "The Courtyard Contemporary",
    location: "Govind Nagar, Nashik",
    category: "residential",
    status: "Completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    fallbackImage: "/assets/images/clean-project-2.jpg",
    area: "4,600 Sq. Ft.",
    structure: "Exposed Column RCC",
    duration: "10 Months",
  },
];

/* 
  Simulating a massive database of 100+ projects by duplicating the base list.
  This allows you to see how the pagination and grid handle a huge dataset.
*/
const allProjects = Array.from({ length: 24 }).map((_, i) => ({
  ...baseProjects[i % baseProjects.length],
  id: i + 1,
  tag: (i + 1).toString().padStart(3, '0'), // E.g., 001, 002... 024
}));

const categories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "industrial", label: "Industrial" },
];

const categoryLabel = {
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
};

/* STREAMING_CHUNK: Scroll Animation Helper */
function FadeUp({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none ${shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        } ${className}`}
    >
      {children}
    </div>
  );
}

/* STREAMING_CHUNK: Main Component */
export default function ProjectsPagePremium({ onSelectProject, onOpenContact }) {
  const [category, setCategory] = useState("all");

  // Pagination State: How many items to show initially
  const INITIAL_COUNT = 9;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // Filter logic
  const filtered = allProjects.filter((p) => {
    return category === "all" || p.category === category;
  });

  // Items currently visible on the screen based on pagination
  const visibleProjects = filtered.slice(0, visibleCount);

  // Handle Category Change (Reset pagination)
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setVisibleCount(INITIAL_COUNT); // Reset to first 9 items when filtering
  };

  // Handle Load More
  const loadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const open = (p) => {
    if (onSelectProject) onSelectProject(p);
  };

  const handleContact = () => {
    if (onOpenContact) onOpenContact();
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#172027] selection:bg-[#EB5A1E] selection:text-white font-sans">

      {/* ===== 1. COMPACT ARCHITECTURAL HERO with projects-hero-bg.png ===== */}
      <header className="relative pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 px-6 sm:px-10 lg:px-16 overflow-hidden border-b border-[#E8E2D8] bg-[#FAF7F2]">
        {/* Background Architectural Illustration */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src="/assets/images/projects-hero-bg.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-right opacity-95"
          />
        </div>

        {/* Content Container (properly cleared below the fixed navbar) */}
        <div className="relative z-10 mx-auto max-w-[1600px] min-h-[220px] sm:min-h-[250px] flex flex-col justify-between">
          <FadeUp>
            {/* Top Eyebrow */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#EB5A1E] inline-block" />
              <span className="font-mono text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#EB5A1E] uppercase">
                Project Archive
              </span>
            </div>

            {/* Left Headline */}
            <div className="max-w-xl">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#172027] leading-[1.08]">
                100+ Structural <br />
                <span className="text-[#EB5A1E]">Landmarks.</span>
              </h1>
            </div>
          </FadeUp>

          {/* Center Descriptive Paragraph */}
          <div className="relative z-20 mt-4 sm:mt-5 max-w-lg lg:ml-[38%] xl:ml-[42%]">
            <p className="text-[13px] sm:text-[13.5px] text-[#4F5B65] leading-relaxed font-medium">
              Explore our extensive portfolio of engineered concrete structures across Maharashtra. Filter by sector to view our specialized work.
            </p>
          </div>

          {/* Floating Architectural Stat Callouts anchored safely inside header container */}
          <div className="absolute inset-0 pointer-events-none select-none">
            
            {/* 25+ RESIDENTIAL PROJECTS */}
            <div className="hidden md:block absolute top-12 left-[27%] lg:left-[29%]">
              <div className="font-heading font-black text-2xl lg:text-[28px] text-[#A6AFB8] leading-none tracking-tight">
                25+
              </div>
              <div className="font-mono text-[8.5px] lg:text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#8C97A1] leading-tight mt-0.5 max-w-[85px]">
                Residential Projects
              </div>
            </div>

            {/* 40+ COMMERCIAL STRUCTURES */}
            <div className="hidden sm:block absolute top-8 right-[28%] lg:right-[32%]">
              <div className="font-heading font-black text-2xl lg:text-[28px] text-[#A6AFB8] leading-none tracking-tight">
                40+
              </div>
              <div className="font-mono text-[8.5px] lg:text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#8C97A1] leading-tight mt-0.5 max-w-[95px]">
                Commercial Structures
              </div>
            </div>

            {/* 15+ INFRASTRUCTURE PROJECTS */}
            <div className="hidden lg:block absolute top-24 right-[10%] xl:right-[13%]">
              <div className="font-heading font-black text-2xl lg:text-[28px] text-[#A6AFB8] leading-none tracking-tight">
                15+
              </div>
              <div className="font-mono text-[8.5px] lg:text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#8C97A1] leading-tight mt-0.5 max-w-[100px]">
                Infrastructure Projects
              </div>
            </div>

            {/* 20+ INDUSTRIAL FACILITIES */}
            <div className="hidden md:block absolute bottom-4 right-[2%] xl:right-[4%]">
              <div className="font-heading font-black text-2xl lg:text-[28px] text-[#A6AFB8] leading-none tracking-tight">
                20+
              </div>
              <div className="font-mono text-[8.5px] lg:text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#8C97A1] leading-tight mt-0.5 max-w-[95px]">
                Industrial Facilities
              </div>
            </div>

            {/* Semi-Transparent "100+" Watermark */}
            <div 
              aria-hidden="true"
              className="absolute bottom-1 left-[20%] sm:left-[26%] lg:left-[30%] font-heading font-black text-[70px] sm:text-[95px] lg:text-[120px] text-[#172027]/[0.04] leading-none tracking-tighter pointer-events-none select-none"
            >
              100+
            </div>

          </div>
        </div>
      </header>

      {/* ===== 2. FILTERS (Pure White) ===== */}
      <section className="relative z-20 bg-white/95 backdrop-blur-md border-b border-[#E8E2D8] shadow-xs">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-10 gap-y-3">
            {categories.map((c) => {
              const isActive = category === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => handleCategoryChange(c.id)}
                  className={`group relative text-[12px] sm:text-[13px] font-bold uppercase tracking-widest transition-colors py-2 cursor-pointer font-mono ${isActive ? "text-[#EB5A1E]" : "text-[#6B7580] hover:text-[#172027]"
                    }`}
                >
                  {c.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#EB5A1E] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </button>
              );
            })}
          </div>
          <div className="text-[12px] font-mono font-bold text-[#6B7580] uppercase tracking-widest">
            Total Results: <span className="text-[#172027]">{filtered.length}</span>
          </div>
        </div>
      </section>

      {/* ===== 3. MASSIVE PROJECT GRID (Pure White Background) ===== */}
      <section className="bg-white py-14 sm:py-18 lg:py-20 px-6 sm:px-10 lg:px-16 border-b border-[#E8E2D8]">
        <div className="mx-auto max-w-[1600px]">
        {filtered.length === 0 ? (
          <div className="py-24 text-center border border-[#E8E2D8] rounded-2xl bg-[#FAF7F2]">
            <p className="font-heading text-2xl font-bold text-[#6B7580]">No projects found in this category.</p>
            <button
              onClick={() => handleCategoryChange("all")}
              className="mt-6 px-6 py-3 rounded-xl bg-[#EB5A1E] text-white text-sm font-bold shadow-md cursor-pointer hover:bg-[#D94F16] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            {/* 
                GRID SYSTEM: 
                1 col on mobile, 2 cols on tablet, 3 cols on desktop.
                This is the standard for handling massive datasets cleanly.
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {visibleProjects.map((p, index) => {
                return (
                  <FadeUp key={`${p.id}-${index}-${category}`} delay={(index % 3) * 75} className="project-card-anim">
                    <Link
                      to={`/project-view/${p.id}`}
                      className="group block w-full text-left cursor-pointer outline-none"
                    >
                      {/* Clean Image Container (No heavy borders) */}
                      <div className="relative overflow-hidden w-full aspect-[4/3] rounded-2xl bg-[#EAE4DC] mb-5">
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = p.fallbackImage || "/assets/images/clean-project-featured.jpg";
                          }}
                          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#172027]/0 group-hover:bg-[#172027]/10 transition-colors duration-500 z-10" />

                        {/* Top Badges */}
                        <div className="absolute top-4 inset-x-4 flex items-start justify-between z-20 pointer-events-none">
                          {p.status === "Under Construction" ? (
                            <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-[#172027] shadow-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#EB5A1E] animate-pulse" />
                              Active Site
                            </span>
                          ) : (
                            <span /> // Spacer
                          )}

                          {/* Hover Arrow Indicator */}
                          <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#172027] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-md">
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Minimalist Typography Below Image */}
                      <div>
                        {/* Category & Year Row */}
                        <div className="flex items-center gap-3 text-[11px] font-mono font-bold uppercase tracking-wider text-[#EB5A1E] mb-2">
                          <span>{categoryLabel[p.category]}</span>
                          <span className="w-1 h-1 rounded-full bg-[#EB5A1E]/30" />
                          <span className="text-[#6B7580]">{p.year}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-[22px] sm:text-[24px] font-extrabold text-[#172027] leading-tight mb-2 group-hover:text-[#EB5A1E] transition-colors duration-300">
                          {p.title}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-[13px] text-[#556068]">
                          <MapPin className="w-3.5 h-3.5 text-[#A0AAB3] shrink-0" />
                          <span>{p.location}</span>
                        </div>

                        {/* View Project Details Button */}
                        <div className="mt-4 pt-3.5 border-t border-[#E8E2D8] flex items-center justify-between">
                          <span className="text-xs font-bold text-[#EB5A1E] group-hover:text-[#D94F16] flex items-center gap-1.5 transition-colors">
                            <span>View Project Details</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                          <span className="text-[11px] font-mono font-bold text-[#6B7580] bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#E8E2D8]">
                            {p.area}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </FadeUp>
                );
              })}
            </div>

            {/* ===== LOAD MORE BUTTON ===== */}
            {visibleCount < filtered.length && (
              <div className="mt-20 flex justify-center">
                <button
                  onClick={loadMore}
                  className="group inline-flex items-center justify-center gap-2 bg-white border border-[#E8E2D8] hover:border-[#EB5A1E] text-[#172027] hover:text-[#EB5A1E] px-8 py-4 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
                  <span>Load More Projects</span>
                </button>
              </div>
            )}

            {/* End of results indicator */}
            {visibleCount >= filtered.length && filtered.length > 0 && (
              <div className="mt-20 flex justify-center text-[12px] font-mono font-bold text-[#A0AAB3] uppercase tracking-widest">
                End of Portfolio
              </div>
            )}
          </>
        )}
        </div>
      </section>

      {/* ===== 4. CREATIVE COMPACT CTA ===== */}
      <CompactCta
        badge="Guided Site Inspections"
        title="Want to See Our Work in"
        highlight="Person?"
        subtitle="Schedule a guided site inspection of an ongoing or completed RCC project with our senior civil engineering team."
        primaryText="Schedule Site Visit"
      />

    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function Projects({ onSelectProject }) {
  const [startIndex, setStartIndex] = useState(0);

  const allProjects = [
    {
      id: "res-01",
      category: "RESIDENTIAL",
      title: "Modern Residence",
      location: "Nashik, Maharashtra",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      desc: "Contemporary luxury residence featuring cantilevered balconies, exposed concrete finishes, and warm architectural lighting.",
    },
    {
      id: "com-01",
      category: "COMMERCIAL",
      title: "Apartment Complex",
      location: "Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
      desc: "Multi-family premium residential community engineered with seismic-resistant RCC framing and expansive glass balconies.",
    },
    {
      id: "ind-01",
      category: "INDUSTRIAL",
      title: "Industrial Facility",
      location: "MIDC, Nashik",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
      desc: "High-load manufacturing plant with heavy-duty laser screed industrial flooring and modern insulated metal wall paneling.",
    },
    {
      id: "inf-01",
      category: "INFRASTRUCTURE",
      title: "Bridge Construction",
      location: "Maharashtra",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=900&q=80",
      desc: "Reinforced concrete flyover viaduct and bridge structure built to IRC standards with high-grade pre-stressed girders.",
    },
    {
      id: "res-02",
      category: "RESIDENTIAL",
      title: "Luxury Villa",
      location: "Igatpuri, Maharashtra",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
      desc: "Scenic hilltop private villa with expansive cantilevered deck, natural stone cladding, and private infinity swimming pool.",
    },
    {
      id: "com-02",
      category: "COMMERCIAL",
      title: "Corporate IT Park",
      location: "Kharadi, Pune",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      desc: "Grade-A tech park campus with double-glazed acoustic facade, high-speed vertical transportation, and modern amenities.",
    },
  ];

  // Number of cards to show at once on desktop
  const visibleCount = 4;
  const maxStartIndex = Math.max(0, allProjects.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStartIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStartIndex ? prev + 1 : 0));
  };

  const visibleProjects = allProjects.slice(startIndex, startIndex + visibleCount);

  return (
    <section
      id="projects"
      className="relative py-18 sm:py-20 lg:py-24 bg-[#FAF7F2] text-[#172027] overflow-hidden select-none border-b border-[#E8E2D8]"
    >
      {/* Soft Ambient Background Aura on the left matching the reference */}
      <div className="pointer-events-none absolute -left-20 top-8 w-[480px] h-[480px] rounded-full bg-[#FFEFE5] opacity-80 blur-3xl" />
      <div className="pointer-events-none absolute -left-8 top-16 w-[360px] h-[360px] rounded-full border border-[#EB5A1E]/10" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 z-20">
        
        {/* ============================================================
            SECTION HEADER & CAROUSEL CONTROLS
        ============================================================ */}
        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          
          {/* Centered Heading Block on Desktop */}
          <div className="md:flex-1 text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center justify-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#EB5A1E] inline-block" />
              <span className="text-[12px] font-bold tracking-[0.24em] text-[#EB5A1E] uppercase">
                OUR PROJECTS
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-black text-[#172027] tracking-tight leading-tight">
              Spaces That <span className="text-[#EB5A1E]">Inspire</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-[#55606A] max-w-xl mx-auto leading-relaxed">
              A glimpse of our work that reflects our commitment to quality, precision and long-lasting value.
            </p>
          </div>

          {/* Right: Carousel Navigation Arrows */}
          <div className="flex items-center justify-center md:justify-end gap-3 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous projects"
              className="w-10 h-10 rounded-full border border-[#EB5A1E]/40 text-[#EB5A1E] bg-white flex items-center justify-center shadow-2xs hover:bg-[#FFEFE5] hover:border-[#EB5A1E] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2]" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next projects"
              className="w-10 h-10 rounded-full bg-[#EB5A1E] text-white flex items-center justify-center shadow-md shadow-orange-500/20 hover:bg-[#D94F16] transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* ============================================================
            PROJECTS GRID (4 Columns Matching the Reference Design)
        ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {visibleProjects.map((project) => (
            <Link
              key={project.id}
              to={`/project-view/${project.id}`}
              className="group bg-white rounded-2xl border border-[#E8E2D8] shadow-[0_8px_30px_rgba(23,32,39,0.06)] overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(23,32,39,0.12)] hover:border-[#EB5A1E]/35"
            >
              {/* Project Photo */}
              <div className="relative h-[200px] sm:h-[220px] w-full overflow-hidden bg-[#EFECE6]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Bottom Card Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  {/* Category Tag */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-3.5 h-[1.5px] bg-[#EB5A1E]" />
                    <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.2em] text-[#6B7580] uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Arrow Button Row */}
                  <div className="flex items-center justify-between gap-3 pt-0.5 mb-3">
                    <h3 className="font-heading text-[16px] sm:text-[17px] font-bold text-[#172027] transition-colors group-hover:text-[#EB5A1E] leading-snug">
                      {project.title}
                    </h3>

                    <div className="w-8 h-8 rounded-full border border-[#EB5A1E]/40 text-[#EB5A1E] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#EB5A1E] group-hover:text-white group-hover:border-[#EB5A1E]">
                      <ChevronRight className="w-4 h-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* Explicit View Project Details Button */}
                  <div className="pt-2.5 border-t border-[#E8E2D8] flex items-center justify-between text-xs font-bold text-[#EB5A1E] group-hover:text-[#D94F16]">
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ============================================================
            BOTTOM ACTION BUTTON (Centered Outline Button)
        ============================================================ */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2.5 border border-[#EB5A1E] text-[#EB5A1E] bg-white hover:bg-[#EB5A1E] hover:text-white px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

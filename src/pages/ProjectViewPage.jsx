import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Share2,
  ChevronRight,
  Building,
  Ruler,
  Clock,
  ShieldCheck,
  HardHat,
  Sparkles,
  Phone,
  MessageCircle,
  Layers,
  ChevronDown,
} from "lucide-react";
import { getProjectById, projectsData } from "../data/projectsData";
import CompactCta from "../components/CompactCta";

export default function ProjectViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // If no ID is provided in route (e.g. /project-view), getProjectById defaults to first project
  const project = getProjectById(id) || projectsData[0];

  // Active gallery image state
  const [activeImage, setActiveImage] = useState(
    project ? project.image : ""
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [id, project]);

  // Calculate Next and Previous projects for effortless continuous browsing
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0
      ? projectsData[currentIndex - 1]
      : projectsData[projectsData.length - 1];
  const nextProject =
    currentIndex < projectsData.length - 1
      ? projectsData[currentIndex + 1]
      : projectsData[0];

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${project.title} - Patole Constructions`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSelectAnotherProject = (e) => {
    const selectedId = e.target.value;
    navigate(`/project-view/${selectedId}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#172027] selection:bg-[#EB5A1E] selection:text-white font-sans">
      
      {/* =========================================================================
          1. BREADCRUMBS & PROJECT QUICK SWITCHER (Proper clearance below fixed Navbar)
      ========================================================================= */}
      <section className="relative pt-34 sm:pt-38 lg:pt-42 pb-5 px-6 sm:px-10 lg:px-16 border-b border-[#E8E2D8] bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Breadcrumb path */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-[13px] text-[#6B7580] font-medium">
            <Link to="/" className="hover:text-[#EB5A1E] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A0AAB3]" />
            <Link to="/projects" className="hover:text-[#EB5A1E] transition-colors">
              Projects Archive
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A0AAB3]" />
            <span className="text-[#172027] font-bold truncate max-w-[200px] sm:max-w-[320px]">
              {project.title}
            </span>
          </nav>

          {/* Quick Project Switcher Dropdown & Actions */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <Layers className="w-3.5 h-3.5 text-[#EB5A1E] absolute left-3 pointer-events-none" />
              <select
                value={project.id}
                onChange={handleSelectAnotherProject}
                aria-label="Switch project to view"
                className="pl-8 pr-8 py-1.5 rounded-lg border border-[#E8E2D8] bg-[#FAF8F5] text-xs font-bold text-[#172027] focus:outline-none focus:border-[#EB5A1E] transition-all cursor-pointer appearance-none shadow-2xs"
              >
                {projectsData.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.tag} &bull; {p.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-[#6B7580] absolute right-2.5 pointer-events-none" />
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#55606A] hover:text-[#EB5A1E] bg-[#FAF8F5] hover:bg-[#FFEFE5] border border-[#E8E2D8] px-3 py-1.5 rounded-lg transition-all cursor-pointer shadow-2xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? "Copied!" : "Share"}</span>
            </button>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#172027] hover:text-[#EB5A1E] transition-colors pl-2 border-l border-[#E8E2D8]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back to Archive</span>
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. PROJECT HERO TITLE & META HEADER
      ========================================================================= */}
      <header className="py-10 sm:py-14 px-6 sm:px-10 lg:px-16 border-b border-[#E8E2D8] bg-[#FAF8F5] relative overflow-hidden">
        {/* Soft Ambient Background Aura */}
        <div className="pointer-events-none absolute right-0 top-0 w-[500px] h-[500px] bg-[#FFEFE5]/70 rounded-full blur-3xl -z-0" />

        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-[#EB5A1E] text-white px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider shadow-2xs">
                  {project.categoryLabel || project.category}
                </span>

                {project.status === "Completed" ? (
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Completed & Handed Over
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Active Site Under Construction
                  </span>
                )}

                <span className="text-[12px] font-mono font-bold text-[#6B7580] bg-white border border-[#E8E2D8] px-3 py-1 rounded-full">
                  Year {project.year}
                </span>

                <span className="text-[12px] font-mono font-bold text-[#EB5A1E] bg-[#FFF2EB] border border-[#EB5A1E]/20 px-3 py-1 rounded-full">
                  PROJECT {project.tag}
                </span>
              </div>

              {/* Main Project Headline */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#172027] leading-[1.08] mb-4">
                {project.title}
              </h1>

              {/* Location & Client details */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base text-[#55606A] font-medium">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#EB5A1E] shrink-0" />
                  <span>{project.location}</span>
                </div>
                {project.client && (
                  <>
                    <span className="text-[#A0AAB3]">&bull;</span>
                    <span className="text-[#6B7580]">Client: <strong className="text-[#172027]">{project.client}</strong></span>
                  </>
                )}
              </div>
            </div>

            {/* Inquire CTA Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                to={`/contact?project=${encodeURIComponent(project.title)}`}
                className="inline-flex items-center justify-center gap-2.5 bg-[#EB5A1E] hover:bg-[#D94F16] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Inquire About This Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#E8E2D8]">
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E2D8] shadow-2xs interactive-hover-lift">
              <div className="flex items-center gap-2 text-[#EB5A1E] mb-1.5">
                <Ruler className="w-4 h-4" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B7580]">
                  Built-up Area
                </span>
              </div>
              <p className="font-heading text-xl sm:text-2xl font-bold text-[#172027]">
                {project.area}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E2D8] shadow-2xs interactive-hover-lift">
              <div className="flex items-center gap-2 text-[#EB5A1E] mb-1.5">
                <Clock className="w-4 h-4" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B7580]">
                  Timeline
                </span>
              </div>
              <p className="font-heading text-xl sm:text-2xl font-bold text-[#172027]">
                {project.duration}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E2D8] shadow-2xs interactive-hover-lift">
              <div className="flex items-center gap-2 text-[#EB5A1E] mb-1.5">
                <Building className="w-4 h-4" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B7580]">
                  Framing Type
                </span>
              </div>
              <p className="font-heading text-base sm:text-lg font-bold text-[#172027] truncate">
                {project.structure.split("&")[0].trim()}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E2D8] shadow-2xs interactive-hover-lift">
              <div className="flex items-center gap-2 text-[#EB5A1E] mb-1.5">
                <Calendar className="w-4 h-4" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B7580]">
                  Completion
                </span>
              </div>
              <p className="font-heading text-xl sm:text-2xl font-bold text-[#172027]">
                {project.year}
              </p>
            </div>
          </div>

        </div>
      </header>

      {/* =========================================================================
          3. FEATURED IMAGE & INTERACTIVE GALLERY
      ========================================================================= */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 bg-white border-b border-[#E8E2D8]">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Main Stage Display Image */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] w-full rounded-3xl overflow-hidden bg-[#20272D] shadow-xl border border-[#E8E2D8] mb-6">
            <img
              key={activeImage}
              src={activeImage}
              alt={project.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = project.fallbackImage || "/assets/images/clean-project-featured.jpg";
              }}
              className="w-full h-full object-cover transition-all duration-700 animate-fadeInUp"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-white pointer-events-none">
              <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-white/10">
                {project.title} &mdash; {project.location}
              </div>
              <span className="hidden sm:inline-block text-xs font-mono text-white/80 bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-md">
                Patole Engineering Archives
              </span>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6B7580] mb-3">
                Project Gallery &amp; Site Perspectives ({project.gallery.length} Views)
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {project.gallery.map((imgSrc, idx) => {
                  const isCurrent = activeImage === imgSrc;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(imgSrc)}
                      className={`relative aspect-[16/10] rounded-xl overflow-hidden bg-[#EAE4DC] border-2 transition-all cursor-pointer ${
                        isCurrent
                          ? "border-[#EB5A1E] ring-4 ring-[#EB5A1E]/20 shadow-md scale-[1.02]"
                          : "border-transparent opacity-75 hover:opacity-100 hover:border-[#DDD5C7]"
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt={`Site perspective ${idx + 1}`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/assets/images/clean-project-featured.jpg";
                        }}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          4. IN-DEPTH PROJECT OVERVIEW & SCOPE
      ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 bg-[#FAF7F2] border-b border-[#E8E2D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Narrative & Technical Highlights (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-[#EB5A1E] inline-block" />
                <span className="font-mono text-[11px] font-bold tracking-[0.24em] text-[#EB5A1E] uppercase">
                  Engineering Overview
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#172027] tracking-tight leading-tight mb-6">
                Structural Execution &amp; <br className="hidden sm:block" />
                Architectural Integrity.
              </h2>

              <p className="text-base sm:text-lg text-[#4A5560] leading-relaxed mb-6">
                {project.overview}
              </p>

              {/* Key Highlights Checklist */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D8] shadow-xs mt-8">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#172027] mb-5 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#EB5A1E]" />
                  <span>Key Specifications &amp; Quality Benchmarks</span>
                </h3>

                <ul className="space-y-4">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#FFF1E8] border border-[#FED7C0] text-[#EB5A1E] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[14px] sm:text-[15px] text-[#374151] font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Challenges & Solutions Card */}
              <div className="mt-8 bg-[#172027] text-white rounded-3xl p-6 sm:p-8 shadow-lg">
                <div className="flex items-center gap-2.5 mb-4 text-[#FF8542]">
                  <HardHat className="w-5 h-5" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    Site Challenge &amp; Resolution
                  </span>
                </div>

                <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed">
                  <div>
                    <h4 className="font-bold text-white mb-1 text-base">The Challenge:</h4>
                    <p className="text-white/80">{project.challenges}</p>
                  </div>
                  <div className="pt-3 border-t border-white/15">
                    <h4 className="font-bold text-[#FF8542] mb-1 text-base">Our Solution:</h4>
                    <p className="text-white/85">{project.solutions}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Stats & Scope of Work (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Scope of Work Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D8] shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#EB5A1E]" />
                  <span className="font-mono text-[11px] font-bold tracking-wider text-[#EB5A1E] uppercase">
                    Execution Deliverables
                  </span>
                </div>
                <h3 className="font-heading text-xl font-black text-[#172027] mb-5">
                  Scope of Work Delivered
                </h3>

                <div className="space-y-3">
                  {project.scope.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE4DC] flex items-center justify-between text-xs sm:text-[13.5px] font-bold text-[#172027]"
                    >
                      <span>{item}</span>
                      <span className="w-2 h-2 rounded-full bg-[#EB5A1E]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Numeric Benchmarks Stats Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D8] shadow-xs">
                <h3 className="font-heading text-xl font-black text-[#172027] mb-5">
                  Project Metrics
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#FFF6F0] border border-[#EB5A1E]/20">
                      <div className="text-[11px] font-mono font-bold text-[#6B7580] uppercase tracking-wider mb-1">
                        {stat.label}
                      </div>
                      <div className="font-heading text-lg sm:text-xl font-black text-[#EB5A1E]">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Consultation Box */}
              <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#FAF8F5] to-[#FFF4ED] border border-[#EB5A1E]/30 shadow-sm text-center">
                <h4 className="font-heading text-xl font-bold text-[#172027] mb-2">
                  Want to Build a Similar Project?
                </h4>
                <p className="text-xs sm:text-sm text-[#55606A] mb-6 leading-relaxed">
                  Our chief project engineers are available to discuss floor plans, site feasibility, and transparent cost estimates.
                </p>

                <div className="flex flex-col gap-3">
                  <Link
                    to={`/contact?project=${encodeURIComponent(project.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#EB5A1E] hover:bg-[#D94F16] text-white py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                  >
                    <span>Request Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="tel:+919876543210"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-[#172027] py-3 px-6 rounded-xl text-xs sm:text-sm font-bold border border-[#DDD5C7] transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#EB5A1E]" />
                    <span>Call +91 98765 43210</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PREVIOUS / NEXT PROJECT NAVIGATION
      ========================================================================= */}
      <section className="py-12 px-6 sm:px-10 lg:px-16 bg-white border-b border-[#E8E2D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Previous Project */}
            <Link
              to={`/project-view/${prevProject.id}`}
              className="group p-6 rounded-2xl border border-[#E8E2D8] hover:border-[#EB5A1E]/40 hover:bg-[#FAF8F5] transition-all flex items-center gap-4 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] group-hover:bg-[#FFF2EA] text-[#EB5A1E] flex items-center justify-center shrink-0 border border-[#E8E2D8] transition-colors">
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-mono font-bold text-[#6B7580] uppercase tracking-wider mb-1">
                  &larr; Previous Project
                </span>
                <h4 className="font-heading text-base sm:text-lg font-bold text-[#172027] group-hover:text-[#EB5A1E] transition-colors truncate">
                  {prevProject.title}
                </h4>
                <p className="text-xs text-[#55606A] truncate">{prevProject.location}</p>
              </div>
            </Link>

            {/* Next Project */}
            <Link
              to={`/project-view/${nextProject.id}`}
              className="group p-6 rounded-2xl border border-[#E8E2D8] hover:border-[#EB5A1E]/40 hover:bg-[#FAF8F5] transition-all flex items-center justify-end text-right gap-4 cursor-pointer"
            >
              <div className="min-w-0">
                <span className="block text-[11px] font-mono font-bold text-[#6B7580] uppercase tracking-wider mb-1">
                  Next Project &rarr;
                </span>
                <h4 className="font-heading text-base sm:text-lg font-bold text-[#172027] group-hover:text-[#EB5A1E] transition-colors truncate">
                  {nextProject.title}
                </h4>
                <p className="text-xs text-[#55606A] truncate">{nextProject.location}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] group-hover:bg-[#FFF2EA] text-[#EB5A1E] flex items-center justify-center shrink-0 border border-[#E8E2D8] transition-colors">
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 6. Creative Compact CTA */}
      <CompactCta
        badge="Start Your Build"
        title="Planning a Project Similar to"
        highlight={project.shortTitle || project.title}
        subtitle="Schedule a consultation with our lead structural engineers. We provide transparent estimates, timeline guarantees, and certified RCC quality."
        primaryText="Request Project Proposal"
        primaryLink={`/contact?project=${encodeURIComponent(project.title)}`}
      />

    </div>
  );
}

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CompactCta from "../components/CompactCta";
import {
  HardHat,
  ArrowRight,
  ShieldCheck,
  Award,
  Handshake,
  Leaf,
  Eye,
  Target,
  Clock,
  Building2,
  Users,
  CheckCircle2,
  Sparkles,
  Compass,

} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
  {
    num: "01",
    title: "Humble Beginnings",
    desc: "Started on-site as hands-on labourers, learning concrete mixing, formwork, and ground execution.",
    image: "/assets/images/about-journey-1.jpg",
  },
  {
    num: "02",
    title: "Mastering RCC Craft",
    desc: "Gained deep technical mastery in reinforcement detailing, casting precision, and quality control.",
    image: "/assets/images/clean-about-hardhat.jpg",
  },
  {
    num: "03",
    title: "First Independent Project",
    desc: "Earned trust of our first standalone client and delivered high-standard structural execution on time.",
    image: "/assets/images/about-journey-2.jpg",
  },
  {
    num: "04",
    title: "Building Our Firm",
    desc: "Founded Patole Constructions with dedicated crews, certified machinery, and strict safety standards.",
    image: "/assets/images/about-main-villa.jpg",
  },
  {
    num: "05",
    title: "Future-Ready Landmarks",
    desc: "Delivering end-to-end villas, commercial structures, and resilient community spaces across Maharashtra.",
    image: "/assets/images/clean-about-villa.jpg",
  },
];

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    desc: "We never compromise on grade materials, curing duration, or precision reinforcement standards on any project.",
  },
  {
    icon: Handshake,
    title: "Unbreakable Trust",
    desc: "Transparent estimation, open communication, and honest timelines for total client peace of mind.",
  },
  {
    icon: HardHat,
    title: "Field Discipline",
    desc: "Decades of direct site experience lead every decision — rigorous safety and structural stability guaranteed.",
  },
  {
    icon: Leaf,
    title: "Lasting Value",
    desc: "Durable RCC structures engineered to stand firm against weather and time, built for generations.",
  },
];

export default function AboutPage({ onOpenContact }) {
  const containerRef = useRef(null);
  const counterRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const timelineLineRef = useRef(null);

  const scrollToJourney = () => {
    const el = document.getElementById("our-journey-timeline");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const ease = "power3.out";

      gsap
        .timeline({ defaults: { ease } })
        .fromTo(".ab-hero-tag", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, delay: 0.1 })
        .fromTo(".ab-hero-title", { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "-=0.4")
        .fromTo(".ab-hero-desc", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.5");

      gsap.fromTo(
        ".ab-story-img",
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.85, ease, scrollTrigger: { trigger: ".ab-story-section", start: "top 80%" } }
      );
      gsap.fromTo(
        ".ab-story-content > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.13, ease, scrollTrigger: { trigger: ".ab-story-section", start: "top 80%" } }
      );

      if (timelineLineRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          { scaleX: 0 },
          { scaleX: 1, transformOrigin: "left center", duration: 1.2, ease: "power2.inOut", scrollTrigger: { trigger: "#our-journey-timeline", start: "top 75%" } }
        );
      }
      gsap.fromTo(
        ".ab-journey-card",
        { y: 40, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.12, ease, scrollTrigger: { trigger: "#our-journey-timeline", start: "top 75%" } }
      );

      const rawVals = [100, 150, 10, 100];
      const suffixes = ["+", "+", "+", "%"];
      const obj = { v0: 0, v1: 0, v2: 0, v3: 0 };
      ScrollTrigger.create({
        trigger: ".ab-stats-section",
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            v0: rawVals[0],
            v1: rawVals[1],
            v2: rawVals[2],
            v3: rawVals[3],
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              counterRefs.forEach((ref, i) => {
                if (ref.current) ref.current.textContent = `${Math.floor(obj["v" + i])}${suffixes[i]}`;
              });
            },
          });
        },
      });

      gsap.fromTo(
        ".ab-values-header",
        { x: -35, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.75, ease, scrollTrigger: { trigger: ".ab-values-section", start: "top 80%" } }
      );
      gsap.fromTo(
        ".ab-value-card",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.11, ease, scrollTrigger: { trigger: ".ab-values-section", start: "top 80%" } }
      );

      gsap.fromTo(
        ".ab-vision-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.18, ease, scrollTrigger: { trigger: ".ab-vision-section", start: "top 80%" } }
      );

      gsap.fromTo(
        ".ab-cta-content > *",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.1, ease, scrollTrigger: { trigger: ".ab-cta-section", start: "top 85%" } }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="about-page min-h-screen overflow-x-hidden bg-[#FBF9F6] text-[#182026] selection:bg-[#EB5A1E] selection:text-white"
    >
      {/* ============================================================
          PAGE HERO BANNER (about-hero.mp4 Video Background)
      ============================================================ */}
      <section className="relative pt-[100px] sm:pt-[110px] lg:pt-[148px] pb-12 sm:pb-14 lg:pb-16 overflow-hidden border-b border-[#2A343D]">
        {/* Cinematic Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/about-hero.mp4" type="video/mp4" />
          </video>
          {/* Pure cinematic legibility overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[760px]">
            <div className="ab-hero-tag inline-flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#EB5A1E] inline-block" />
              <span className="text-[11px] font-bold tracking-[0.24em] text-white/90 uppercase">
                About Patole Constructions
              </span>
            </div>

            <h1 className="ab-hero-title font-heading text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-[-0.03em] leading-[1.08] text-white mb-4">
              Built from the Ground Up. <span className="text-[#EB5A1E]">Driven by Integrity.</span>
            </h1>

            <p className="ab-hero-desc text-[14px] sm:text-[15.5px] text-white/85 leading-relaxed">
              From hands-on field execution to delivering certified RCC landmarks across Maharashtra — over a decade of disciplined civil engineering, transparent partnerships, and uncompromising structural standards.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="ab-story-section relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E8E5DF]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="ab-story-img relative">
              <div className="absolute -left-4 -top-4 h-20 w-20 border-l-2 border-t-2 border-[#EB5A1E]/30" />
              <div className="absolute -right-4 -bottom-4 h-20 w-20 border-r-2 border-b-2 border-[#EB5A1E]/30" />
              <div className="relative overflow-hidden rounded-2xl border border-[#E8E5DF] bg-white shadow-[0_20px_60px_rgba(24,32,38,.09)]">
                <img
                  src="/assets/images/clean-about-hardhat.jpg"
                  alt="Hardhat on architectural plans"
                  className="aspect-square w-full object-cover"
                />
                <div className="absolute bottom-5 left-5 rounded-xl border border-[#E8E5DF] bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                  <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#6B7280]">Built from</div>
                  <div className="mt-0.5 text-[13px] font-bold text-[#182026]">Real field experience.</div>
                </div>
              </div>
            </div>

            <div className="ab-story-content">
              <div className="inline-flex items-center gap-2.5 mb-3">
                <span className="w-6 h-[2px] bg-[#EB5A1E] inline-block" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-[#4B5563] uppercase">Our Story</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.1] text-[#182026] mb-5">
                Experience is the <br />
                <span className="text-[#EB5A1E]">Foundation</span> We Build On.
              </h2>
              <p className="text-[14px] leading-7 text-[#4B5563] mb-4">
                <strong className="font-semibold text-[#182026]">पाटोळे Constructions</strong> was built on real field knowledge and an unbreakable commitment to quality. Our journey began working as labourers, learning every aspect of concrete, steel, and structure from the ground.
              </p>
              <p className="text-[14px] leading-7 text-[#4B5563] mb-6">
                Those years taught us discipline, teamwork, and the importance of delivering work on time. Our first independent project became the turning point — giving us the confidence to build our own business from scratch.
              </p>
              <div className="border-l-[3px] border-[#EB5A1E] pl-5 py-1 bg-[#FFF4ED]/40 rounded-r-xl">
                <p className="text-[14.5px] font-semibold leading-7 text-[#182026] italic">
                  "The same values that shaped our beginning continue to define how we build today — stronger, safer and better."
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "IS 456 & IS 1893 compliant RCC frames",
                  "Fe 550D TMT primary certified steel",
                  "NABL lab tested ready-mix concrete",
                  "Zero-deviation transparent BOQ billing",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EB5A1E] shrink-0 mt-0.5" />
                    <span className="text-[12.5px] text-[#4B5563] leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="ab-stats-section relative overflow-hidden bg-[#FAF7F2] py-14 border-b border-[#E8E5DF]">
        <div className="pointer-events-none absolute right-[-60px] top-[-80px] h-[340px] w-[340px] rounded-full border border-[#EB5A1E]/10" />
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#E8E5DF]">
            {[
              { icon: Users, value: "100+", label: "Happy Clients", ref: counterRefs[0] },
              { icon: Building2, value: "150+", label: "Projects Completed", ref: counterRefs[1] },
              { icon: Clock, value: "10+", label: "Years Experience", ref: counterRefs[2] },
              { icon: ShieldCheck, value: "100%", label: "Commitment to Quality", ref: counterRefs[3] },
            ].map(({ icon: Icon, value, label, ref: r }, i) => (
              <div key={label} className={"px-6 py-8 sm:px-10 lg:px-12" + (i > 1 ? " border-t lg:border-t-0 border-[#E8E5DF]" : "")}>
                <div className="w-10 h-10 rounded-lg bg-[#FFF4ED] flex items-center justify-center mb-5 border border-[#EB5A1E]/15">
                  <Icon className="w-4 h-4 text-[#EB5A1E]" strokeWidth={1.8} />
                </div>
                <div ref={r} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#182026]">
                  {value}
                </div>
                <div className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6B7280]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE — EXACT MATCH TO REFERENCE SPEC */}
      <section id="our-journey-timeline" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D8]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-16">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-3.5">
                <span className="w-8 h-[2px] bg-[#EB5A1E] inline-block" />
                <span className="text-[11.5px] font-bold tracking-[0.24em] text-[#C25828] uppercase">
                  THE JOURNEY
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.08] text-[#172027]">
                Five Chapters. <br className="hidden sm:inline" />
                <span className="text-[#EB5A1E]">One Foundation.</span>
              </h2>
            </div>

            <div className="border-l border-[#DFD7CB] pl-6 lg:pl-8 max-w-[420px]">
              <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#5F6C79]">
                Every milestone reflects a shift — from learning the craft to taking full responsibility for the structures and relationships we build.
              </p>
            </div>
          </div>

          {/* 5-Column Horizontal Timeline */}
          <div className="relative">
            {/* Continuous Horizontal Timeline Line */}
            <div
              ref={timelineLineRef}
              className="hidden lg:block absolute left-0 right-0 top-[88px] h-[1.5px] bg-[#E5DDD0] origin-left z-0"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE2D6]">
              {journeySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="ab-journey-card group flex flex-col justify-between pt-2 pb-6 px-4 sm:px-5 lg:px-6 relative"
                >
                  {/* Top Block: Ghost Number, Timeline Node, Title & Desc */}
                  <div>
                    {/* Giant Ghost Number */}
                    <div className="font-heading font-black text-6xl lg:text-[72px] leading-none text-[#FCEBE1] select-none mb-3">
                      {step.num}
                    </div>

                    {/* Orange Node on Timeline Line */}
                    <div className="relative z-10 w-3.5 h-3.5 rounded-full bg-[#EB5A1E] border-[2.5px] border-white shadow-xs mb-6 group-hover:scale-125 transition-transform" />

                    {/* Step Title */}
                    <h3 className="font-heading text-[16px] sm:text-[17px] font-extrabold text-[#172027] leading-snug mb-2.5">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-[12.5px] sm:text-[13px] leading-[1.65] text-[#5F6C79] font-normal mb-6">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Block: Photo with Architectural Rounded Top-Right Corner */}
                  <div className="relative h-[145px] sm:h-[155px] lg:h-[160px] rounded-2xl rounded-tr-[42px] overflow-hidden shadow-xs border border-white/70">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="ab-values-section relative overflow-hidden bg-[#FAF7F2] py-16 sm:py-20 lg:py-24 border-b border-[#E8E5DF]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid gap-12 lg:gap-20" style={{ gridTemplateColumns: "1fr 1.6fr" }}>
            <div className="ab-values-header lg:pt-4">
              <div className="inline-flex items-center gap-2.5 mb-3">
                <span className="w-6 h-[2px] bg-[#EB5A1E] inline-block" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-[#4B5563] uppercase">What Drives Us</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.1] text-[#182026] mb-5">
                Values That <br />
                <span className="text-[#EB5A1E]">Hold Us Up.</span>
              </h2>
              <p className="text-[13.5px] leading-6 text-[#6B7280] max-w-[340px]">
                Construction is more than concrete and steel. The strongest structures are built on principles that remain consistent from first meeting to final handover.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-[#E8E5DF] border border-[#E8E5DF] rounded-2xl overflow-hidden">
              {coreValues.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div key={idx} className="ab-value-card group bg-white p-8 hover:bg-[#FFF4ED]/60 transition-all duration-300 cursor-default">
                    <div className="w-11 h-11 rounded-xl bg-[#FFF4ED] flex items-center justify-center mb-5 border border-[#EB5A1E]/15 group-hover:bg-[#EB5A1E] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#EB5A1E] group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                    </div>
                    <div className="text-[9px] font-bold tracking-[0.2em] text-[#EB5A1E] uppercase mb-1.5">0{idx + 1}</div>
                    <h3 className="font-heading text-[17px] font-bold text-[#182026] mb-2">{v.title}</h3>
                    <p className="text-[12.5px] leading-6 text-[#6B7280]">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          VISION & MISSION — EXACT MATCH TO REFERENCE SPEC
      ================================================================ */}
      <section className="ab-vision-section relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D8]">
        {/* Left Background Orange Ribbon & Dot Grid (Built using Div & SVG) */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-[420px] overflow-hidden select-none z-0">
          {/* Orange Curved Contour Line */}
          <svg className="w-full h-full" viewBox="0 0 420 500" fill="none">
            <path
              d="M -20 150 L 50 150 Q 80 150 100 175 L 185 305 Q 205 335 235 335 L 380 335"
              stroke="#F07C44"
              strokeWidth="1.75"
              strokeLinecap="round"
              opacity="0.85"
            />
          </svg>

          {/* Left Dot Matrix Grid (6 columns x 4 rows) */}
          <div className="absolute left-8 sm:left-14 top-28 sm:top-32 grid grid-cols-6 gap-2.5 opacity-40">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#EB5A1E]" />
            ))}
          </div>
        </div>

        {/* Right Background Architectural Sketch & Orange Ribbon (Built using Divs & SVG) */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-[520px] lg:w-[640px] overflow-hidden select-none z-0">
          {/* Multi-story RCC Building Construction Sketch Watermark */}
          <div className="absolute right-0 top-0 bottom-0 w-full opacity-[0.16] mix-blend-multiply">
            <img
              src="/assets/images/about-us-right-bg.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain object-right"
            />
          </div>

          {/* Right Orange Curved Contour Line */}
          <svg className="absolute right-0 bottom-0 w-[440px] h-full" viewBox="0 0 440 500" fill="none">
            <path
              d="M 50 405 L 175 405 Q 205 405 225 380 L 315 250 Q 335 220 365 220 L 455 220"
              stroke="#F07C44"
              strokeWidth="1.75"
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-[680px] mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <span className="w-8 h-[2px] bg-[#EB5A1E]" />
              <span className="text-[11.5px] font-bold tracking-[0.22em] text-[#C25828] uppercase">
                PURPOSE &amp; PRINCIPLES
              </span>
              <span className="w-8 h-[2px] bg-[#EB5A1E]" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#172027]">
              Our <span className="text-[#EB5A1E]">Vision &amp; Mission</span>
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#5D6770] leading-relaxed max-w-[560px] mx-auto">
              Guiding principles that drive our engineering standards and every structure we build.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* ══ CARD 1: OUR VISION ══ */}
            <div className="ab-vision-card group relative bg-[#FAF7F2] rounded-[26px] sm:rounded-[30px] p-6 sm:p-7 lg:p-8 shadow-[0_10px_32px_rgba(23,32,39,0.05)] border border-[#E8E2D8] hover:border-[#EB5A1E]/30 hover:shadow-[0_16px_44px_rgba(23,32,39,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                
                {/* Left: Text Content */}
                <div className="flex-1 w-full flex flex-col justify-between">
                  <div>
                    {/* Icon & Title Row */}
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-[#FFF2EB] border border-[#FCDCCE] flex items-center justify-center text-[#EB5A1E] shrink-0 shadow-xs">
                        <Eye className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#EB5A1E]">
                          01 / FORWARD LOOK
                        </span>
                        <h3 className="font-heading text-xl sm:text-2xl font-black text-[#172027] leading-tight">
                          Our Vision
                        </h3>
                      </div>
                    </div>

                    {/* Orange Horizontal Accent Line */}
                    <div className="w-8 h-[2px] bg-[#EB5A1E] mb-3.5" />

                    {/* Quote Statement */}
                    <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#4A5560] font-normal">
                      &ldquo;To be recognized as a leading construction company known for quality, innovation, integrity, and a lasting positive impact on the communities we serve across Maharashtra.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Right: Slanted Angled Image with Geometric Ribbon Accent */}
                <div className="relative w-full sm:w-[190px] md:w-[210px] lg:w-[220px] h-[190px] sm:h-[210px] shrink-0 self-center">
                  {/* Peach/Orange Angled Geometric Accent Ribbon on bottom-right */}
                  <div className="absolute inset-0 translate-x-2.5 translate-y-2 -skew-x-[12deg] bg-gradient-to-br from-[#F6A27E] to-[#EB5A1E] rounded-2xl sm:rounded-3xl opacity-85" />
                  
                  {/* Slanted Image Container */}
                  <div className="relative w-full h-full -skew-x-[12deg] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md">
                    <img
                      src="/assets/images/about-main-villa.jpg"
                      alt="Our Vision"
                      className="w-full h-full object-cover skew-x-[12deg] scale-125"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* ══ CARD 2: OUR MISSION ══ */}
            <div className="ab-vision-card group relative bg-[#FAF7F2] rounded-[26px] sm:rounded-[30px] p-6 sm:p-7 lg:p-8 shadow-[0_10px_32px_rgba(23,32,39,0.05)] border border-[#E8E2D8] hover:border-[#EB5A1E]/30 hover:shadow-[0_16px_44px_rgba(23,32,39,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                
                {/* Left: Text Content */}
                <div className="flex-1 w-full flex flex-col justify-between">
                  <div>
                    {/* Icon & Title Row */}
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-[#EEF5F9] border border-[#D8E6EE] flex items-center justify-center text-[#EB5A1E] shrink-0 shadow-xs">
                        <Target className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#5D6B78]">
                          02 / EXECUTION MANDATE
                        </span>
                        <h3 className="font-heading text-xl sm:text-2xl font-black text-[#172027] leading-tight">
                          Our Mission
                        </h3>
                      </div>
                    </div>

                    {/* Orange Horizontal Accent Line */}
                    <div className="w-8 h-[2px] bg-[#EB5A1E] mb-3.5" />

                    {/* Quote Statement */}
                    <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#4A5560] font-normal">
                      &ldquo;To deliver high-quality RCC construction solutions that enhance lives, strengthen communities, and contribute to a better, more sustainable future &mdash; one structure at a time.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Right: Slanted Angled Image with Slate Ribbon Accent */}
                <div className="relative w-full sm:w-[190px] md:w-[210px] lg:w-[220px] h-[190px] sm:h-[210px] shrink-0 self-center">
                  {/* Slate Gray Angled Accent on top-left */}
                  <div className="absolute inset-0 -translate-x-2.5 -translate-y-2 -skew-x-[12deg] bg-gradient-to-br from-[#E2E8F0] to-[#CBD5E1] rounded-2xl sm:rounded-3xl" />
                  
                  {/* Slanted Image Container */}
                  <div className="relative w-full h-full -skew-x-[12deg] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md">
                    <img
                      src="/assets/images/clean-about-columns.jpg"
                      alt="Our Mission"
                      className="w-full h-full object-cover skew-x-[12deg] scale-125"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Creative Compact CTA */}
      <CompactCta
        badge="Let Us Build Together"
        title="Your Idea. Our Engineering"
        highlight="Craft."
        subtitle="From structural planning to turnkey execution, let us turn your vision into a landmark built to last."
      />
    </div>
  );
}

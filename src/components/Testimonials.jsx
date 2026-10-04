import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { CalligraphyTestimonials } from './CalligraphyAccent';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Deshmukh',
      role: 'Homeowner, Nashik',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      projectImg: '/assets/images/clean-testimonial-1.jpg',
      stars: 5,
      quote: '“Excellent work quality and professional team. They completed our home on time and exactly as we envisioned.”',
      isDark: false,
    },
    {
      id: 2,
      name: 'Amit Patil',
      role: 'Business Owner, Pune',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      projectImg: '/assets/images/clean-testimonial-2.jpg',
      stars: 5,
      quote: '“Very reliable and transparent throughout the project. The finishing and attention to detail are truly impressive.”',
      isDark: true, // Center highlighted dark card in reference
    },
    {
      id: 3,
      name: 'Sneha Kulkarni',
      role: 'Villa Owner, Nashik',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      projectImg: '/assets/images/clean-testimonial-3.jpg',
      stars: 5,
      quote: '“Professional, supportive and easy to work with. Highly recommended for quality construction.”',
      isDark: false,
    },
  ];

  const clientAvatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80',
  ];

  return (
    <section
      id="testimonials"
      className="relative py-10 sm:py-12 lg:py-14 bg-white text-[#172027] overflow-hidden select-none"
    >
      {/* ============================================================
          BACKGROUND ACCENTS (Drafting Arcs + build-graphics.png)
      ============================================================ */}

      {/* Blueprint architectural wireframe on bottom-right */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-10 w-[340px] sm:w-[440px] lg:w-[560px] opacity-40 mix-blend-multiply leading-none">
        <img
          src="/assets/images/build-graphics.png"
          alt=""
          aria-hidden="true"
          className="block w-full h-auto object-contain object-right-bottom"
        />
      </div>

      {/* Decorative architectural circle curves */}
      <div className="pointer-events-none absolute -top-[120px] left-[35%] w-[480px] h-[480px] rounded-full border border-[#EBE4D8] opacity-50" />
      <div className="pointer-events-none absolute top-[20px] left-[38%] w-[320px] h-[320px] rounded-full border border-[#EDE7DC] opacity-40" />

      {/* ============================================================
          MAIN CONTAINER
      ============================================================ */}
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 z-20">
        
        {/* ========================================================
            TOP ROW: Left Header + Center Calligraphy + Right Arch Villa
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 lg:mb-10">
          
          {/* Left: Heading & Intro */}
          <div className="lg:col-span-5 max-w-[460px]">
            {/* Tag */}
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-7 h-[2px] bg-[#EB5A1E] inline-block" />
              <span className="text-[10.5px] font-bold tracking-[0.24em] text-[#4F5B65] uppercase">
                What Our Clients Say
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-[-0.03em] leading-[1.08] text-[#172027] mb-2.5">
              Trusted by<br />
              People Who<br />
              <span className="text-[#EB5A1E]">Build Dreams.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-[13px] sm:text-[13.5px] text-[#5D6770] leading-relaxed">
              Our clients’ satisfaction drives us to deliver better spaces, every time.
            </p>
          </div>

          {/* Center & Right Composition: Calligraphy + testimonial-bg.png + Trust Column */}
          <div className="lg:col-span-7 relative flex items-start justify-end">
            
            {/* Center Calligraphy Handwritten Script ("Real People. Real Experiences.") */}
            <div className="hidden sm:block absolute left-2 lg:left-4 -top-1 z-30 pointer-events-none">
              <CalligraphyTestimonials />
            </div>

            {/* Right Architectural Arch Villa (testimonial-bg.png) */}
            <div className="relative flex items-center gap-4 sm:gap-6">
              
              {/* Arch Image Container */}
              <div className="relative w-[280px] sm:w-[350px] lg:w-[380px] h-[160px] sm:h-[190px] lg:h-[210px] rounded-tl-[120px] sm:rounded-tl-[160px] overflow-hidden shadow-[0_12px_36px_rgba(20,25,30,0.12)] border border-[#E5DDD2] bg-[#EAE3D8]">
                <img
                  src="/assets/images/testimonial-bg.png"
                  alt="Architectural Excellence"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Right Trust Pillars Text */}
              <div className="hidden md:flex flex-col items-start gap-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[#69727B] leading-[1.35] pl-1">
                <div className="h-6 w-px bg-[#B0A499] mb-1" />
                <span>Homes</span>
                <span>Businesses</span>
                <span>Relationships</span>
                <span>That Last</span>
                <div className="h-[2px] w-6 bg-[#EB5A1E] mt-1" />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            MIDDLE ROW: 3 Testimonial Cards Carousel + Arrow Buttons
        ======================================================== */}
        <div className="relative mb-8 sm:mb-10">
          
          {/* Previous Arrow Button */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="hidden sm:flex absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-[#E4DCD0] text-[#172027] hover:text-[#EB5A1E] shadow-md items-center justify-center z-30 transition-all hover:scale-105"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 text-[#EB5A1E]" />
          </button>

          {/* 3 Testimonials Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className={`
                  rounded-2xl p-4 sm:p-4.5 flex flex-col justify-between transition-all duration-300
                  ${
                    t.isDark
                      ? 'bg-[#172026] text-white shadow-[0_16px_40px_rgba(23,32,38,0.22)] border border-neutral-700/50 md:-translate-y-1'
                      : 'bg-white text-[#172027] shadow-[0_8px_25px_rgba(20,25,30,0.06)] border border-[#E8E2D8]'
                  }
                `}
              >
                <div>
                  <div className="flex items-start gap-3.5 mb-3.5">
                    {/* Project Photo on Left */}
                    <div className="w-[42%] shrink-0 rounded-xl overflow-hidden h-[125px] sm:h-[135px] bg-[#EAE4DC] shadow-inner">
                      <img
                        src={t.projectImg}
                        alt="Project Completed"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Review Quote & Stars on Right */}
                    <div className="flex-1 flex flex-col justify-between">
                      {/* 5 Orange Stars */}
                      <div className="flex items-center gap-1 mb-1.5">
                        {[...Array(t.stars)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#EB5A1E] text-[#EB5A1E]" />
                        ))}
                      </div>

                      {/* Quote text */}
                      <p
                        className={`text-[11.5px] sm:text-[12px] leading-[1.5] ${
                          t.isDark ? 'text-white/90' : 'text-[#4A555F]'
                        }`}
                      >
                        {t.quote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom User Avatar & Details */}
                <div
                  className={`pt-3 border-t flex items-center gap-3 ${
                    t.isDark ? 'border-white/10' : 'border-[#EDE6DC]'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#EB5A1E] shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4
                      className={`text-[13px] font-bold leading-tight ${
                        t.isDark ? 'text-white' : 'text-[#172027]'
                      }`}
                    >
                      {t.name}
                    </h4>
                    <p
                      className={`text-[10.5px] font-medium mt-0.5 ${
                        t.isDark ? 'text-white/60' : 'text-[#6C7781]'
                      }`}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="hidden sm:flex absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#EB5A1E] hover:bg-[#D94F16] text-white shadow-md items-center justify-center z-30 transition-all hover:scale-105"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* ========================================================
            BOTTOM ROW: Social Proof + Avatars Stack + Right Tagline
        ======================================================== */}
        <div className="pt-4 border-t border-[#E8E2D8]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left Social Proof & Client Avatars */}
          <div className="flex items-center gap-4 sm:gap-6 pl-0 sm:pl-16 lg:pl-20">
            <div>
              <div className="font-heading text-2xl font-black text-[#EB5A1E] leading-none">
                100+
              </div>
              <div className="text-[10.5px] font-semibold text-[#505B64] leading-tight mt-0.5">
                Happy Clients<br />Across Maharashtra
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="h-8 w-px bg-[#D6CDC2] hidden sm:block" />

            {/* Client Avatars Stack */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5 overflow-hidden">
                {clientAvatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Client ${i + 1}`}
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                  />
                ))}
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EB5A1E] text-white text-[10px] font-bold ring-2 ring-white">
                  +
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#66727C]">
                and many more...
              </span>
            </div>
          </div>

          {/* Right Tagline */}
          <div className="flex items-center gap-2.5 text-right">
            <span className="w-[2px] h-7 bg-[#EB5A1E]" />
            <div className="text-[9.5px] font-bold tracking-[0.22em] text-[#556068] uppercase text-left leading-[1.35]">
              <span>Spaces</span><br />
              <span>That Create</span><br />
              <span>Happier Stories</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          FOREGROUND BOTANICALS ON BOTTOM-LEFT (botanical.png)
      ============================================================ */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-30 w-[180px] sm:w-[230px] lg:w-[270px] xl:w-[300px] leading-none">
        <img
          src="/assets/images/botanical.png"
          alt=""
          aria-hidden="true"
          className="block w-full h-auto object-contain object-left-bottom opacity-95 drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
        />
      </div>
    </section>
  );
}

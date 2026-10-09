import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { CalligraphyTestimonials } from './CalligraphyAccent';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Deshmukh',
      role: 'Homeowner, Gangapur Road, Nashik',
      projectType: '4BHK Luxury Villa',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      projectImg: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
      fallbackProjectImg: '/assets/images/clean-testimonial-1.jpg',
      stars: 5,
      quote: '“Patole Constructions delivered our dream villa with unmatched structural precision. From deep foundation footings to luxury cantilever slabs, the quality and discipline were truly exceptional.”',
      isDark: false,
    },
    {
      id: 2,
      name: 'Amit Patil',
      role: 'Managing Director, Horizon Tech, Pune',
      projectType: 'G+5 Corporate IT Park',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      projectImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      fallbackProjectImg: '/assets/images/clean-testimonial-2.jpg',
      stars: 5,
      quote: '“Very reliable, transparent billing and completed two weeks ahead of schedule. Their heavy RCC framing and high-grade finishing met our rigorous corporate safety benchmarks.”',
      isDark: true, // Signature highlighted card
    },
    {
      id: 3,
      name: 'Dr. Sneha Kulkarni',
      role: 'Director, Metro Care Diagnostics, Nashik',
      projectType: 'Commercial Diagnostic Plaza',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      projectImg: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
      fallbackProjectImg: '/assets/images/clean-testimonial-3.jpg',
      stars: 5,
      quote: '“Constructing heavy medical equipment floors with zero vibration required specialized civil engineering. The team handled every technical detail flawlessly.”',
      isDark: false,
    },
    {
      id: 4,
      name: 'Vikas Shinde',
      role: 'Director, Apex Forgings, Ambad MIDC',
      projectType: 'Industrial Manufacturing Plant',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
      projectImg: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
      fallbackProjectImg: '/assets/images/clean-project-4.jpg',
      stars: 5,
      quote: '“Their laser-screed industrial concrete flooring and heavy gantry crane pedestals withstand our daily dynamic press operations with zero micro-cracks. Highly recommended.”',
      isDark: false,
    },
    {
      id: 5,
      name: 'Pooja & Aniket Joshi',
      role: 'Bungalow Owners, Govind Nagar, Nashik',
      projectType: 'Modern Contemporary Residence',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      projectImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      fallbackProjectImg: '/assets/images/clean-testimonial-1.jpg',
      stars: 5,
      quote: '“Complete turnkey transparency from civil construction to woodwork and waterproofing. We didn’t face a single headache during the entire 11-month build.”',
      isDark: true,
    },
    {
      id: 6,
      name: 'Rajesh Khare',
      role: 'Property Investor, Baner, Pune',
      projectType: 'Commercial Retail Center',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      projectImg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
      fallbackProjectImg: '/assets/images/clean-testimonial-2.jpg',
      stars: 5,
      quote: '“Honest timeline commitments, disciplined site supervisors, and proactive daily photo reporting. Their civil engineering integrity is second to none across Maharashtra.”',
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

  // Dynamically update visible cards per view based on viewport width
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  // Auto-slide every 5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  // Keep index within bounds if window resizes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch Swipe Support for Mobile/Tablet
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section
      id="testimonials"
      className="relative py-10 sm:py-12 lg:py-16 bg-white text-[#172027] overflow-hidden select-none"
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
            MIDDLE ROW: Smooth Sliding Testimonial Carousel
        ======================================================== */}
        <div
          className="relative mb-6 sm:mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            className="group absolute -left-2 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white hover:bg-[#EB5A1E] border border-[#E8E2D8] hover:border-[#EB5A1E] shadow-md flex items-center justify-center z-30 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-[#EB5A1E] group-hover:text-white transition-colors" />
          </button>

          {/* Carousel Viewport Container */}
          <div className="overflow-hidden py-6 px-1 -mx-2">
            <div
              className="flex items-center transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {testimonials.map((t, index) => {
                // Determine whether this card is the center highlighted card
                const isCenter =
                  (cardsPerView === 3 && index === currentIndex + 1) ||
                  (cardsPerView === 2 && index === currentIndex) ||
                  (cardsPerView === 1 && index === currentIndex);

                return (
                  <div
                    key={t.id}
                    className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2.5 sm:px-3 transition-all duration-500"
                  >
                    <div
                      className={`rounded-[22px] p-4 sm:p-4.5 flex items-center gap-3.5 sm:gap-4 transition-all duration-500 ${
                        isCenter
                          ? 'bg-[#182229] text-white shadow-[0_22px_50px_rgba(20,28,34,0.38)] border border-neutral-700/60 md:-translate-y-3 sm:py-5 min-h-[240px] sm:min-h-[255px]'
                          : 'bg-white text-[#172027] shadow-[0_8px_25px_rgba(20,25,30,0.06)] border border-[#E8E2D8] hover:shadow-lg sm:py-3.5 min-h-[200px] sm:min-h-[215px]'
                      }`}
                    >
                      {/* Project Photo on Left: TALLER / GREATER HEIGHT ON CENTER CARD */}
                      <div
                        className={`shrink-0 rounded-[14px] sm:rounded-[16px] overflow-hidden bg-[#EAE4DC] shadow-inner transition-all duration-500 ${
                          isCenter
                            ? 'w-[125px] sm:w-[145px] lg:w-[155px] h-[210px] sm:h-[230px] lg:h-[245px]'
                            : 'w-[110px] sm:w-[125px] lg:w-[130px] h-[165px] sm:h-[180px] lg:h-[190px]'
                        }`}
                      >
                        <img
                          src={t.projectImg}
                          alt={t.name}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = t.fallbackProjectImg;
                          }}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>

                      {/* Review Quote, Stars, Divider, Avatar on Right */}
                      <div className="flex-1 flex flex-col justify-between py-1 min-w-0 h-full">
                        <div>
                          {/* 5 Orange Stars */}
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(t.stars)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-3.5 h-3.5 fill-[#EB5A1E] text-[#EB5A1E]"
                              />
                            ))}
                          </div>

                          {/* Quote text */}
                          <p
                            className={`text-[11.5px] sm:text-[12px] lg:text-[12.5px] leading-[1.55] line-clamp-4 sm:line-clamp-5 ${
                              isCenter ? 'text-white/95 font-medium' : 'text-[#4A555F]'
                            }`}
                          >
                            {t.quote}
                          </p>

                          {/* Subtle Divider Line */}
                          <div
                            className={`w-7 sm:w-8 h-[1.5px] my-2.5 sm:my-3 ${
                              isCenter ? 'bg-[#3B4752]' : 'bg-[#E5DDD2]'
                            }`}
                          />
                        </div>

                        {/* Avatar, Name, Role */}
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div
                            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shrink-0 bg-neutral-200 ${
                              isCenter ? 'ring-1 ring-[#EB5A1E]/80' : 'border border-[#EB5A1E]/40'
                            }`}
                          >
                            <img
                              src={t.avatar}
                              alt={t.name}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80';
                              }}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4
                              className={`text-[12.5px] sm:text-[13px] font-bold leading-tight truncate ${
                                isCenter ? 'text-white' : 'text-[#172027]'
                              }`}
                            >
                              {t.name}
                            </h4>
                            <p
                              className={`text-[10px] sm:text-[10.5px] font-medium mt-0.5 truncate ${
                                isCenter ? 'text-white/60' : 'text-[#6C7781]'
                              }`}
                            >
                              {t.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#EB5A1E] hover:bg-[#D94F16] text-white shadow-lg flex items-center justify-center z-30 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i
                  ? 'w-7 bg-[#EB5A1E]'
                  : 'w-2 bg-[#D5CDC2] hover:bg-[#B8ADA0]'
              }`}
            />
          ))}
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
          BACKGROUND BOTANICALS ON BOTTOM-LEFT (botanical.png - placed in backward bg)
      ============================================================ */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 w-[180px] sm:w-[230px] lg:w-[270px] xl:w-[300px] leading-none">
        <img
          src="/assets/images/botanical.png"
          alt=""
          aria-hidden="true"
          className="block w-full h-auto object-contain object-left-bottom opacity-80"
        />
      </div>
    </section>
  );
}

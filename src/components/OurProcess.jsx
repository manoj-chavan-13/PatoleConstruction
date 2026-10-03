import React from 'react';

export default function OurProcess() {
  return (
    <section id="process" className="relative pt-8 sm:pt-10 lg:pt-12 pb-0 bg-[#FBF9F6] overflow-hidden select-none">
      {/* Background Soft Lighting Glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[250px] bg-gradient-to-b from-[#FFF5ED]/60 via-[#FFF8F3]/20 to-transparent pointer-events-none rounded-full blur-3xl -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Header & Architecture Row (Compact, Balanced) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center mb-6 lg:mb-8">
          {/* Left Text Block */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 lg:pr-4">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#EB5A1E] rounded-full inline-block" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#4B5563] uppercase">
                Our Process
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold tracking-tight leading-[1.16] text-[#182026] mb-2.5">
              A Simple Process <br />
              <span className="text-[#EB5A1E]">For Exceptional Spaces</span>
            </h2>

            {/* Description */}
            <p className="text-[13px] sm:text-[13.5px] text-[#4B5563] leading-relaxed max-w-[440px]">
              From your vision to a beautifully built space — we make the journey simple, transparent and seamless.
            </p>
          </div>

          {/* Right Architecture Showcase (Fully Visible, No Cropping) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-end items-center">
            <div className="relative w-full max-w-[580px]">
              <img
                src="/assets/images/process-top.png"
                alt="Architectural Villa - Patole Construction"
                className="w-full h-auto object-contain block drop-shadow-xs"
              />

              {/* Vertical Architectural Process Markers on the right (matches our-process-home.png) */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-5 flex items-start gap-2 sm:gap-2.5 bg-white/90 backdrop-blur-md px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-md border border-white/90 shadow-xs">
                <div className="w-[1.2px] h-12 sm:h-14 bg-[#EB5A1E]/70 rounded-full" />
                <div className="flex flex-col justify-between h-12 sm:h-14 text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.22em] text-[#1F2937] uppercase">
                  <span className="hover:text-[#EB5A1E] transition-colors cursor-default">Idea</span>
                  <span className="hover:text-[#EB5A1E] transition-colors cursor-default">Plan</span>
                  <span className="hover:text-[#EB5A1E] transition-colors cursor-default">Build</span>
                  <span className="hover:text-[#EB5A1E] transition-colors cursor-default">Deliver</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Steps Row - COMPACT & REFINED ARCHES */}
        <div className="relative w-full mb-8 lg:mb-10">
          {/* Subtle horizontal connecting line running behind the cards (desktop) */}
          <div className="hidden lg:block absolute top-[52%] left-[12%] right-[12%] h-[1.2px] bg-[#E8E2D8] -translate-y-1/2 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-7 gap-x-4 sm:gap-x-6 lg:gap-x-4 relative z-10">
            {[
              {
                id: '01',
                title: 'Consult',
                image: '/assets/images/clean-process-1.jpg',
                icon: (
                  <svg className="w-3.5 h-3.5 text-[#EB5A1E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <circle cx="9" cy="10" r="1" fill="currentColor" />
                    <circle cx="12" cy="10" r="1" fill="currentColor" />
                    <circle cx="15" cy="10" r="1" fill="currentColor" />
                  </svg>
                ),
              },
              {
                id: '02',
                title: 'Plan',
                image: '/assets/images/clean-process-2.jpg',
                icon: (
                  <svg className="w-3.5 h-3.5 text-[#EB5A1E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="9" y1="6" x2="15" y2="6" />
                    <line x1="9" y1="10" x2="15" y2="10" />
                    <line x1="9" y1="14" x2="15" y2="14" />
                    <line x1="9" y1="18" x2="15" y2="18" />
                  </svg>
                ),
              },
              {
                id: '03',
                title: 'Build',
                image: '/assets/images/clean-process-3.jpg',
                icon: (
                  <svg className="w-3.5 h-3.5 text-[#EB5A1E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                id: '04',
                title: 'Deliver',
                image: '/assets/images/clean-process-4.jpg',
                icon: (
                  <svg className="w-3.5 h-3.5 text-[#EB5A1E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="7.5" cy="15.5" r="4.5" />
                    <path d="m21 4-9.5 9.5" />
                    <path d="m15.5 7.5 3 3" />
                    <path d="m18 5 2 2" />
                  </svg>
                ),
              },
            ].map((step, idx) => (
              <div key={step.id} className="relative flex flex-col items-center group">
                
                {/* Arch Card Container with Watermark */}
                <div className="relative flex flex-col items-center">
                  
                  {/* Watermark Number on Top-Left of Arch */}
                  <span className="absolute -top-2.5 sm:-top-3.5 -left-1.5 sm:-left-2.5 font-heading text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#D5CECE]/65 select-none pointer-events-none transition-colors duration-300 group-hover:text-[#EB5A1E]/35 z-0">
                    {step.id}
                  </span>

                  {/* Decorative Architectural Halo Arch Outline */}
                  <div className="relative p-1 rounded-t-full border border-[#EADBCE]/70 transition-all duration-300 group-hover:border-[#EB5A1E]/50 group-hover:shadow-sm">
                    {/* The Architectural Arch Card */}
                    <div className="relative w-28 sm:w-32 md:w-36 lg:w-40 h-36 sm:h-40 md:h-44 lg:h-48 rounded-t-full rounded-b-sm overflow-hidden bg-[#ECE7DF] shadow-xs">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                      />
                      {/* Gentle inner shadow vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Circular Icon Badge */}
                    <div className="absolute -bottom-2.5 -left-1.5 sm:-bottom-3 sm:-left-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFF2EA] border border-white shadow-xs flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FFE8DA] z-20">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Step Title & Orange Underline */}
                <div className="mt-3.5 sm:mt-4 text-center">
                  <h3 className="font-heading text-sm sm:text-base font-bold text-[#182026] tracking-tight group-hover:text-[#EB5A1E] transition-colors duration-200">
                    {step.title}
                  </h3>
                  <div className="w-5 h-[1.5px] bg-[#EB5A1E] mx-auto mt-1 rounded-full transition-all duration-300 group-hover:w-8" />
                </div>

                {/* Circular Arrow Connector between steps (desktop only) */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-[52%] -right-2.5 xl:-right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-[#E2DDD5] shadow-2xs items-center justify-center z-20 transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-2.5 h-2.5 text-[#8C827A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Graphics Section - Sleek, Compact Architectural Bar */}
      <div className="relative w-full overflow-hidden bg-[#EAE6DE] border-t border-[#E2DDD5]">
        <div className="w-full relative h-[95px] sm:h-[105px] md:h-[110px] lg:h-[120px] flex flex-row items-stretch">
          
          {/* 1. Left Architecture Column (using process-middle-bottom.png & process-left-bottom.png) */}
          <div className="relative w-[36%] md:w-[38%] h-full overflow-hidden bg-[#DED9D0]">
            <img
              src="/assets/images/process-middle-bottom.png"
              alt="Architecture Left"
              className="w-full h-full object-cover object-center"
            />

            {/* High-resolution foreground botanical leaves overlay */}
            <div className="absolute -bottom-1 left-0 w-20 sm:w-28 md:w-36 lg:w-44 pointer-events-none z-20">
              <img
                src="/assets/images/process-left-bottom.png"
                alt=""
                aria-hidden="true"
                className="w-full h-auto object-contain drop-shadow-xs"
              />
            </div>
          </div>

          {/* 2. Middle Dark Charcoal Slanted Quote Polygon */}
          <div
            className="relative w-[38%] md:w-[36%] bg-[#131B22] text-white flex items-center px-4 sm:px-5 lg:px-7 py-2 z-10 shadow-md -mr-5 md:-mr-7 [clip-path:polygon(0_0,calc(100%-20px)_0,100%_100%,0_100%)] md:[clip-path:polygon(0_0,calc(100%-26px)_0,100%_100%,0_100%)]"
          >
            <div className="flex items-start gap-2 sm:gap-2.5 max-w-[340px]">
              {/* Double Quote Mark */}
              <span className="text-white/95 text-xl sm:text-2xl lg:text-3xl font-serif leading-none select-none mt-0.5">
                “
              </span>

              {/* Quote Lines */}
              <div>
                <div className="font-serif italic text-white text-[11px] sm:text-[12px] lg:text-[13.5px] leading-tight font-normal tracking-wide drop-shadow-xs">
                  <p>Your Vision.</p>
                  <p>Our Process.</p>
                  <p>A Better Tomorrow.</p>
                </div>

                {/* Orange Accent Bar */}
                <div className="w-5 sm:w-6 h-[1.5px] bg-[#EB5A1E] mt-1 sm:mt-1.5 rounded-full" />
              </div>
            </div>
          </div>

          {/* 3. Right Architecture Column (using process-right-bottom.png fading with orange color) */}
          <div className="relative w-[32%] md:w-[32%] bg-[#EAE6DE] flex items-center justify-between overflow-hidden pl-6 sm:pl-8 md:pl-9">
            {/* The process-right-bottom.png image placed on the right */}
            <img
              src="/assets/images/process-right-bottom.png"
              alt="Architecture Right"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />

            {/* Fading Orange Gradient Overlay blending with the image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#EAE6DE] via-[#EB5A1E]/75 to-[#EB5A1E] mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#EAE6DE] via-transparent to-[#EB5A1E]/80 pointer-events-none" />

            {/* Left: BUILT WITH PURPOSE text with divider */}
            <div className="relative z-10 flex items-center gap-2 sm:gap-2.5 pl-1.5 sm:pl-3">
              <div className="w-[1.2px] h-7 sm:h-8 bg-[#7B726A]" />
              <div className="flex flex-col text-[8px] sm:text-[9px] lg:text-[10px] font-extrabold tracking-[0.2em] text-[#1E252D] uppercase leading-[1.25] drop-shadow-xs">
                <span>Built</span>
                <span>With</span>
                <span>Purpose</span>
              </div>
            </div>

            {/* Right: Modern Geometric Orange Triangular Accent facet */}
            <div
              className="relative w-14 sm:w-16 md:w-20 lg:w-24 h-full bg-gradient-to-br from-[#EB5A1E] to-[#D94F16] flex-shrink-0 [clip-path:polygon(45%_0,100%_0,100%_100%,0%_100%)] opacity-95"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-black/15 via-transparent to-black/25 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}




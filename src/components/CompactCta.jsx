import React from "react";
import { Link } from "react-router-dom";
import { HardHat, ShieldCheck, Clock, Phone, ArrowUpRight } from "lucide-react";

export default function CompactCta({
  eyebrow = "LET'S BUILD TOGETHER",
  badge,
  title = "Ready to Start Your",
  highlight = "Next Project?",
  subtitle = "Get in touch with Patole Constructions for expert consultation, transparent planning, and quality construction.",
  primaryText = "Get a Free Quote",
  primaryLink = "/contact",
  phone = "+91 98765 43210",
  className = "",
}) {
  const displayEyebrow = badge || eyebrow;
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

  return (
    <section
      className={`relative w-full overflow-hidden bg-white border-y border-[#E8E2D8] select-none ${className}`}
      style={{ width: "100%", margin: "0", borderRadius: "0" }}
    >
      {/* =========================================================================
          1. FAR LEFT: CTAbg Background Image (Edge to Edge, Fading to White)
      ========================================================================= */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-full sm:w-[70%] lg:w-[50%] xl:w-[45%] overflow-hidden z-0 select-none">
        <img
          src="/assets/images/CTAbg.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-left opacity-85 mix-blend-multiply"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/assets/images/projects-landmarks-sketch.jpg";
          }}
        />
        {/* Soft edge gradient to seamlessly melt into white */}
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-white pointer-events-none" />
      </div>

      {/* =========================================================================
          2. MAIN CONTENT (Spanning full-width container, aligned with site layout)
      ========================================================================= */}
      <div className="relative z-10 w-full mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14 py-7 sm:py-8 lg:py-9">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-7 lg:gap-10 lg:pr-[360px] xl:pr-[430px] 2xl:pr-[480px]">
          
          {/* Left Column: Eyebrow + Headline + Subtitle */}
          <div className="max-w-xl">
            {/* Eyebrow with orange dash */}
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-5 h-[2.5px] bg-[#EB5A1E] rounded-full inline-block shrink-0" />
              <span className="font-mono text-[11px] sm:text-[11.5px] font-extrabold tracking-[0.2em] text-[#556068] uppercase">
                {displayEyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading text-[26px] sm:text-[32px] lg:text-[36px] font-black text-[#172027] tracking-tight leading-[1.12] mb-2.5">
              {title} <br className="hidden sm:inline" />
              <span className="text-[#EB5A1E]">{highlight}</span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-[13px] sm:text-[13.5px] text-[#5D6770] leading-relaxed max-w-md">
              {subtitle}
            </p>
          </div>

          {/* Thin Vertical Section Divider (Visible on XL screens) */}
          <div className="hidden xl:block h-20 w-px bg-[#E8E2D8] shrink-0 self-center" />

          {/* Center / Right Column: 3 Pillars + Action CTAs */}
          <div className="flex flex-col justify-center gap-5 sm:gap-6">
            
            {/* 3 Pillars Row (Expert Guidance, Transparent Process, On-Time Delivery) */}
            <div className="flex items-center justify-start gap-4 sm:gap-6">
              {/* Pillar 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF2EB] border border-[#FDE2D2] text-[#EB5A1E] flex items-center justify-center mb-1.5 shadow-2xs">
                  <HardHat className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2]" />
                </div>
                <span className="text-[11px] sm:text-[11.5px] font-bold text-[#172027] leading-tight max-w-[80px]">
                  Expert Guidance
                </span>
              </div>

              {/* Vertical Divider */}
              <div className="h-8 w-px bg-[#E8E2D8] shrink-0" />

              {/* Pillar 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF2EB] border border-[#FDE2D2] text-[#EB5A1E] flex items-center justify-center mb-1.5 shadow-2xs">
                  <ShieldCheck className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2]" />
                </div>
                <span className="text-[11px] sm:text-[11.5px] font-bold text-[#172027] leading-tight max-w-[85px]">
                  Transparent Process
                </span>
              </div>

              {/* Vertical Divider */}
              <div className="h-8 w-px bg-[#E8E2D8] shrink-0" />

              {/* Pillar 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF2EB] border border-[#FDE2D2] text-[#EB5A1E] flex items-center justify-center mb-1.5 shadow-2xs">
                  <Clock className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2]" />
                </div>
                <span className="text-[11px] sm:text-[11.5px] font-bold text-[#172027] leading-tight max-w-[75px]">
                  On-Time Delivery
                </span>
              </div>
            </div>

            {/* Bottom Action Row: Get a Free Quote Button + Call Us Directly */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5">
              {/* Primary Button */}
              <Link
                to={primaryLink}
                className="inline-flex items-center justify-center gap-2 bg-[#EB5A1E] hover:bg-[#D94F16] text-white px-7 py-3 rounded-xl text-[13.5px] font-bold shadow-md shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{primaryText}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              {/* Call Direct Row */}
              <a
                href={phoneHref}
                className="group flex items-center gap-3 px-2.5 py-1.5 rounded-xl hover:bg-[#FAF8F5] transition-colors"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF2EB] border border-[#FDE2D2] text-[#EB5A1E] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[10.5px] sm:text-[11px] font-medium text-[#7A8692] leading-none mb-1">
                    Call Us Directly
                  </span>
                  <span className="block text-[13.5px] sm:text-[14.5px] font-black text-[#172027] group-hover:text-[#EB5A1E] transition-colors leading-none">
                    {phone}
                  </span>
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* =========================================================================
          3. FAR RIGHT: Angled Construction Site Image with Orange Slashes (Full Height, Edge-to-Edge)
      ========================================================================= */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 hidden lg:block w-[360px] xl:w-[430px] 2xl:w-[490px] overflow-hidden z-20">
        
        {/* First Orange Diagonal Accent Slash */}
        <div
          className="absolute inset-y-0 left-0 w-9 bg-[#EB5A1E] z-30"
          style={{
            clipPath: "polygon(62% 0, 100% 0, 38% 100%, 0% 100%)",
          }}
        />

        {/* Secondary Shaded Diagonal Accent Slash */}
        <div
          className="absolute inset-y-0 left-5 w-6 bg-[#D94F16] z-25 opacity-75"
          style={{
            clipPath: "polygon(68% 0, 100% 0, 32% 100%, 0% 100%)",
          }}
        />

        {/* Angled High-Rise Crane Construction Site Photo (Edge-to-Edge, Flush to Right) */}
        <div
          className="relative w-full h-full z-20 overflow-hidden"
          style={{
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1400&q=80"
            alt="Patole Construction site with tower crane"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/assets/images/clean-about-columns.jpg";
            }}
            className="w-full h-full object-cover object-center scale-105"
          />

          {/* Subtle daylight ambient sunlight gradient blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

      </div>

    </section>
  );
}

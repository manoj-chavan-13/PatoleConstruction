import React from "react";
import { ShieldCheck, Users, Clock, Sprout } from "lucide-react";

export default function WhyChooseUs({ onOpenContact }) {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Quality Workmanship",
      desc: "We maintain high standards in design, materials and construction.",
      classes: "sm:pr-8 pb-8 sm:pb-8 sm:border-r sm:border-b border-[#E8E2D8]",
    },
    {
      icon: Users,
      title: "Experienced Team",
      desc: "A skilled team with years of industry experience.",
      classes: "pt-6 sm:pt-0 pb-8 sm:pl-8 sm:pb-8 sm:border-b border-[#E8E2D8]",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      desc: "We value your time and ensure project completion as committed.",
      classes: "pt-6 sm:pt-8 sm:pr-8 sm:border-r border-[#E8E2D8]",
    },
    {
      icon: Sprout,
      title: "Long-Term Value",
      desc: "We build durable, sustainable spaces for a better tomorrow.",
      classes: "pt-6 sm:pt-8 sm:pl-8",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-18 sm:py-24 lg:py-28 xl:py-32 select-none border-b border-[#E8E2D8] bg-[#FAF8F5]"
    >
      {/* Panoramic Architectural Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/why-choose-us-bg.png"
          alt="Why Choose Patole Constructions"
          className="w-full h-full object-cover object-[center_top]"
        />

        {/* Delicate white & daylight gradient to keep text ultra-crisp while showcasing the architecture & mountain sunrise */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to right, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.3) 14%, rgba(255,255,255,0.85) 24%, rgba(255,255,255,0.88) 55%, rgba(255,255,255,0.68) 82%, rgba(255,255,255,0.18) 100%),
              linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0.08) 88%, transparent 100%)
            `,
          }}
        />
      </div>

      {/* Top-Right Orange Architectural Wireframe Line Accents */}
      <svg
        className="pointer-events-none absolute top-0 right-0 w-[360px] sm:w-[460px] lg:w-[540px] h-[360px] sm:h-[460px] lg:h-[540px] z-10 select-none opacity-85"
        viewBox="0 0 540 540"
        fill="none"
      >
        <path d="M 280 0 L 540 260" stroke="#EB5A1E" strokeWidth="1.2" opacity="0.85" />
        <path d="M 400 0 L 540 140" stroke="#EB5A1E" strokeWidth="1.2" opacity="0.85" />
        <path d="M 160 0 L 540 380" stroke="#EB5A1E" strokeWidth="0.8" opacity="0.45" />
      </svg>

      {/* Content Container */}
      <div className="relative z-20 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* LEFT COLUMN: Headings & Narrative */}
          <div className="lg:col-span-5 max-w-[500px]">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-8 h-[2px] bg-[#EB5A1E] inline-block" />
              <span className="text-[12px] font-bold tracking-[0.24em] text-[#EB5A1E] uppercase">
                WHY CHOOSE US
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-black text-[#172027] leading-[1.08] tracking-tight">
              Built on Trust<br />
              Designed for<br />
              <span className="text-[#EB5A1E]">Tomorrow</span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-[15px] sm:text-[16px] text-[#4A5560] leading-relaxed max-w-[440px] font-normal">
              At Patole Constructions, we combine experience, quality and a client-first approach to create spaces that add lasting value.
            </p>
          </div>

          {/* RIGHT COLUMN: 2x2 Grid with Cross Dividers */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className={`flex items-start gap-4 ${pillar.classes}`}>
                    <div className="w-12 h-12 rounded-full bg-[#FFF2EA] flex items-center justify-center text-[#EB5A1E] shrink-0 shadow-2xs">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-[17px] sm:text-[18px] font-bold text-[#172027] mb-1.5 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-[13px] sm:text-[13.5px] text-[#55606A] leading-relaxed max-w-[270px]">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
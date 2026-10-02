import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Paintbrush, HardHat, ArrowRight } from 'lucide-react';
import { CalligraphyServices } from './CalligraphyAccent';

const PaintRollerIcon = () => (
  <svg className="w-5 h-5 text-[#EB5A1E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="6" x="2" y="2" rx="2" />
    <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect width="4" height="6" x="8" y="16" rx="1" />
  </svg>
);

const WorkerHelmetIcon = () => (
  <svg className="w-5 h-5 text-[#EB5A1E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
    <path d="M10 11V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v6" />
    <path d="M4 16v-3a8 8 0 0 1 16 0v3" />
  </svg>
);

export default function OurServices({ onOpenContact, onSelectService }) {
  const services = [
    {
      id: '01',
      title: 'Residential Construction',
      image: '/assets/images/clean-service-1.jpg',
      icon: <Home className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#EB5A1E]" />,
      desc: 'Custom luxury villas, bungalows, row houses, and residential apartments constructed with highest RCC standards and enduring durability.',
    },
    {
      id: '02',
      title: 'Commercial Construction',
      image: '/assets/images/clean-service-2.jpg',
      icon: <Building2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#EB5A1E]" />,
      desc: 'Modern corporate offices, shopping plazas, commercial complexes, and retail centers built for functionality and long-term value.',
    },
    {
      id: '03',
      title: 'Renovation & Interior Works',
      image: '/assets/images/clean-service-3.jpg',
      icon: <PaintRollerIcon />,
      desc: 'Comprehensive interior transformations, structural retrofitting, architectural remodeling, and turnkey interior design solutions.',
    },
    {
      id: '04',
      title: 'RCC & Structural Works',
      image: '/assets/images/clean-service-4.jpg',
      icon: <WorkerHelmetIcon />,
      desc: 'Specialized reinforced cement concrete (RCC) foundations, heavy structural framing, industrial foundations, and precision engineering.',
    },
  ];

  return (
    <section id="services" className="relative pt-10 sm:pt-12 lg:pt-14 pb-5 sm:pb-6 bg-white overflow-hidden">
      {/* Bottom Architectural Base Graphic with enhanced soft fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-0 w-full h-[140px] sm:h-[180px] lg:h-[210px] select-none overflow-hidden">
        <img
          src="/assets/images/Our-Services-bottom.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-bottom opacity-25"
        />

        {/* Soft white gradient fade ensuring subtle ambient integration */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0.95) 25%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.35) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-6 sm:mb-7">
          {/* Left Text */}
          <div className="lg:col-span-6 z-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#EB5A1E] inline-block" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#374151] uppercase">
                Our Services
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl xl:text-[42px] font-extrabold tracking-tight leading-[1.12] text-[#19252B] mb-2.5">
              Spaces Built <br />
              For a <span className="text-[#EB5A1E]">Better Tomorrow</span>
            </h2>

            <p className="text-[13px] sm:text-[13.5px] text-[#555E68] leading-relaxed max-w-[440px]">
              From homes to commercial spaces, we deliver quality construction solutions tailored to your needs.
            </p>
          </div>

          {/* Right Cursive Script Element positioned beside the top-right villa */}
          <div className="lg:col-span-6 relative flex justify-start lg:justify-center items-center">
            <div className="relative z-20 pointer-events-none pl-2 sm:pl-0 sm:-translate-x-12 lg:-translate-x-20 -translate-y-2">
              <CalligraphyServices />
            </div>
          </div>
        </div>

        {/* 4 Service Cards Grid matching our-services-home.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-5 sm:mb-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to="/services"
              className="group bg-[#FAF8F5] hover:bg-white rounded-[20px] p-3.5 sm:p-4 shadow-xs hover:shadow-xl transition-all duration-300 border border-[#ECE6DD] hover:border-[#EB5A1E]/30 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Number Watermark at Top Left of Card */}
                <div className="text-[30px] sm:text-[34px] font-extrabold text-[#D8D4CC] font-heading leading-none mb-2 select-none">
                  {service.id}
                </div>

                {/* Photo container with floating icon */}
                <div className="relative rounded-xl overflow-hidden mb-3.5 h-[155px] sm:h-[170px] bg-neutral-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Floating Icon Badge overlapping bottom left */}
                  <div className="absolute -bottom-2 left-3 bg-white p-2 rounded-xl shadow-md border border-neutral-100 z-10 group-hover:bg-[#FFF3EB] transition-colors">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1.5 px-0.5">
                  <h3 className="font-heading text-[15px] sm:text-[16px] font-bold text-[#19252B] group-hover:text-[#EB5A1E] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <div className="w-6 h-[2px] bg-[#EB5A1E] mt-2 group-hover:w-10 transition-all duration-300" />
                </div>
              </div>

              {/* Action Bottom Row with Circle Arrow */}
              <div className="pt-2 px-0.5 flex items-center justify-end">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D5D0C7] group-hover:border-[#EB5A1E] group-hover:bg-[#EB5A1E] group-hover:text-white flex items-center justify-center transition-all duration-200">
                  <ArrowRight className="w-3.5 h-3.5 text-[#19252B] group-hover:text-white transition-colors" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Bar matching our-services-home.png - crisp high-contrast text */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 sm:pt-3">
          <div className="inline-flex items-center gap-2.5 text-[11.5px] sm:text-[12px] font-extrabold tracking-[0.22em] text-[#19252B] uppercase select-none">
            <span className="w-[2px] h-4.5 bg-[#EB5A1E] shrink-0" />
            <span>Different Space. Same Commitment.</span>
          </div>

          <Link
            to="/services"
            className="group inline-flex items-center gap-2.5 bg-[#EB5A1E] hover:bg-[#D4470F] text-white text-[13.5px] font-bold px-7 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer hover:-translate-y-0.5"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}


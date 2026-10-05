import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, Users, Building2, Award, MapPin } from 'lucide-react';

export default function AboutUs({ onOpenContact }) {
  const stats = [
    {
      icon: <Building2 className="w-5 h-5 text-[#EB5A1E]" />,
      value: '150+',
      label: 'Projects Completed',
    },
    {
      icon: <Users className="w-5 h-5 text-[#EB5A1E]" />,
      value: '100+',
      label: 'Happy Clients',
    },
    {
      icon: <Award className="w-5 h-5 text-[#EB5A1E]" />,
      value: '10+',
      label: 'Years of Experience',
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#EB5A1E]" />,
      value: '5+',
      label: 'Cities We Serve',
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] overflow-hidden">
      {/* Left Tropical Leaves Accent Background matching aboutus-home.png */}
      <img
        src="/assets/images/about-us-left-bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 w-[240px] sm:w-[320px] lg:w-[420px] object-contain object-bottom-left select-none opacity-95"
      />

      {/* Right Blueprint Wireframe Sketch Background matching aboutus-home.png */}
      <img
        src="/assets/images/about-us-right-bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 w-[520px] sm:w-[720px] lg:w-[940px] object-contain object-bottom-right select-none opacity-85"
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#EB5A1E] inline-block" />
              <span className="text-[11.5px] font-bold tracking-[0.22em] text-[#374151] uppercase">
                About Us
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl xl:text-[44px] font-extrabold tracking-tight leading-[1.14] text-[#19252B] mb-3.5">
              Building More Than <br />
              <span className="text-[#EB5A1E]">Structures</span>
            </h2>

            {/* Sub-headline */}
            <p className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.16em] text-[#555E68] uppercase mb-4">
              We Build Trust, Quality and a Better Tomorrow
            </p>

            {/* Paragraph Body */}
            <p className="text-[13.5px] sm:text-[14px] text-[#555E68] leading-relaxed mb-7 max-w-[490px]">
              Patole Constructions is a trusted RCC construction company committed to delivering strong, durable and thoughtfully designed spaces. With a focus on quality workmanship, timely completion and customer satisfaction, we bring your vision to life – from homes to commercial and industrial projects.
            </p>

            {/* 3 Pillars Row */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8 mb-8 max-w-[500px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF3EB] flex items-center justify-center shrink-0 border border-[#EB5A1E]/25 text-[#EB5A1E]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[13px] font-bold text-[#19252B] leading-tight">
                  Quality <br />Construction
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF3EB] flex items-center justify-center shrink-0 border border-[#EB5A1E]/25 text-[#EB5A1E]">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-[13px] font-bold text-[#19252B] leading-tight">
                  On-Time <br />Delivery
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF3EB] flex items-center justify-center shrink-0 border border-[#EB5A1E]/25 text-[#EB5A1E]">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[13px] font-bold text-[#19252B] leading-tight">
                  Client <br />Satisfaction
                </span>
              </div>
            </div>

            {/* Primary Button */}
            <Link
              to="/about"
              className="group inline-flex items-center gap-2.5 bg-[#EB5A1E] hover:bg-[#D4470F] text-white text-[13.5px] font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Know More About Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-stretch">
              {/* Left Large Villa Card */}
              <div className="col-span-7 relative">
                {/* Orange top-left accent bracket */}
                <div className="absolute -top-3 -left-3 w-14 h-14 border-t-[3.5px] border-l-[3.5px] border-[#EB5A1E] rounded-tl-2xl z-10 pointer-events-none" />

                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg h-[340px] sm:h-[400px] lg:h-[430px] bg-neutral-100">
                  <img
                    src="/assets/images/about-main-villa.jpg"
                    alt="Modern Villa Architecture by Patole Constructions"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Floating Dark Experience Badge */}
                <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-4 bg-[#192227] text-white px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl shadow-2xl z-20 flex items-center gap-3 border border-white/10">
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#EB5A1E] leading-none">
                    10+
                  </span>
                  <div className="text-[11.5px] sm:text-[12.5px] font-semibold leading-tight text-white/95">
                    Years of <br />Construction Experience
                  </div>
                </div>
              </div>

              {/* Right Stacked Two Cards */}
              <div className="col-span-5 flex flex-col gap-4">
                {/* Top Card: RCC Columns with Floating White Badge */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md h-[162px] sm:h-[192px] lg:h-[207px] bg-neutral-100 group">
                  <img
                    src="/assets/images/clean-about-columns.jpg"
                    alt="RCC Columns Under Construction"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Floating White Badge */}
                  <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl shadow-md flex items-center gap-2 border border-white/60">
                    <Building2 className="w-3.5 h-3.5 text-[#EB5A1E]" />
                    <div>
                      <div className="text-[12px] sm:text-[13px] font-extrabold text-[#19252B] leading-none">
                        150+
                      </div>
                      <div className="text-[9px] sm:text-[9.5px] text-[#69727C] font-semibold leading-tight mt-0.5">
                        Projects Completed
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Card: Hard Hat on Blueprints with Floating White Badge */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md h-[162px] sm:h-[192px] lg:h-[207px] bg-neutral-100 group">
                  <img
                    src="/assets/images/clean-about-hardhat.jpg"
                    alt="Engineering Planning and Quality"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Floating White Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl shadow-md flex items-center gap-2 border border-white/60">
                    <Users className="w-3.5 h-3.5 text-[#EB5A1E]" />
                    <div>
                      <div className="text-[12px] sm:text-[13px] font-extrabold text-[#19252B] leading-none">
                        100+
                      </div>
                      <div className="text-[9px] sm:text-[9.5px] text-[#69727C] font-semibold leading-tight mt-0.5">
                        Happy Clients
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Bottom Stats Bar matching aboutus-home.png */}
        <div className="mt-14 sm:mt-16 lg:mt-20 bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-[#EDE8E0] p-5 sm:p-6 lg:p-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#EDE8E0]">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3.5 sm:gap-4 ${idx !== 0 ? 'pt-4 md:pt-0 md:pl-6 lg:pl-8' : ''}`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#FFF3EB] flex items-center justify-center shrink-0 border border-[#EB5A1E]/20 text-[#EB5A1E]">
                  {stat.icon}
                </div>
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#19252B] leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-[12px] sm:text-[12.5px] font-semibold text-[#69727C] mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


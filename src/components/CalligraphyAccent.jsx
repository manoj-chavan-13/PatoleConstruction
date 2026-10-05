import React from 'react';

export function CalligraphyServices() {
  return (
    <div className="relative inline-block select-none -rotate-6 transform">
      <div className="font-['Caveat'] text-3xl sm:text-[40px] font-bold text-[#182026] leading-[0.88] tracking-tight">
        Our <br />
        <span className="inline-block pl-3">Services</span>
      </div>
      {/* Hand-drawn orange swoosh line */}
      <svg
        className="w-[90%] h-3 mt-1 ml-2 overflow-visible"
        viewBox="0 0 140 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="calligraphy-swoosh"
          d="M3 8.5C40 3.5 95 2 137 7.5"
          stroke="#EB5A1E"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function CalligraphyTestimonials() {
  return (
    <div className="relative inline-block select-none -rotate-3 transform">
      <div className="font-['Caveat'] text-3xl sm:text-[38px] font-bold text-[#182026] leading-tight tracking-tight">
        Real People. <br />
        <span className="inline-block pl-2">Real Experiences.</span>
      </div>
      {/* Hand-drawn orange swoosh line */}
      <svg
        className="w-[90%] h-3.5 mt-0.5 ml-2 overflow-visible"
        viewBox="0 0 200 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="calligraphy-swoosh"
          d="M4 8C60 3 140 2 196 7"
          stroke="#EB5A1E"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function CalligraphyLandmarks() {
  return (
    <div className="relative inline-block select-none -rotate-6 transform text-left">
      <div className="font-['Caveat'] text-[#1E262D] leading-[0.85] tracking-tight">
        <span className="block text-[18px] sm:text-[21px] font-semibold text-[#374151] pl-1">
          From
        </span>
        <span className="block text-[23px] sm:text-[27px] font-bold text-[#172027] -mt-0.5">
          Blueprints
        </span>
        <span className="block text-[17px] sm:text-[20px] font-semibold text-[#4B5563] pl-6 -mt-0.5">
          To
        </span>
        <span className="block text-[25px] sm:text-[29px] font-bold text-[#172027] -mt-0.5">
          Landmarks
        </span>
      </div>
      {/* Hand-drawn energetic orange swoosh underline */}
      <svg
        className="w-[105%] h-3 -mt-1 ml-1 overflow-visible"
        viewBox="0 0 150 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="calligraphy-swoosh"
          d="M4 10.5C42 4.5 102 2.5 146 8"
          stroke="#EB5A1E"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

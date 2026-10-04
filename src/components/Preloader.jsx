import React, { useState, useRef, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  const handleFinish = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 700);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // In case browser policy restricts playback
      });
    }

    // Safety fallback: auto-complete after 10s if video playback hangs
    const timer = setTimeout(() => {
      handleFinish();
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-all duration-700 ease-out select-none ${
        isFading ? 'opacity-0 scale-[1.03] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Skip Button Top Right */}
      <button
        onClick={handleFinish}
        className="absolute top-5 right-6 z-20 text-[11px] font-bold tracking-[0.18em] uppercase text-[#4A555F] hover:text-[#EB5A1E] bg-white/80 hover:bg-white backdrop-blur-md px-4 py-2 rounded-full border border-[#E8E2D8] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer hover:scale-105 active:scale-95"
      >
        Skip Intro &rarr;
      </button>

      {/* Fullscreen Video */}
      <video
        ref={videoRef}
        src="/loading.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleFinish}
        className="w-full h-full object-cover sm:object-contain bg-white"
      />

      {/* Subtle Progress Bar at bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-1 bg-[#EBE4DA] rounded-full overflow-hidden z-20">
        <div
          className="h-full bg-[#EB5A1E] rounded-full"
          style={{
            animation: 'loadProgress 9s linear forwards',
          }}
        />
      </div>

      <style>{`
        @keyframes loadProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}

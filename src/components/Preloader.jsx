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
      className={`fixed inset-0 w-screen h-screen z-[9999] bg-black flex items-center justify-center overflow-hidden transition-all duration-700 ease-out select-none ${
        isFading ? 'opacity-0 scale-[1.03] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Skip Button Top Right */}
      <button
        onClick={handleFinish}
        className="absolute top-5 right-6 z-20 text-[11px] font-bold tracking-[0.18em] uppercase text-white hover:text-[#EB5A1E] bg-black/50 hover:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer hover:scale-105 active:scale-95"
      >
        Skip Intro &rarr;
      </button>

      {/* Fullscreen Video (True Edge-to-Edge Fullscreen) */}
      <video
        ref={videoRef}
        src="/loading.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleFinish}
        className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-center block border-0 p-0 m-0"
      />

      {/* Subtle Progress Bar at bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-1.5 bg-white/20 rounded-full overflow-hidden z-20 backdrop-blur-sm">
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

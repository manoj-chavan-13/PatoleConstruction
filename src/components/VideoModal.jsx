import React from 'react';
import { X, Play, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#182026] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-30"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Simulation Header & Visual */}
        <div className="relative h-[320px] sm:h-[420px] bg-black flex items-center justify-center overflow-hidden">
          <img
            src="/assets/images/hero-clean-bg.jpg"
            alt="Construction Showcase Video"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#182026] via-transparent to-black/40" />

          {/* Central Play Indicator */}
          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#EB5A1E] text-white flex items-center justify-center shadow-2xl mb-4 animate-pulse">
              <Play className="w-8 h-8 fill-white ml-1" />
            </div>
            <div className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">
              Patole Constructions Brand Film
            </div>
            <p className="text-[14px] text-white/80 max-w-md mt-1">
              From Soil Testing & Deep Foundations to Precision RCC Curing and Turnkey Delivery.
            </p>
          </div>
        </div>

        {/* Video Details Bar */}
        <div className="p-6 sm:p-8 bg-[#182026] border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#EB5A1E]" />
            <div>
              <div className="text-[14px] font-bold text-white">M25 - M40 Grade RCC</div>
              <div className="text-[12px] text-white/60">Strict Laboratory Testing</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#EB5A1E]" />
            <div>
              <div className="text-[14px] font-bold text-white">100% On-Time Record</div>
              <div className="text-[12px] text-white/60">Automated Project Tracking</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="font-heading text-xl font-extrabold text-[#EB5A1E]">150+</div>
            <div>
              <div className="text-[14px] font-bold text-white">Landmarks Built</div>
              <div className="text-[12px] text-white/60">Across Maharashtra</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

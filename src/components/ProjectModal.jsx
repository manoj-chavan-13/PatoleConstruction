import React from 'react';
import { X, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E8E5DF] max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#182026] shadow-md flex items-center justify-center transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image */}
        <div className="relative h-[280px] sm:h-[340px] bg-neutral-900 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-widest text-[#EB5A1E] uppercase mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{project.location || 'Maharashtra, India'}</span>
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="font-heading text-lg font-bold text-[#182026] mb-2">
              Project Overview
            </h4>
            <p className="text-[15px] text-[#4B5563] leading-relaxed">
              {project.desc || 'Engineered and constructed to highest Indian Standard (IS) structural codes with certified RCC materials, seismic resistance, and premium architectural finishes.'}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="bg-[#FFF4ED] rounded-2xl p-5 border border-[#EB5A1E]/20">
            <h5 className="font-heading text-[15px] font-bold text-[#182026] mb-3">
              Engineering & Execution Highlights
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-[#374151]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#EB5A1E] shrink-0" />
                <span>M30 Grade High-Density Concrete</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#EB5A1E] shrink-0" />
                <span>Anti-Corrosion Fe550D TMT Steel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#EB5A1E] shrink-0" />
                <span>Stringent 28-Day Curing Supervision</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#EB5A1E] shrink-0" />
                <span>100% Zero Delay Delivery Guarantee</span>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E8E5DF]">
            <span className="text-[13px] text-[#6B7280]">
              Interested in a similar build?
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#EB5A1E] hover:bg-[#D4470F] text-white text-[14px] font-bold px-6 py-3 rounded-xl shadow-md transition-all"
            >
              <span>Request Quote for This Project Type</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

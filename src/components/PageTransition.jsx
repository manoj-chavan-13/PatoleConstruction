import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PageTransition({ children }) {
  const location = useLocation();
  const pageRef = useRef(null);
  const progressBarRef = useRef(null);
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('entered');

  useEffect(() => {
    // Top laser route progress bar animation
    if (progressBarRef.current) {
      gsap.fromTo(
        progressBarRef.current,
        { scaleX: 0, opacity: 1 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.45,
          ease: 'power2.out',
          onComplete: () => {
            gsap.to(progressBarRef.current, {
              opacity: 0,
              duration: 0.25,
              ease: 'power1.out',
            });
          },
        }
      );
    }

    // Scroll instantly to top on page transition
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Smooth page entry animation
    if (pageRef.current) {
      gsap.fromTo(
        pageRef.current,
        {
          opacity: 0,
          y: 14,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
          clearProps: 'all',
          onComplete: () => {
            // Trigger GSAP ScrollTrigger recalculations once DOM is ready
            ScrollTrigger.refresh();
          },
        }
      );
    }

    // Secondary refresh for any async images or dynamic layouts
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Laser Route Change Indicator Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[9998] pointer-events-none origin-left overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-gradient-to-r from-[#FF7A45] via-[#EB5A1E] to-[#FF9E73] origin-left scale-x-0 opacity-0 shadow-[0_0_10px_#EB5A1E]"
        />
      </div>

      {/* Animated Page Wrapper */}
      <div ref={pageRef} className="w-full min-h-screen">
        {children}
      </div>
    </>
  );
}

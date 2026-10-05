import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function GsapEffects() {
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Respect accessibility: if user prefers reduced motion, disable animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Architectural easing curves
      const easeArchitectural = 'power3.out';

      // ============================================================
      // 1. TOP SCROLL PROGRESS BAR (Real-time tracking)
      // ============================================================
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.2,
          },
        });
      }

      // ============================================================
      // 2. HERO PAGE LOAD SEQUENCE
      // ============================================================
      const heroTl = gsap.timeline({ defaults: { ease: easeArchitectural } });

      heroTl
        .fromTo(
          '#home .hero-tag',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: 0.1 }
        )
        .fromTo(
          '#home .hero-title',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.45'
        )
        .fromTo(
          '#home .hero-desc',
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.55'
        )
        .fromTo(
          '#home .hero-cta > *',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 },
          '-=0.45'
        )
        .fromTo(
          '#home .hero-badges > div',
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          '-=0.4'
        )
        .fromTo(
          '#home .hero-indicator',
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.8 },
          '-=0.6'
        );

      // ============================================================
      // 3. SMOOTH SECTION-TO-SECTION NAVIGATION GLIDE
      // ============================================================
      const handleAnchorClick = (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();

          gsap.to(window, {
            duration: 1.15,
            scrollTo: {
              y: targetEl,
              offsetY: 65,
              autoKill: false,
            },
            ease: 'power3.inOut',
          });
        }
      };

      document.addEventListener('click', handleAnchorClick);

      // ============================================================
      // 4. DYNAMIC SCROLL-DRIVEN SECTION TRANSITIONS (Linked to Wheel)
      // When scrolling toward a section, the section elevates and responds in real time
      // ============================================================
      const sections = document.querySelectorAll('main > section');
      sections.forEach((sec, idx) => {
        // Skip Hero section
        if (idx === 0) return;

        // Dynamic stage elevation on scroll approach
        gsap.fromTo(
          sec,
          {
            y: 40,
            scale: 0.985,
          },
          {
            y: 0,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sec,
              start: 'top 95%',
              end: 'top 65%',
              scrub: 0.8,
            },
          }
        );

        // Section Heading smooth rise
        const heading = sec.querySelector('h2');
        if (heading) {
          gsap.fromTo(
            heading,
            { y: 25, opacity: 0.4 },
            {
              y: 0,
              opacity: 1,
              ease: 'power2.out',
              duration: 0.8,
              scrollTrigger: {
                trigger: heading,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        // Section Cards interactive reveal with scroll toggle
        const cardSelectors = [
          '#about .grid > div',
          '#services .grid > div',
          '#process .group',
          '#why-us .grid.max-w-\\[540px\\] > div',
          '#projects .lg\\:col-span-9 > div',
          '#testimonials .grid.grid-cols-1.md\\:grid-cols-3 > div',
        ];

        cardSelectors.forEach((sel) => {
          const cards = sec.querySelectorAll(sel.replace(/^[^\s]+\s/, ''));
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              { y: 24, opacity: 0.4 },
              {
                y: 0,
                opacity: 1,
                duration: 0.75,
                stagger: 0.08,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: cards[0],
                  start: 'top 88%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }
        });
      });

      // ============================================================
      // 5. WHY CHOOSE US: MULTI-PLANE 3D PARALLAX DEPTH
      // Villa and floating stats card move at different speeds on scroll
      // ============================================================
      const whyVilla = document.querySelector('#why-us img[src*="choose-use-centre"]');
      if (whyVilla && whyVilla.parentElement) {
        gsap.to(whyVilla.parentElement, {
          y: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: '#why-us',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      // Floating stats card travels faster for pronounced 3D depth
      const whyStatsCard = document.querySelector('#why-us .z-30.bg-white.rounded-\\[9px\\]');
      if (whyStatsCard) {
        gsap.to(whyStatsCard, {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: '#why-us',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.4,
          },
        });
      }

      // ============================================================
      // 6. OUR PROCESS: 4 ROMAN STEPS DYNAMIC SCROLL CASCADE
      // ============================================================
      const processSteps = document.querySelectorAll('#process .group');
      if (processSteps.length > 0) {
        processSteps.forEach((step, i) => {
          gsap.fromTo(
            step,
            { y: 30 + i * 8 },
            {
              y: 0,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: '#process',
                start: 'top 85%',
                end: 'top 40%',
                scrub: 0.9,
              },
            }
          );
        });
      }

      // ============================================================
      // 7. PROJECTS: FEATURED IMAGE SUBTLE SCROLL PARALLAX
      // ============================================================
      const featuredImg = document.querySelector('#projects .lg\\:col-span-7 img');
      if (featuredImg) {
        gsap.to(featuredImg, {
          scale: 1.05,
          y: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: '#projects',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }

      // ============================================================
      // 8. TESTIMONIALS: CENTER CARD FLOATING HIGHLIGHT
      // ============================================================
      const darkTestimonialCard = document.querySelector('#testimonials .bg-\\[\\#172026\\]');
      if (darkTestimonialCard) {
        gsap.to(darkTestimonialCard, {
          y: -14,
          ease: 'none',
          scrollTrigger: {
            trigger: '#testimonials',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.3,
          },
        });
      }

      // ============================================================
      // 9. CALLIGRAPHY INK DRAW-IN ANIMATION
      // ============================================================
      const swooshes = document.querySelectorAll('.calligraphy-swoosh');
      swooshes.forEach((path) => {
        try {
          const length = path.getTotalLength() || 180;
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: path,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          });
        } catch {
          // fallback
        }
      });

      // ============================================================
      // 10. AMBIENT LIVING BOTANICAL FOLIAGE SWAY
      // ============================================================
      const botanicals = document.querySelectorAll(
        'img[src*="process-left-bottom"], img[src*="botanical"]'
      );

      botanicals.forEach((botanical) => {
        const parent = botanical.parentElement;
        if (!parent) return;

        // Continuous natural sway
        gsap.to(parent, {
          y: -8,
          rotation: 0.9,
          duration: 4.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        // Parallax movement on scroll
        gsap.to(parent, {
          yPercent: -14,
          ease: 'none',
          scrollTrigger: {
            trigger: parent.closest('section') || parent,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.3,
          },
        });
      });

      // ============================================================
      // 11. ARCHITECTURAL BLUEPRINTS & CUTOUTS PARALLAX DEPTH
      // ============================================================
      const parallaxImages = document.querySelectorAll(
        'img[src*="our-projects-bottom"], img[src*="build-graphics"], img[src*="choose-us-bottom"]'
      );

      parallaxImages.forEach((img) => {
        const parent = img.parentElement;
        if (!parent) return;

        gsap.to(parent, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: parent.closest('section') || parent,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.4,
          },
        });
      });

      return () => {
        document.removeEventListener('click', handleAnchorClick);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Precision Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none origin-left">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-[#EB5A1E] origin-left scale-x-0 shadow-[0_1px_6px_rgba(235,90,30,0.5)]"
        />
      </div>
    </>
  );
}

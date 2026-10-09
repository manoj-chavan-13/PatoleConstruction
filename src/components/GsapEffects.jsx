import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function GsapEffects() {
  const progressBarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Respect accessibility: if user prefers reduced motion, disable heavy animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Small delay to ensure DOM is settled after route transition
    const ctx = gsap.context(() => {
      const easeArchitectural = 'power3.out';
      const easeSmooth = 'power2.out';

      // ============================================================
      // 1. TOP SCROLL PROGRESS BAR (Real-time tracking per page)
      // ============================================================
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.15,
            invalidateOnRefresh: true,
          },
        });
      }

      // ============================================================
      // 2. SMOOTH ANCHOR LINK NAVIGATION
      // ============================================================
      const handleAnchorClick = (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#' || targetId === '#services') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          gsap.to(window, {
            duration: 1.1,
            scrollTo: {
              y: targetEl,
              offsetY: 70,
              autoKill: false,
            },
            ease: 'power3.inOut',
          });
        }
      };

      document.addEventListener('click', handleAnchorClick);

      // ============================================================
      // 3. HOME PAGE HERO LOAD SEQUENCE
      // ============================================================
      if (document.querySelector('#home')) {
        const heroTl = gsap.timeline({ defaults: { ease: easeArchitectural } });
        heroTl
          .fromTo(
            '#home .hero-tag',
            { y: 22, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.65, delay: 0.08 }
          )
          .fromTo(
            '#home .hero-title',
            { y: 38, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            '-=0.45'
          )
          .fromTo(
            '#home .hero-desc',
            { y: 22, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            '-=0.55'
          )
          .fromTo(
            '#home .hero-cta > *',
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
            '-=0.45'
          )
          .fromTo(
            '#home .hero-badges > div',
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
            '-=0.4'
          )
          .fromTo(
            '#home .hero-indicator',
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.8 },
            '-=0.5'
          );
      }

      // ============================================================
      // 4. SERVICES PAGE ANIMATIONS
      // ============================================================
      const servicesHero = document.querySelector('.services-hero-title, section:has(#services)');
      if (servicesHero || location.pathname === '/services') {
        gsap.fromTo(
          '.services-hero-tag',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: 0.1, ease: easeArchitectural }
        );
        gsap.fromTo(
          '.services-hero-title',
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, delay: 0.2, ease: easeArchitectural }
        );
        gsap.fromTo(
          '.services-hero-desc',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, delay: 0.35, ease: easeArchitectural }
        );

        // Services Approach 4 Cards Stagger
        const approachCards = document.querySelectorAll('.services-approach-card');
        if (approachCards.length > 0) {
          gsap.fromTo(
            approachCards,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              stagger: 0.12,
              ease: easeArchitectural,
              scrollTrigger: {
                trigger: approachCards[0],
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        // 5-Stage Blueprint Cards Stagger
        const blueprintCards = document.querySelectorAll('.blueprint-phase-card');
        if (blueprintCards.length > 0) {
          gsap.fromTo(
            blueprintCards,
            { y: 30, opacity: 0, scale: 0.98 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: easeArchitectural,
              scrollTrigger: {
                trigger: blueprintCards[0],
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }

      // ============================================================
      // 5. PROJECTS PAGE ANIMATIONS
      // ============================================================
      if (location.pathname === '/projects') {
        const projectCards = document.querySelectorAll('.project-card-anim, #projects-grid > div');
        if (projectCards.length > 0) {
          gsap.fromTo(
            projectCards,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.08,
              ease: easeArchitectural,
              scrollTrigger: {
                trigger: projectCards[0],
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }

      // ============================================================
      // 6. CONTACT PAGE ANIMATIONS
      // ============================================================
      if (location.pathname === '/contact') {
        gsap.fromTo(
          '.contact-page h1',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, delay: 0.15, ease: easeArchitectural }
        );

        const contactChannels = document.querySelectorAll('#contact-form-section .space-y-7 > div');
        if (contactChannels.length > 0) {
          gsap.fromTo(
            contactChannels,
            { x: 30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: easeArchitectural,
              scrollTrigger: {
                trigger: contactChannels[0],
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }

      // ============================================================
      // 7. GLOBAL SCROLL-TRIGGERED SECTION ELEVATION
      // ============================================================
      const sections = document.querySelectorAll('main section');
      sections.forEach((sec, idx) => {
        if (idx === 0) return; // Skip Hero

        // Dynamic slight scale & rise on scroll approach
        gsap.fromTo(
          sec,
          { y: 30, opacity: 0.85 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sec,
              start: 'top 95%',
              end: 'top 70%',
              scrub: 0.6,
            },
          }
        );

        // Section Headings Rise
        const heading = sec.querySelector('h2');
        if (heading) {
          gsap.fromTo(
            heading,
            { y: 22, opacity: 0.5 },
            {
              y: 0,
              opacity: 1,
              ease: easeSmooth,
              duration: 0.75,
              scrollTrigger: {
                trigger: heading,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        // Global Grid Cards Reveal
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
              { y: 24, opacity: 0.5 },
              {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.08,
                ease: easeSmooth,
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
      // 8. WHY CHOOSE US: MULTI-PLANE 3D PARALLAX
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

      const whyStatsCard = document.querySelector('#why-us .z-30.bg-white.rounded-\\[9px\\]');
      if (whyStatsCard) {
        gsap.to(whyStatsCard, {
          y: -45,
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
      // 10. BOTANICAL FOLIAGE SWAY & 3D PARALLAX
      // ============================================================
      const botanicals = document.querySelectorAll(
        'img[src*="process-left-bottom"], img[src*="botanical"]'
      );

      botanicals.forEach((botanical) => {
        const parent = botanical.parentElement;
        if (!parent) return;

        gsap.to(parent, {
          y: -8,
          rotation: 0.9,
          duration: 4.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

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

      // Refresh ScrollTrigger after initializing
      ScrollTrigger.refresh();

      return () => {
        document.removeEventListener('click', handleAnchorClick);
      };
    });

    return () => ctx.revert();
  }, [location.pathname]);

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

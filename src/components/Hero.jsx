import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Play, Pause, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const slides = [
  {
    image: "/assets/images/crl1.jpg",
    title: "Residential RCC framework",
    location: "Nashik, Maharashtra",
  },
  {
    image: "/assets/images/crl2.jpg",
    title: "Contemporary villa with cantilever slab",
    location: "Gangapur Road, Nashik",
  },
  {
    image: "/assets/images/crl3.jpg",
    title: "Commercial corporate complex",
    location: "Baner, Pune",
  },
  {
    image: "/assets/images/crl4.jpg",
    title: "Industrial logistics shed",
    location: "MIDC Ambad, Nashik",
  },
  {
    image: "/assets/images/crl5.jpg",
    title: "Turnkey civil site execution",
    location: "Maharashtra",
  },
  {
    image: "/assets/images/crl6.jpg",
    title: "Precision shuttering and rebar work",
    location: "On site",
  },
];

// Snappy, engaging autoplay duration
const AUTOPLAY_MS = 3800;

export default function Hero({
  headline = "Reliable RCC and civil construction across Maharashtra.",
  description = "From homes and villas to commercial complexes and industrial sheds, we deliver turnkey projects built to uncompromising quality standards.",
  primaryCta = { label: "Get a free quote", href: "/contact" },
  secondaryCta = { label: "View our projects", href: "/projects" },
}) {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState(null);
  const [direction, setDirection] = useState("next");
  const [playing, setPlaying] = useState(true);
  const touch = useRef({ start: 0, end: 0 });

  const count = slides.length;

  const next = useCallback(() => {
    setDirection("next");
    setActive((curr) => {
      setPrevActive(curr);
      return (curr + 1) % count;
    });
  }, [count]);

  const previous = useCallback(() => {
    setDirection("prev");
    setActive((curr) => {
      setPrevActive(curr);
      return (curr - 1 + count) % count;
    });
  }, [count]);

  const goTo = useCallback(
    (index) => {
      if (index === active) return;
      setDirection(index > active ? "next" : "prev");
      setPrevActive(active);
      setActive(index);
    },
    [active]
  );

  // Respect "reduce motion": start with autoplay off
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlaying(false);
    }
  }, []);

  // Preload upcoming images so transitions are instant
  useEffect(() => {
    const nextImg = new Image();
    nextImg.src = slides[(active + 1) % count].image;
    const prevImg = new Image();
    prevImg.src = slides[(active - 1 + count) % count].image;
  }, [active, count]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") previous();
  };

  const onTouchEnd = () => {
    const distance = touch.current.start - touch.current.end;
    touch.current = { start: 0, end: 0 };
    if (Math.abs(distance) < 50) return;
    distance > 0 ? next() : previous();
  };

  const current = slides[active];

  const controlBtn =
    "group flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white hover:text-neutral-900 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50";

  return (
    <>
      <style>{`
        /* Physical Directional Slide Keyframes (800ms crisp architectural motion) */
        @keyframes slideOutToLeft {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }

        @keyframes slideInFromRight {
          0% {
            transform: translate3d(100%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }

        @keyframes slideOutToRight {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(100%, 0, 0);
          }
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translate3d(-100%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }

        /* Inner Counter-Parallax for 3D Magazine Slide Depth */
        @keyframes innerParallaxOutToLeft {
          0% {
            transform: scale(1.08) translate3d(0%, 0, 0);
          }
          100% {
            transform: scale(1.08) translate3d(28%, 0, 0);
          }
        }

        @keyframes innerParallaxInFromRight {
          0% {
            transform: scale(1.08) translate3d(-28%, 0, 0);
          }
          100% {
            transform: scale(1.02) translate3d(0%, 0, 0);
          }
        }

        @keyframes innerParallaxOutToRight {
          0% {
            transform: scale(1.08) translate3d(0%, 0, 0);
          }
          100% {
            transform: scale(1.08) translate3d(-28%, 0, 0);
          }
        }

        @keyframes innerParallaxInFromLeft {
          0% {
            transform: scale(1.08) translate3d(28%, 0, 0);
          }
          100% {
            transform: scale(1.02) translate3d(0%, 0, 0);
          }
        }

        @keyframes innerImageIdle {
          0% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1.06);
          }
        }

        /* Directional Caption Transition */
        @keyframes captionSlideNext {
          0% {
            opacity: 0;
            transform: translate3d(24px, 0, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes captionSlidePrev {
          0% {
            opacity: 0;
            transform: translate3d(-24px, 0, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        /* Progress Bar Animation */
        @keyframes heroProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .slide-out-left {
          animation: slideOutToLeft 780ms cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .slide-in-right {
          animation: slideInFromRight 780ms cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .slide-out-right {
          animation: slideOutToRight 780ms cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .slide-in-left {
          animation: slideInFromLeft 780ms cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .inner-out-left {
          animation: innerParallaxOutToLeft 780ms cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .inner-in-right {
          animation: innerParallaxInFromRight 780ms cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .inner-out-right {
          animation: innerParallaxOutToRight 780ms cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .inner-in-left {
          animation: innerParallaxInFromLeft 780ms cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .inner-idle {
          animation: innerImageIdle ${AUTOPLAY_MS}ms ease-out forwards;
        }

        .caption-anim-next {
          animation: captionSlideNext 550ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .caption-anim-prev {
          animation: captionSlidePrev 550ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .hero-progress {
          animation: heroProgress linear forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .slide-out-left,
          .slide-in-right,
          .slide-out-right,
          .slide-in-left,
          .inner-out-left,
          .inner-in-right,
          .inner-out-right,
          .inner-in-left,
          .inner-idle,
          .caption-anim-next,
          .caption-anim-prev {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        id="home"
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured construction projects"
        onKeyDown={onKeyDown}
        onTouchStart={(e) => (touch.current.start = e.touches[0].clientX)}
        onTouchMove={(e) => (touch.current.end = e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
        className="relative h-[100svh] min-h-[640px] max-h-[960px] w-full overflow-hidden bg-neutral-900 text-white"
      >
        {/* Physical Slides Layer with 3D Inner Parallax (NO FADE) */}
        <div className="absolute inset-0 overflow-hidden" aria-live={playing ? "off" : "polite"}>
          {slides.map((s, i) => {
            const isActive = i === active;
            const isPrev = i === prevActive;

            // Only mount active and outgoing slides for 60fps performance
            if (!isActive && !isPrev) {
              return null;
            }

            // Outgoing Slide Sliding Out
            if (isPrev) {
              const slideOutClass = direction === "next" ? "slide-out-left" : "slide-out-right";
              const innerOutClass = direction === "next" ? "inner-out-left" : "inner-out-right";

              return (
                <div
                  key={`prev-${s.image}-${prevActive}`}
                  aria-hidden="true"
                  className={`absolute inset-0 z-10 overflow-hidden pointer-events-none ${slideOutClass}`}
                >
                  <img
                    src={s.image}
                    alt=""
                    draggable={false}
                    className={`h-full w-full object-cover object-center ${innerOutClass}`}
                  />
                </div>
              );
            }

            // Incoming / Active Slide Sliding In
            const slideInClass =
              prevActive === null
                ? "translate-x-0"
                : direction === "next"
                ? "slide-in-right"
                : "slide-in-left";

            const innerInClass =
              prevActive === null
                ? "inner-idle"
                : direction === "next"
                ? "inner-in-right"
                : "inner-in-left";

            return (
              <div
                key={`active-${s.image}-${active}`}
                aria-hidden="false"
                className={`absolute inset-0 z-20 overflow-hidden ${slideInClass}`}
              >
                {/* Architectural Leading Edge Seam */}
                {prevActive !== null && (
                  <div
                    className={`pointer-events-none absolute inset-y-0 z-30 w-0.5 bg-gradient-to-b from-transparent via-[#EB5A1E] to-transparent shadow-[0_0_12px_#EB5A1E] ${
                      direction === "next" ? "left-0" : "right-0"
                    }`}
                  />
                )}

                <img
                  src={s.image}
                  alt={s.title}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchpriority={i === 0 ? "high" : "auto"}
                  draggable={false}
                  className={`h-full w-full object-cover object-center ${innerInClass}`}
                />
              </div>
            );
          })}

          {/* Legibility overlays */}
          <div className="pointer-events-none absolute inset-0 z-25 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
          <div className="pointer-events-none absolute inset-0 z-25 bg-gradient-to-t from-black/80 via-transparent to-black/35" />
        </div>

        {/* Content */}
        <div className="relative z-30 mx-auto flex h-full max-w-[1400px] flex-col px-6 sm:px-10 lg:px-14">
          {/* Headline block */}
          <div className="flex flex-1 items-center pt-24 pb-44 sm:pb-40">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {headline}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={primaryCta.href}
                  className="inline-flex h-12 items-center rounded-full bg-[#EB5A1E] px-7 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#D4470F] hover:shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
                >
                  {primaryCta.label}
                </Link>
                <Link
                  to={secondaryCta.href}
                  className="inline-flex h-12 items-center rounded-full border border-white/40 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-neutral-900 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
                >
                  {secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[1400px] px-6 pb-7 sm:px-10 lg:px-14">
            <div className="flex items-end justify-between gap-6">
              {/* Current project caption with directional slide motion */}
              <div
                key={active}
                className={`min-w-0 ${
                  direction === "next" ? "caption-anim-next" : "caption-anim-prev"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 border border-[#EB5A1E]/50 px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-[#FF8542] backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EB5A1E] animate-pulse" />
                    PROJECT 0{active + 1} &bull; 0{count}
                  </span>
                  <span className="hidden sm:inline-block text-[11px] font-medium text-white/60 tracking-wide uppercase">
                    Featured Execution
                  </span>
                </div>
                <p className="truncate text-base font-semibold text-white sm:text-lg lg:text-xl">
                  {current.title}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-white/80 sm:text-sm">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-[#EB5A1E]" aria-hidden="true" />
                  <span>{current.location}</span>
                </p>
              </div>

              {/* Controls */}
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPlaying((p) => !p)}
                  aria-label={playing ? "Pause slideshow" : "Play slideshow"}
                  className={controlBtn}
                  title={playing ? "Pause slideshow" : "Play slideshow"}
                >
                  {playing ? (
                    <Pause className="h-4 w-4 transition-transform group-hover:scale-110" />
                  ) : (
                    <Play className="ml-0.5 h-4 w-4 transition-transform group-hover:scale-110" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous project"
                  className={controlBtn}
                  title="Previous project"
                >
                  <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next project"
                  className={controlBtn}
                  title="Next project"
                >
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Segmented progress / navigation */}
            <div className="mt-5 flex gap-2" role="tablist" aria-label="Choose project">
              {slides.map((s, i) => {
                const isActive = i === active;
                const isDone = i < active;
                return (
                  <button
                    key={s.image}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show ${s.title}`}
                    onClick={() => goTo(i)}
                    className="group relative flex-1 py-3 focus-visible:outline-none"
                  >
                    {/* Hover tooltip label */}
                    <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/85 px-2 py-0.5 text-[10px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 backdrop-blur-sm sm:block hidden shadow-md">
                      {s.title}
                    </span>
                    <span className="block h-[3px] w-full overflow-hidden rounded-full bg-white/25 transition-colors group-hover:bg-white/45 group-focus-visible:ring-2 group-focus-visible:ring-white group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-black/50">
                      {isActive ? (
                        <span
                          key={active}
                          className={`block h-full bg-[#EB5A1E] shadow-[0_0_8px_rgba(235,90,30,0.8)] ${
                            playing ? "hero-progress" : ""
                          }`}
                          style={
                            playing
                              ? {
                                  animationDuration: `${AUTOPLAY_MS}ms`,
                                  animationPlayState: "running",
                                }
                              : { width: "100%" }
                          }
                          onAnimationEnd={next}
                        />
                      ) : (
                        <span
                          className="block h-full bg-white/80 transition-all duration-300"
                          style={{ width: isDone ? "100%" : "0%" }}
                        />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
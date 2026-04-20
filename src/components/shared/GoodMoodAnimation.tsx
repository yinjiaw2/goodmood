"use client";

import { useRef, useEffect, useState } from "react";

export function GoodMoodLogoAnimation() {
  const ref = useRef<SVGSVGElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 1841 503"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-auto"
      aria-label="Good Mood logo"
      data-animate={animate}
    >
      <defs>
        <style>{`
          @keyframes logo-draw {
            to { stroke-dashoffset: 0; }
          }
          @keyframes logo-fade {
            to { opacity: 1; }
          }
          @keyframes logo-grow-down {
            from { transform: scaleY(0); }
            to   { transform: scaleY(1); }
          }

          .lc1, .lc2, .lc3, .lc4 {
            stroke-dasharray: 1178;
            stroke-dashoffset: 1178;
          }
          .leye { opacity: 0; }
          .lsmile1, .lsmile2 {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
          }
          .lbar {
            transform-box: fill-box;
            transform-origin: 50% 0%;
            transform: scaleY(0);
          }

          svg[data-animate="true"] .lc1 {
            animation: logo-draw 0.55s cubic-bezier(0.4,0,0.2,1) 0s forwards;
          }
          svg[data-animate="true"] .leye {
            animation: logo-fade 0.2s ease 0.45s forwards;
          }
          svg[data-animate="true"] .lc2 {
            animation: logo-draw 0.55s cubic-bezier(0.4,0,0.2,1) 0.5s forwards;
          }
          svg[data-animate="true"] .lsmile1 {
            animation: logo-draw 0.3s ease 0.95s forwards;
          }
          svg[data-animate="true"] .lc3 {
            animation: logo-draw 0.55s cubic-bezier(0.4,0,0.2,1) 0.95s forwards;
          }
          svg[data-animate="true"] .lsmile2 {
            animation: logo-draw 0.3s ease 1.4s forwards;
          }
          svg[data-animate="true"] .lbar {
            animation: logo-grow-down 0.3s cubic-bezier(0.4,0,0.2,1) 1.4s forwards;
          }
          svg[data-animate="true"] .lc4 {
            animation: logo-draw 0.55s cubic-bezier(0.4,0,0.2,1) 1.6s forwards;
          }
        `}</style>
      </defs>

      <rect x="275" y="220" width="112" height="65" fill="#F9C110" className="leye" />

      <circle cx="250" cy="250" r="187.5" stroke="white" strokeWidth="125" className="lc1" />
      <circle cx="690" cy="250" r="187.5" stroke="white" strokeWidth="125" className="lc2" />
      <circle cx="1115" cy="253" r="187.5" stroke="#F9C110" strokeWidth="125" className="lc3" />
      <rect x="1326.5" y="20.5" width="123" height="465" fill="white" stroke="white" className="lbar" />
      <circle cx="1591" cy="250" r="187.5" stroke="white" strokeWidth="125" className="lc4" />

      <path d="M644 316C679.928 344.402 700.072 343.332 736 316" stroke="white" strokeWidth="20" strokeLinecap="round" className="lsmile1" />
      <path d="M1069 336.902C1104.93 308.5 1125.07 309.57 1161 336.902" stroke="white" strokeWidth="20" strokeLinecap="round" className="lsmile2" />
    </svg>
  );
}

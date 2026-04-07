'use client'

import { useEffect, useState } from "react";

const FULL_TITLE = "Siddeley Talent Link";

export default function HeroSection() {
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (displayed.length < FULL_TITLE.length) {
        timeout = setTimeout(() => {
          setDisplayed(FULL_TITLE.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(FULL_TITLE.slice(0, displayed.length - 1));
        }, 45);
      } else {
        timeout = setTimeout(() => setDeleting(false), 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting]);

  return (
    <section
      className="relative flex items-center min-h-[80vh] w-full bg-cover bg-center"
      style={{
        backgroundImage: "url(/building-background.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div
        className="relative z-10 flex flex-col items-start justify-center w-full max-w-2xl px-6 py-24"
        style={{ marginLeft: "8vw" }}
      >
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-6"
          style={{
            color: "#FB8C00",
            textShadow: "0 2px 24px rgba(0,0,0,0.25)",
            fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          {displayed}
          <span
            className={`inline-block w-0.75 h-[1em] ml-1 align-middle bg-orange-400 ${
              !deleting && displayed.length === FULL_TITLE.length ? "animate-pulse" : ""
            }`}
            style={{ verticalAlign: "middle" }}
          />
        </h1>
        <p
          className="text-xl md:text-2xl font-medium text-white mb-8 drop-shadow-lg"
          style={{
            fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          在澳洲职场，找到属于你的位置
        </p>
        <button
          className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-200 hover:brightness-110 active:scale-95"
          style={{
            backgroundColor: "#FB8C00",
            color: "#fff",
            fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
          }}
        >
          点击咨询
        </button>
      </div>
    </section>
  );
}

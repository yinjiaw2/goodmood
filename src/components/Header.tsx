'use client'

import { useState, useEffect } from "react";

const navLinks = [
  { label: "主页", href: "#hero" },
  { label: "核心服务", href: "#core-services" },
  { label: "服务流程", href: "#process" },
  { label: "成功案例", href: "#cases" },
  { label: "关于我们", href: "#about" },
  { label: "联系方式", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "#0D1B2A" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 flex-shrink-0"
          style={{
            fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
          }}
        >
          <span
            className="text-xl font-extrabold tracking-tight"
            style={{ color: "#FB8C00" }}
          >
            Siddeley
          </span>
          <span className="text-xl font-extrabold tracking-tight text-white">
            Talent Link
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-300 rounded-md transition-colors duration-150 hover:text-white hover:bg-white/10"
              style={{
                fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 hover:brightness-110 active:scale-95"
          style={{
            backgroundColor: "#FB8C00",
            color: "#fff",
            fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
          }}
        >
          点击咨询
        </a>
      </div>
    </header>
  );
}

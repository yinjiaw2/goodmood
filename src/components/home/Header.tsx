"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "主页", href: "/#hero" },
  { label: "核心服务", href: "/#core-services" },
  { label: "服务流程", href: "/#process" },
  { label: "成功案例", href: "/#cases" },
  { label: "关于我们", href: "/about" },
  { label: "联系方式", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/#hero"
            className="flex items-center gap-2 shrink-0"
            style={{ fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif" }}
          >
            <span className="text-xl font-extrabold tracking-tight" style={{ color: "#FB8C00" }}>
              Siddeley
            </span>
            <span className="text-xl font-extrabold tracking-tight text-white">
              Talent Link
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 rounded-md transition-colors duration-150 hover:text-white hover:bg-white/10"
                style={{ fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-150"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <nav
        className={`fixed top-0 right-0 z-50 h-full w-64 flex flex-col pt-20 pb-8 px-6 transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#0D1B2A" }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="py-4 text-base font-medium text-gray-300 border-b border-white/10 hover:text-white transition-colors duration-150"
            style={{ fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif" }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}

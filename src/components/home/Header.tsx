"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";


const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const nextLocale = locale === "zh-CN" ? "en" : "zh-CN";

  const navLinks = [
    { label: t("nav.home"), href: "/#hero" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.news"), href: "/news" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLocaleChange = () => {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    setMenuOpen(false);
    router.refresh();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-secondary ${scrolled ? "shadow-lg" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/#hero" className="flex items-center gap-2 shrink-0">
            <svg
              viewBox="0 0 1841 503"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-auto"
              aria-label="Good Mood logo"
            >
              <defs>
                <clipPath id="logo-reveal">
                  <rect x="0" y="0" height="503" width="0">
                    <animate
                      attributeName="width"
                      from="0"
                      to="1841"
                      dur="0.7s"
                      begin="0s"
                      fill="freeze"
                      calcMode="spline"
                      keyTimes="0;1"
                      keySplines="0.4 0 0.2 1"
                    />
                  </rect>
                </clipPath>
              </defs>
              <g clipPath="url(#logo-reveal)">
                <rect x="275" y="220" width="112" height="65" fill="#F9C110" />
                <circle cx="250" cy="250" r="187.5" stroke="white" strokeWidth="125" />
                <circle cx="690" cy="250" r="187.5" stroke="white" strokeWidth="125" />
                <circle cx="1591" cy="250" r="187.5" stroke="white" strokeWidth="125" />
                <circle cx="1115" cy="253" r="187.5" stroke="#F9C110" strokeWidth="125" />
                <rect x="1326.5" y="20.5" width="123" height="465" fill="white" stroke="white" />
                <path d="M644 316C679.928 344.402 700.072 343.332 736 316" stroke="white" strokeWidth="20" strokeLinecap="round" />
                <path d="M1069 336.902C1104.93 308.5 1125.07 309.57 1161 336.902" stroke="white" strokeWidth="20" strokeLinecap="round" />
              </g>
            </svg>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/#hero"
              className="px-4 py-2 text-sm font-medium text-gray-300 rounded-md transition-colors duration-150 hover:text-white hover:bg-white/10"
              style={fontStyle}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/services"
              className="px-4 py-2 text-sm font-medium text-gray-300 rounded-md transition-colors duration-150 hover:text-white hover:bg-white/10"
              style={fontStyle}
            >
              {t("nav.services")}
            </Link>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 rounded-md transition-colors duration-150 hover:text-white hover:bg-white/10"
                style={fontStyle}
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={handleLocaleChange}
              className="ml-2 px-3 py-2 text-sm font-medium text-gray-300 rounded-md border border-white/10 transition-colors duration-150 hover:text-white hover:bg-white/10"
              style={fontStyle}
              aria-label={t("localeSwitch.ariaLabel")}
            >
              {t(`localeSwitch.${nextLocale}`)}
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-150"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={
              menuOpen ? t("actions.closeMenu") : t("actions.openMenu")
            }
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
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
        <Link
          href="/#hero"
          onClick={() => setMenuOpen(false)}
          className="py-4 text-base font-medium text-gray-300 border-b border-white/10 hover:text-white transition-colors duration-150"
          style={fontStyle}
        >
          {t("nav.home")}
        </Link>
        <Link
          href="/services"
          onClick={() => setMenuOpen(false)}
          className="py-4 text-base font-medium text-gray-300 border-b border-white/10 hover:text-white transition-colors duration-150"
          style={fontStyle}
        >
          {t("nav.services")}
        </Link>

        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          className="py-4 text-base font-medium text-gray-300 border-b border-white/10 hover:text-white transition-colors duration-150"
          style={fontStyle}
        >
          {t("nav.about")}
        </Link>

        <button
          type="button"
          onClick={handleLocaleChange}
          className="w-full py-4 text-left text-base font-medium text-gray-300 border-b border-white/10 hover:text-white transition-colors duration-150"
          style={fontStyle}
          aria-label={t("localeSwitch.ariaLabel")}
        >
          {t(`localeSwitch.${nextLocale}`)}
        </button>
      </nav>
    </>
  );
}

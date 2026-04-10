"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const nextLocale = locale === "zh-CN" ? "en" : "zh-CN";

  const navLinks = [
    { label: t("nav.home"), href: "/#hero" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.news"), href: "/news" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  const servicesDropdown = {
    label: t("nav.services"),
    href: "/#core-services",
    items: [
      { label: t("nav.serviceProcess"), href: "/#process" },
      { label: t("nav.successCases"), href: "/#cases" },
    ],
  };

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLocaleChange = () => {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
    router.refresh();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/#hero"
            className="flex items-center gap-2 shrink-0"
            style={fontStyle}
          >
            <span
              className="text-xl font-extrabold tracking-tight"
              style={{ color: "#FB8C00" }}
            >
              Good
            </span>
            <span className="text-xl font-extrabold tracking-tight text-white">
              Mood
            </span>
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

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <Link
                href={servicesDropdown.href}
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 rounded-md transition-colors duration-150 hover:text-white hover:bg-white/10"
                style={fontStyle}
              >
                {servicesDropdown.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-0 mt-1 w-36 rounded-xl border border-white/10 overflow-hidden shadow-xl transition-all duration-200 ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
                style={{ backgroundColor: "#0D1B2A" }}
              >
                {servicesDropdown.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-150"
                    style={fontStyle}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

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

        {/* Mobile services accordion */}
        <div className="border-b border-white/10">
          <div className="flex items-center justify-between">
            <Link
              href={servicesDropdown.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-base font-medium text-gray-300 hover:text-white transition-colors duration-150"
              style={fontStyle}
            >
              {servicesDropdown.label}
            </Link>
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-150"
            >
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>
          {mobileServicesOpen && (
            <div className="pb-2 pl-4 flex flex-col gap-1">
              {servicesDropdown.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileServicesOpen(false);
                  }}
                  className="py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-150"
                  style={fontStyle}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

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

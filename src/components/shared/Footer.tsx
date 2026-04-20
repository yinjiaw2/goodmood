import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { GoodMoodLogoAnimation } from "./GoodMoodAnimation";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function Footer() {
  const t = useTranslations("footer");
  const navLinkKeys = ["0", "1", "2", "3"] as const;

  return (
    <footer
      style={{ fontFamily: font, backgroundColor: "#111111" }}
      className="text-white pt-12 pb-6" //
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-[1fr_0.85fr_0.85fr_1fr]">
          {/* Brand */}
          <div className="lg:max-w-xs">
            <Link href="/#hero" className="mb-5 inline-flex items-center">
              <GoodMoodLogoAnimation />
            </Link>

            <p className="text-sm leading-8 text-white/40">{t("tagline")}</p>
          </div>

          {/* Navigation */}
          <div className="lg:pl-20">
            <p className="mb-6 text-xs font-bold uppercase tracking-[1.5px] text-white/90">
              {t("navLabel")}
            </p>
            <ul className="flex flex-col gap-4">
              {navLinkKeys.map((linkKey) => (
                <li key={linkKey}>
                  <Link
                    href={t(`navLinks.${linkKey}.href`)}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-[#F5C400]"
                  >
                    {t(`navLinks.${linkKey}.label`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:pl-24">
            <p className="mb-6 text-xs font-bold uppercase tracking-[1.5px] text-white/90">
              {t("companyLabel")}
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/60 transition-colors duration-200 hover:text-[#F5C400]"
                >
                  {t("companyLinks.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 transition-colors duration-200 hover:text-[#F5C400]"
                >
                  {t("companyLinks.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:pl-28">
            <p className="mb-6 text-xs font-bold uppercase tracking-[1.5px] text-white/90">
              {t("contactLabel")}
            </p>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li>{t("address")}</li>
              <li>
                <a
                  href={`mailto:${t("email")}`}
                  className="transition-colors duration-200 hover:text-[#F5C400]"
                >
                  {t("email")}
                </a>
              </li>
              <li>{t("wechat")}</li>
              <li>{t("xiaohongshu")}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {t("copyrightName")}.{" "}
            {t("copyrightSuffix")}
          </p>
          <p>{t("location")}</p>
        </div>
      </div>
    </footer>
  );
}

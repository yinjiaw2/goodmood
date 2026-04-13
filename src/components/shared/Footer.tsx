import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function Footer() {
  const t = useTranslations("footer");
  const navLinkKeys = ["0", "1", "2", "3", "4"] as const;

  return (
    <footer
      style={{ fontFamily: font, backgroundColor: "#111111" }}
      className="text-white"
    >
      <div className="h-px w-full bg-white/10 mb-10" />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:max-w-xs">
            <Link href="/#hero" className="mb-4 inline-flex items-center">
              <Image
                src="/white.png"
                alt={t("logoAlt")}
                width={150}
                height={44}
                className="h-auto w-auto object-contain"
                priority={false}
              />
            </Link>

            <p className="text-sm leading-relaxed text-white/40">
              {t("tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[1.5px] text-white/90">
              {t("navLabel")}
            </p>
            <ul className="flex flex-col gap-3">
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
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[1.5px] text-white/90">
              {t("companyLabel")}
            </p>
            <ul className="flex flex-col gap-3">
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
                  href="/news"
                  className="text-sm text-white/60 transition-colors duration-200 hover:text-[#F5C400]"
                >
                  {t("companyLinks.news")}
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
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[1.5px] text-white/90">
              {t("contactLabel")}
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
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

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
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
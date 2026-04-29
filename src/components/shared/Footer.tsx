import Link from "next/link";
import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import { GoodMoodLogoAnimation } from "./GoodMoodAnimation";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";
const googleMapsHref =
  "https://www.google.com/maps/search/?api=1&query=Level%209%20Tower%203%2F18-38%20Siddeley%20St";

const serviceKeys = ["social", "ads", "creative", "ecommerce", "email", "video", "website"] as const;

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer style={{ fontFamily: font, backgroundColor: "#111111" }} className="text-white">
      {/* 顶部黄色细线 */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F5C400]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-10 py-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">

          {/* ── 品牌 ── */}
          <div className="flex flex-col gap-4">
            <Link href="/#hero" className="inline-flex items-center">
              <GoodMoodLogoAnimation />
            </Link>
            <p className="text-sm leading-7 text-white/40 whitespace-pre-line">{t("tagline")}</p>
          </div>

          {/* ── What We Do ── */}
          <div className="lg:-ml-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[1.5px] text-white">
              {t("servicesLabel")}
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={t(`serviceLinks.${key}.href`)}
                    className="text-sm text-white/65 transition-colors duration-200 hover:text-[#F5C400]"
                  >
                    {t(`serviceLinks.${key}.label`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company + Address ── */}
          <div className="flex flex-col gap-5 lg:ml-4">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[1.5px] text-white">
                {t("companyLabel")}
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href={t("companyLinks.about.href")}
                    className="text-sm text-white/65 transition-colors duration-200 hover:text-[#F5C400]"
                  >
                    {t("companyLinks.about.label")}
                  </Link>
                </li>
                <li>
                  <span className="text-sm text-white/65 cursor-default">
                    {t("companyLinks.privacy.label")}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[1.5px] text-white">
                {t("contactLabel")}
              </p>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#F5C400]" />
                <a
                  href={googleMapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/65 leading-5 transition-colors duration-200 hover:text-[#F5C400]"
                >
                  {t("address")}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── 底部版权 ── */}
        <div className="mt-8 border-t border-white/10 pt-5 text-xs text-white/25 flex justify-end">
          <p>
            © {new Date().getFullYear()} {t("copyrightName")}. {t("copyrightSuffix")}
          </p>
        </div>
      </div>
    </footer>
  );
}

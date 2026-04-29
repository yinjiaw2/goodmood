import Link from "next/link";
import { useTranslations } from "next-intl";
import { GoodMoodLogoAnimation } from "./GoodMoodAnimation";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";
const googleMapsHref =
  "https://www.google.com/maps/search/?api=1&query=Level%209%20Tower%203%2F18-38%20Siddeley%20St";

export default function Footer() {
  const t = useTranslations("footer");
  const navLinkKeys = ["0", "1", "2"] as const;

  return (
    <footer
      style={{ fontFamily: font, backgroundColor: "#111111" }}
      className="text-white pt-12 pb-6" //
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Brand */}
          <div className="lg:max-w-sm">
            <Link href="/#hero" className="mb-5 inline-flex items-center">
              <GoodMoodLogoAnimation />
            </Link>

            <p className="text-sm leading-8 text-white/40">{t("tagline")}</p>
          </div>

          {/* Navigation */}
          <div className="lg:justify-self-center">
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

          {/* Address */}
          <div className="lg:justify-self-center lg:max-w-xs lg:pl-6">
            <p className="mb-6 text-xs font-bold uppercase tracking-[1.5px] text-white/90">
              {t("contactLabel")}
            </p>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li>
                <a
                  href={googleMapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-7 transition-colors duration-200 hover:text-[#F5C400]"
                >
                  {t("address")}
                </a>
              </li>
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

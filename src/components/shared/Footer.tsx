import Link from "next/link";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function Footer() {
  const t = useTranslations("footer");
  const navLinkKeys = ["0", "1", "2", "3", "4"] as const;

  return (
    <footer style={{ backgroundColor: "#0D1B2A", fontFamily: font }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/#hero" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-extrabold tracking-tight" style={{ color: "#FB8C00" }}>
                {t("brandName1")}
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                {t("brandName2")}
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
              {t("navLabel")}
            </p>
            <ul className="flex flex-col gap-3">
              {navLinkKeys.map((linkKey) => (
                <li key={linkKey}>
                  <Link
                    href={t(`navLinks.${linkKey}.href`)}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {t(`navLinks.${linkKey}.label`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
              {t("contactLabel")}
            </p>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>📍 {t("address")}</li>
              <li>
                <a
                  href={`mailto:${t("email")}`}
                  className="hover:text-white transition-colors duration-150"
                >
                  {t("email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {t("copyrightName")}. {t("copyrightSuffix")}
          </p>
          <p className="text-xs text-gray-600">
            {t("location")}
          </p>
        </div>
      </div>
    </footer>
  );
}

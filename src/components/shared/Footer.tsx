import Link from "next/link";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function Footer() {
  const t = useTranslations("footer");
  const navLinkKeys = ["0", "1", "2", "3", "4"] as const;

  return (
    <footer style={{ fontFamily: font }} className="bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link href="/#hero" className="mb-4 inline-flex items-center gap-2">
              <span
                className="text-2xl font-extrabold tracking-tight"
                style={{ color: "#F5C400" }}
              >
                {t("brandName1")}
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                {t("brandName2")}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              {t("tagline")}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              {t("navLabel")}
            </p>
            <ul className="flex flex-col gap-3">
              {navLinkKeys.map((linkKey) => (
                <li key={linkKey}>
                  <Link
                    href={t(`navLinks.${linkKey}.href`)}
                    className="text-sm text-gray-400 transition-colors duration-150 hover:text-white"
                  >
                    {t(`navLinks.${linkKey}.label`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              {t("contactLabel")}
            </p>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>{t("address")}</li>
              <li>
                <a
                  href={`mailto:${t("email")}`}
                  className="transition-colors duration-150 hover:text-white"
                >
                  {t("email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {t("copyrightName")}.{" "}
            {t("copyrightSuffix")}
          </p>
          <p className="text-xs text-gray-600">{t("location")}</p>
        </div>
      </div>
    </footer>
  );
}

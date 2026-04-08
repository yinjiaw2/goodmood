import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

const defaultLocale = "zh-CN";
const locales = [defaultLocale, "en"] as const;
const localeCookieName = "NEXT_LOCALE";

function isSupportedLocale(locale: string): locale is (typeof locales)[number] {
  return locales.includes(locale as (typeof locales)[number]);
}

function getLocaleFromAcceptLanguage(
  headerValue: string | null,
): (typeof locales)[number] | null {
  if (!headerValue) return null;

  const preferredLocales = headerValue
    .split(",")
    .map((part) => {
      const [localePart, qPart] = part.trim().split(";q=");
      const normalizedLocale = localePart.trim().toLowerCase();
      const quality = qPart ? Number(qPart) : 1;

      return {
        locale: normalizedLocale,
        quality: Number.isNaN(quality) ? 0 : quality,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { locale } of preferredLocales) {
    if (locale.startsWith("zh")) return "zh-CN";
    if (locale.startsWith("en")) return "en";
  }

  return null;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const cookieLocale = (await cookies()).get(localeCookieName)?.value;
  const acceptLanguage = (await headers()).get("accept-language");
  const browserLocale = getLocaleFromAcceptLanguage(acceptLanguage);
  const locale =
    requested && isSupportedLocale(requested)
      ? requested
      : cookieLocale && isSupportedLocale(cookieLocale)
        ? cookieLocale
        : (browserLocale ?? defaultLocale);
  const messages = {
    about: (await import(`../../messages/${locale}/about.json`)).default,
    contact: (await import(`../../messages/${locale}/contact.json`)).default,
    coreServices: (await import(`../../messages/${locale}/coreServices.json`))
      .default,
    faq: (await import(`../../messages/${locale}/faq.json`)).default,
    footer: (await import(`../../messages/${locale}/footer.json`)).default,
    header: (await import(`../../messages/${locale}/header.json`)).default,
    hero: (await import(`../../messages/${locale}/hero.json`)).default,
    numbers: (await import(`../../messages/${locale}/numbers.json`)).default,
    ourTeam: (await import(`../../messages/${locale}/ourTeam.json`)).default,
    serviceProcess: (
      await import(`../../messages/${locale}/serviceProcess.json`)
    ).default,
    successCases: (await import(`../../messages/${locale}/successCases.json`))
      .default,
  };

  return {
    locale,
    messages,
  };
});

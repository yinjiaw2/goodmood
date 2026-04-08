import { getRequestConfig } from "next-intl/server";

const defaultLocale = "zh-CN";
const locales = [defaultLocale, "en"] as const;

function isSupportedLocale(locale: string): locale is (typeof locales)[number] {
  return locales.includes(locale as (typeof locales)[number]);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = requested && isSupportedLocale(requested) ? requested : defaultLocale;
  const messages = {
    about: (await import(`../../messages/${locale}/about.json`)).default,
    contact: (await import(`../../messages/${locale}/contact.json`)).default,
    coreServices: (await import(`../../messages/${locale}/coreServices.json`)).default,
    faq: (await import(`../../messages/${locale}/faq.json`)).default,
    footer: (await import(`../../messages/${locale}/footer.json`)).default,
    header: (await import(`../../messages/${locale}/header.json`)).default,
    hero: (await import(`../../messages/${locale}/hero.json`)).default,
    ourTeam: (await import(`../../messages/${locale}/ourTeam.json`)).default,
    serviceProcess: (await import(`../../messages/${locale}/serviceProcess.json`)).default,
    successCases: (await import(`../../messages/${locale}/successCases.json`)).default,
  };

  return {
    locale,
    messages,
  };
});

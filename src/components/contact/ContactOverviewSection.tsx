import { BriefcaseBusiness, Building2, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

const cards = [
  {
    key: "intro",
    icon: Building2,
    titleKey: "companyTitle",
    bodyKey: "companyBody",
  },
  {
    key: "services",
    icon: BriefcaseBusiness,
    titleKey: "servicesTitle",
    bodyKey: "servicesBody",
  },
  {
    key: "approach",
    icon: Sparkles,
    titleKey: "approachTitle",
    bodyKey: "approachBody",
  },
] as const;

export default function ContactOverviewSection() {
  const t = useTranslations("contact");

  return (
    <section className="relative overflow-hidden bg-[#F5F2EB] px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span
            className="inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest"
            style={{
              color: "#F5C400",
              borderColor: "rgba(245,196,0,0.35)",
              backgroundColor: "rgba(245,196,0,0.08)",
              ...fontStyle,
            }}
          >
            {t("page.heroBadge")}
          </span>
          <h1
            className="mt-6 text-4xl font-extrabold leading-tight text-[#1A1A1A] md:text-6xl"
            style={{ ...fontStyle, letterSpacing: "-0.04em" }}
          >
            <span className="block">{t("page.heroTitle")}</span>
            <span className="block text-[#F5C400]">
              {t("page.heroHighlight")}
            </span>
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-8 text-[#5F5F5F] md:text-lg"
            style={fontStyle}
          >
            {t("page.heroSubtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.key}
              className="rounded-[28px] border border-black/8 bg-white p-7 shadow-[0_18px_60px_rgba(0,0,0,0.05)]"
            >
              <card.icon
                aria-hidden="true"
                size={22}
                className="mb-5 rounded-xl bg-[#F5C400]/12 p-[10px] text-[#C79D00]"
              />
              <h2
                className="mb-3 text-xl font-bold text-[#1A1A1A]"
                style={fontStyle}
              >
                {t(`page.${card.titleKey}`)}
              </h2>
              <p
                className="text-sm leading-7 text-[#6B6B6B]"
                style={fontStyle}
              >
                {t(`page.${card.bodyKey}`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

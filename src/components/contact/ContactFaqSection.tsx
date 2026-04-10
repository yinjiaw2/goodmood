import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

const faqKeys = ["1", "2", "3", "4"] as const;

export default function ContactFaqSection() {
  const t = useTranslations("contact");

  return (
    <section className="bg-white px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span
            className="inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest"
            style={{
              color: "#F5C400",
              borderColor: "rgba(245,196,0,0.3)",
              backgroundColor: "rgba(245,196,0,0.08)",
              ...fontStyle,
            }}
          >
            {t("page.faqBadge")}
          </span>
          <h2
            className="mt-6 text-4xl font-extrabold leading-tight text-[#1A1A1A] md:text-5xl"
            style={{ ...fontStyle, letterSpacing: "-0.03em" }}
          >
            {t("page.faqTitle")}
          </h2>
          <p
            className="mt-4 text-base leading-7 text-[#6B6B6B]"
            style={fontStyle}
          >
            {t("page.faqSubtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-5">
          {faqKeys.map((faqKey) => (
            <article
              key={faqKey}
              className="rounded-[24px] border border-black/8 bg-[#F8F6F1] p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <ChevronRight
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#F5C400]"
                  size={20}
                />
                <div>
                  <h3
                    className="text-lg font-bold text-[#1A1A1A]"
                    style={fontStyle}
                  >
                    {t(`page.faq.items.${faqKey}.question`)}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-7 text-[#6B6B6B]"
                    style={fontStyle}
                  >
                    {t(`page.faq.items.${faqKey}.answer`)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Clock3, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import ConsultationForm from "@/components/shared/ConsultationForm";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

const detailCards = [
  { key: "email", icon: Mail },
  { key: "office", icon: MapPin },
  { key: "hours", icon: Clock3 },
] as const;

export default function ContactConnectSection() {
  const t = useTranslations("contact");

  return (
    <section className="bg-[#1A1A1A] px-6 py-24 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <span
            className="inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest"
            style={{
              color: "#F5C400",
              borderColor: "rgba(245,196,0,0.35)",
              backgroundColor: "rgba(245,196,0,0.08)",
              ...fontStyle,
            }}
          >
            {t("page.connectBadge")}
          </span>

          <h2
            className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl"
            style={{ ...fontStyle, letterSpacing: "-0.03em" }}
          >
            {t("page.connectTitle")}
          </h2>
          <p
            className="mt-4 max-w-md text-base leading-7 text-white/70"
            style={fontStyle}
          >
            {t("page.connectSubtitle")}
          </p>

          <div className="mt-8 space-y-4">
            {detailCards.map((item) => (
              <div
                key={item.key}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5"
              >
                <item.icon
                  aria-hidden="true"
                  size={20}
                  className="mb-4 text-[#F5C400]"
                />
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                  {t(`page.details.${item.key}.label`)}
                </p>
                <p
                  className="mt-2 text-sm leading-7 text-white/80"
                  style={fontStyle}
                >
                  {t(`page.details.${item.key}.value`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="self-start">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}

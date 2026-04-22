"use client";

import { useTranslations } from "next-intl";
import ConsultationForm from "@/components/shared/ConsultationForm";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export default function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="w-full bg-[#1A1A1A] px-6 py-24 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="flex flex-col gap-6">
          <span
            className="inline-flex w-fit rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest"
            style={{
              color: "#F5C400",
              borderColor: "rgba(245,196,0,0.35)",
              backgroundColor: "rgba(245,196,0,0.08)",
              ...fontStyle,
            }}
          >
            {t("sectionTitle")}
          </span>

          <div className="space-y-4">
            <h2
              className="text-4xl font-extrabold leading-tight md:text-5xl"
              style={{ ...fontStyle, letterSpacing: "-0.03em" }}
            >
              {t("formTitle")}
            </h2>
            <p
              className="max-w-md text-base leading-7 text-white/70"
              style={fontStyle}
            >
              {t("sectionSubtitle")}
            </p>
            <p
              className="max-w-md text-sm leading-7 text-white/55"
              style={fontStyle}
            >
              {t("formSubtitle")}
            </p>
          </div>
        </div>

        <ConsultationForm />
      </div>
    </section>
  );
}

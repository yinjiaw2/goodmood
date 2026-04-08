"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

function FaqItem({
  itemKey,
  open,
  onToggle,
}: {
  itemKey: string;
  open: boolean;
  onToggle: () => void;
}) {
  const t = useTranslations("faq");

  return (
    <div
      className="rounded-2xl bg-white border border-gray-200 overflow-hidden transition-shadow duration-200 hover:shadow-md cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <span
          className="text-base font-medium text-gray-900"
          style={{ fontFamily: font }}
        >
          {t(`items.${itemKey}.question`)}
        </span>
        <span
          className="shrink-0 text-gray-900 transition-transform duration-300"
          style={{ transform: open ? "rotate(3645deg)" : "rotate(0deg)" }}
        >
          <Plus size={18} />
        </span>
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "400px" : "0px" }}
      >
        <p
          className="px-6 pb-6 text-sm text-gray-500 leading-relaxed"
          style={{ fontFamily: font }}
        >
          {t(`items.${itemKey}.answer`)}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const itemKeys = ["0", "1", "2", "3", "4", "5", "6", "7"] as const;
  const col1 = itemKeys.filter((_, i: number) => i % 2 === 0);
  const col2 = itemKeys.filter((_, i: number) => i % 2 === 1);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      id="faq"
      className="w-full py-24 px-6 scroll-mt-16"
      style={{ backgroundColor: "#F2F1EF" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-300 bg-white mb-6">
            <span
              className="text-xs font-semibold tracking-widest uppercase text-gray-500"
              style={{ fontFamily: font }}
            >
              {t("sectionLabel")}
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            style={{ fontFamily: font, letterSpacing: "-0.03em" }}
          >
            {t("titleBefore")}
            <span style={{ color: "#FB8C00" }}>{t("titleAccent")}</span>
          </h2>
        </div>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="flex flex-col gap-4">
            {col1.map((itemKey, index) => {
              const actualIndex = index * 2;
              return (
                <FaqItem
                  key={itemKey}
                  itemKey={itemKey}
                  open={openIndex === actualIndex}
                  onToggle={() => toggle(actualIndex)}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            {col2.map((itemKey, index) => {
              const actualIndex = index * 2 + 1;
              return (
                <FaqItem
                  key={itemKey}
                  itemKey={itemKey}
                  open={openIndex === actualIndex}
                  onToggle={() => toggle(actualIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

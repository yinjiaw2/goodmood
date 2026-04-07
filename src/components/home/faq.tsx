'use client'

import { useState } from "react";
import { Plus } from "lucide-react";
import content from "@/content/faq.json";

const font = "var(--font-geist-sans), Arial, Helvetica, sans-serif";

function FaqItem({
  item,
  open,
  onToggle,
}: {
  item: { question: string; answer: string };
  open: boolean;
  onToggle: () => void;
}) {
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
          {item.question}
        </span>
        <span
          className="shrink-0 text-gray-400 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
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
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = content.items;
  const col1 = items.filter((_, i) => i % 2 === 0);
  const col2 = items.filter((_, i) => i % 2 === 1);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section
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
              {content.sectionLabel}
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            style={{ fontFamily: font, letterSpacing: "-0.03em" }}
          >
            {content.titleBefore}
            <span style={{ color: "#FB8C00" }}>{content.titleAccent}</span>
          </h2>
        </div>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="flex flex-col gap-4">
            {col1.map((item) => {
              const index = items.indexOf(item);
              return (
                <FaqItem
                  key={index}
                  item={item}
                  open={openIndex === index}
                  onToggle={() => toggle(index)}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            {col2.map((item) => {
              const index = items.indexOf(item);
              return (
                <FaqItem
                  key={index}
                  item={item}
                  open={openIndex === index}
                  onToggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

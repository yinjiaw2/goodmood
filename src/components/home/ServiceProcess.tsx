import {
  MessageCircle,
  ClipboardList,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import content from "@/content/serviceProcess.json";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  ClipboardList,
  TrendingUp,
  BadgeCheck,
};

const font = "var(--font-geist-sans), Arial, Helvetica, sans-serif";

export default function ServiceProcess() {
  return (
    <section
      id="process"
      className="w-full py-24 px-6 scroll-mt-16"
      style={{ backgroundColor: "#F2F1EF" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gray-300 bg-white w-fit">
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

        {/* Steps */}
        <div className="hidden md:block">
          {/* Icons row with connector line behind */}
          <div className="relative grid grid-cols-4 mb-10">
            {/* Single connector line spanning from center of col1 to center of col4 */}
            <div
              className="absolute top-10 h-px"
              style={{
                left: "12.5%",
                right: "12.5%",
                background: "linear-gradient(to right, #FB8C00, #FB8C00aa, #e5e7eb)",
              }}
            />
            {content.steps.map((step) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.number} className="flex justify-center relative z-10">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-md bg-white">
                    <Icon size={32} style={{ color: "#FB8C00" }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Text row aligned to same grid */}
          <div className="grid grid-cols-4">
            {content.steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center px-4">
                <h3
                  className="text-xl font-extrabold text-gray-900 mb-3"
                  style={{ fontFamily: font }}
                >
                  {step.titleBefore}
                  <br />
                  <span style={{ color: "#FB8C00" }}>{step.titleAccent}</span>
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed max-w-45"
                  style={{ fontFamily: font }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden flex flex-col gap-10">
          {content.steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={step.number} className="flex gap-5 items-start">
                <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md bg-white">
                  <Icon size={28} style={{ color: "#FB8C00" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: "#FB8C00", fontFamily: font }}>
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-1" style={{ fontFamily: font }}>
                    {step.titleBefore}
                    <span style={{ color: "#FB8C00" }}>{step.titleAccent}</span>
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: font }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

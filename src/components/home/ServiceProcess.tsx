import {
  MessageCircle,
  ClipboardList,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  ClipboardList,
  TrendingUp,
  BadgeCheck,
};

const font = "var(--font-geist-sans), Arial, Helvetica, sans-serif";

export default function ServiceProcess() {
  const t = useTranslations("serviceProcess");
  const steps = t.raw("steps") as {
    number: string;
    icon: string;
    titleBefore: string;
    titleAccent: string;
    description: string;
  }[];

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

        {/* Steps */}
        <div className="hidden md:block">
          {/* Icons row with connector line behind */}
          <div className="relative grid grid-cols-4 mb-10">
            {/* Wavy connector — peaks sit at each icon center */}
            <svg
              className="absolute pointer-events-none"
              style={{ top: "40px", left: "12.5%", right: "12.5%", height: "20px" }}
              width="100%"
              height="20"
              viewBox="0 0 300 20"
              preserveAspectRatio="none"
              overflow="visible"
            >
              <defs>
                <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FB8C00" />
                  <stop offset="60%" stopColor="#FB8C00" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#e5e7eb" />
                </linearGradient>
              </defs>
              {/* Peaks at x=0,100,200,300 (icon centers); valleys at x=50,150,250 */}
              <path
                d="M 0,0 C 25,0 25,18 50,18 C 75,18 75,0 100,0 C 125,0 125,18 150,18 C 175,18 175,0 200,0 C 225,0 225,18 250,18 C 275,18 275,0 300,0"
                fill="none"
                stroke="url(#waveGrad)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {steps.map((step, index: number) => {
              const Icon = iconMap[step.icon];
              return (
                <div
                  key={step.number}
                  className="flex justify-center relative z-10"
                >
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-md bg-white">
                    <Icon
                      size={32}
                      className="animate-float"
                      style={{ color: "#FB8C00", animationDelay: `${index * 0.4}s` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Text row aligned to same grid */}
          <div className="grid grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center px-4"
              >
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
          {steps.map((step, index: number) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={step.number} className="flex gap-5 items-start">
                <div
                  className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md bg-white"
                >
                  <Icon
                    size={28}
                    className="animate-float"
                    style={{ color: "#FB8C00", animationDelay: `${index * 0.4}s` }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold mb-1"
                    style={{ color: "#FB8C00", fontFamily: font }}
                  >
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="text-lg font-extrabold text-gray-900 mb-1"
                    style={{ fontFamily: font }}
                  >
                    {step.titleBefore}
                    <span style={{ color: "#FB8C00" }}>{step.titleAccent}</span>
                  </h3>
                  <p
                    className="text-sm text-gray-500 leading-relaxed"
                    style={{ fontFamily: font }}
                  >
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

import { useTranslations } from "next-intl";
import { ScanSearch, Lightbulb, Rocket, BarChart2 } from "lucide-react";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

const STEP_ICONS = [
  <ScanSearch key="audit" size={22} />,
  <Lightbulb key="strategy" size={22} />,
  <Rocket key="execute" size={22} />,
  <BarChart2 key="measure" size={22} />,
];

export default function ProcessSection() {
  const t = useTranslations("home");

  const steps = [
    {
      label: t("process.step1Label"),
      title: t("process.step1Title"),
      desc: t("process.step1Desc"),
    },
    {
      label: t("process.step2Label"),
      title: t("process.step2Title"),
      desc: t("process.step2Desc"),
    },
    {
      label: t("process.step3Label"),
      title: t("process.step3Title"),
      desc: t("process.step3Desc"),
    },
    {
      label: t("process.step4Label"),
      title: t("process.step4Title"),
      desc: t("process.step4Desc"),
    },
  ];

  return (
    <section id="process" className="w-full bg-white py-24 px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center">
        {/* Left: badge + title + subtitle (sticky on large screens) */}
        <div className="flex flex-col gap-6">
          <span
            className="inline-flex w-fit text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border"
            style={{
              color: "#FB8C00",
              borderColor: "rgba(251,140,0,0.35)",
              backgroundColor: "rgba(251,140,0,0.07)",
              ...fontStyle,
            }}
          >
            {t("process.badge")}
          </span>
          <h2
            className="text-5xl md:text-6xl font-extrabold text-[#0D1B2A] leading-tight"
            style={{ ...fontStyle, letterSpacing: "-0.02em" }}
          >
            {t("process.title")}
            <br />
            <span style={{ color: "#FB8C00" }}>
              {t("process.titleHighlight")}
            </span>
          </h2>
          <p
            className="text-lg text-gray-500 leading-relaxed max-w-sm"
            style={fontStyle}
          >
            {t("process.subtitle")}
          </p>
        </div>

        {/* Right: steps stacked vertically */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-6 py-8 border-b border-gray-100 last:border-0"
            >
              {/* Icon circle */}
              <div
                className="relative flex items-center justify-center w-14 h-14 rounded-full shrink-0 text-white"
                style={{ backgroundColor: "#FB8C00" }}
              >
                {STEP_ICONS[i]}
                <span
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center text-white"
                  style={{ backgroundColor: "#0D1B2A", ...fontStyle }}
                >
                  {i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5">
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#FB8C00", ...fontStyle }}
                >
                  {step.label}
                </span>
                <h3
                  className="text-xl font-bold text-[#0D1B2A]"
                  style={fontStyle}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  style={fontStyle}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

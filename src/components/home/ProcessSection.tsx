import {
  BarChart3,
  ChevronDown,
  FileText,
  Layers,
  Map,
  Pencil,
  PieChart,
  Rocket,
  SlidersHorizontal,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function ProcessSection() {
  const t = useTranslations("home");
  const locale = useLocale();
  const isChinese = locale === "zh-CN";

  const steps = [
    {
      number: t("process.step1Number"),
      label: t("process.step1Label"),
      name: t("process.step1Title"),
      desc: t("process.step1Desc"),
      deliverables: [
        { label: t("process.step1Deliverable1"), icon: BarChart3 },
        { label: t("process.step1Deliverable2"), icon: PieChart },
        { label: t("process.step1Deliverable3"), icon: Users },
      ],
    },
    {
      number: t("process.step2Number"),
      label: t("process.step2Label"),
      name: t("process.step2Title"),
      desc: t("process.step2Desc"),
      deliverables: [
        { label: t("process.step2Deliverable1"), icon: Target },
        { label: t("process.step2Deliverable2"), icon: FileText },
        { label: t("process.step2Deliverable3"), icon: Map },
      ],
    },
    {
      number: t("process.step3Number"),
      label: t("process.step3Label"),
      name: t("process.step3Title"),
      desc: t("process.step3Desc"),
      deliverables: [
        { label: t("process.step3Deliverable1"), icon: Pencil },
        { label: t("process.step3Deliverable2"), icon: Rocket },
        { label: t("process.step3Deliverable3"), icon: Layers },
      ],
    },
    {
      number: t("process.step4Number"),
      label: t("process.step4Label"),
      name: t("process.step4Title"),
      desc: t("process.step4Desc"),
      deliverables: [
        { label: t("process.step4Deliverable1"), icon: Workflow },
        { label: t("process.step4Deliverable2"), icon: SlidersHorizontal },
        { label: t("process.step4Deliverable3"), icon: TrendingUp },
      ],
    },
  ];

  return (
    <section
      id="process"
      className={`w-full bg-[#fff] scroll-mt-16 ${
        isChinese ? "py-18 md:py-24" : "py-24 md:py-32"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          className={`flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between ${
            isChinese ? "mb-12 lg:mb-14" : "mb-16 lg:mb-20"
          }`}
        >
          <div>
            <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#9A9A9A]">
              <span className="inline-block h-px w-[30px] bg-[#F5C400]" />
              {t("process.badge")}
            </div>
            <h2 className="max-w-[600px] text-[44px] font-extrabold leading-none tracking-[-0.03em] text-[#1A1A1A] md:text-[60px]">
              <span className="block">{t("process.title")}</span>
              <span className="block">{t("process.titleHighlight")}</span>
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div
          className={`relative grid grid-cols-1 gap-x-8 md:grid-cols-2 xl:grid-cols-4 ${
            isChinese ? "gap-y-9" : "gap-y-12"
          }`}
        >
          <div className="absolute left-6 right-[calc(25%-24px)] top-6 hidden h-px xl:block bg-[repeating-linear-gradient(90deg,#F5C400_0,#F5C400_6px,transparent_6px,transparent_14px)]" />
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col xl:pr-8">
              <div className="relative z-10 mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5C400] text-[13px] font-bold text-[#1A1A1A] transition duration-300 hover:scale-110 hover:shadow-[0_8px_24px_rgba(245,196,0,0.4)]">
                {step.number}
              </div>
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#B0B0B0]">
                {step.label}
              </div>
              <h3 className="mb-3 text-[24px] font-extrabold tracking-[-0.02em] text-[#1A1A1A]">
                {step.name}
              </h3>
              <p
                className={`text-[15px] leading-[1.7] text-[#7F7F7F] ${
                  isChinese
                    ? "md:min-h-[64px] xl:min-h-[86px]"
                    : "md:min-h-[96px] xl:min-h-[132px]"
                }`}
              >
                {step.desc}
              </p>

              <div
                className={`group/dropdown relative border-t border-[#E8E8E8] ${
                  isChinese ? "mt-3 pt-3" : "mt-5 pt-5"
                }`}
              >
                <button
                  type="button"
                  className={`relative flex w-full items-center rounded-full border border-[#F5C400] bg-[#F5C400] px-5 pr-12 text-left text-[#1A1A1A] shadow-[0_10px_22px_rgba(26,26,26,0.08)] transition duration-300 hover:bg-[#F5C400] hover:shadow-[0_14px_28px_rgba(245,196,0,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A] ${
                    isChinese ? "min-h-[48px] py-2" : "min-h-[58px] py-3"
                  }`}
                >
                  <span>
                    <span
                      className={`block font-extrabold uppercase tracking-[0.24em] text-[#1A1A1A] ${
                        isChinese ? "text-[13px]" : "text-[14px]"
                      }`}
                    >
                      {t("process.deliverablesLabel")}
                    </span>
                    <span className="mt-1 block text-[14px] leading-snug text-[#6F6A61]">
                      {t("process.deliverablesHint")}
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className="absolute right-4 shrink-0 text-[#1A1A1A] transition duration-300 group-hover/dropdown:rotate-180 group-focus-within/dropdown:rotate-180"
                    size={18}
                  />
                </button>
                <div
                  className={`pointer-events-none absolute left-0 right-0 top-full z-20 grid translate-y-2 gap-2 rounded-lg border border-[#F5C400]/55 bg-white p-2 opacity-0 shadow-[0_18px_36px_rgba(26,26,26,0.12)] transition duration-300 group-hover/dropdown:pointer-events-auto group-hover/dropdown:translate-y-3 group-hover/dropdown:opacity-100 group-focus-within/dropdown:pointer-events-auto group-focus-within/dropdown:translate-y-3 group-focus-within/dropdown:opacity-100 ${
                    isChinese ? "mt-1" : "mt-2"
                  }`}
                >
                  {step.deliverables.map((deliverable) => (
                    <div
                      key={deliverable.label}
                      className={`flex items-center gap-3 rounded-md border border-[#F5C400] bg-[#F5C400] text-[#1A1A1A] ${
                        isChinese
                          ? "min-h-[42px] px-2 py-1.5"
                          : "min-h-[50px] px-3 py-2"
                      }`}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/24 text-[#1A1A1A]">
                        <deliverable.icon aria-hidden="true" size={16} />
                      </span>
                      <span className="text-[12.5px] font-extrabold leading-snug tracking-[-0.01em]">
                        {deliverable.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

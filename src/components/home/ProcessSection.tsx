import { useTranslations } from "next-intl";

export default function ProcessSection() {
  const t = useTranslations("home");

  const steps = [
    {
      number: t("process.step1Number"),
      label: t("process.step1Label"),
      name: t("process.step1Title"),
      desc: t("process.step1Desc"),
      deliverables: [
        t("process.step1Deliverable1"),
        t("process.step1Deliverable2"),
        t("process.step1Deliverable3"),
      ],
    },
    {
      number: t("process.step2Number"),
      label: t("process.step2Label"),
      name: t("process.step2Title"),
      desc: t("process.step2Desc"),
      deliverables: [
        t("process.step2Deliverable1"),
        t("process.step2Deliverable2"),
        t("process.step2Deliverable3"),
      ],
    },
    {
      number: t("process.step3Number"),
      label: t("process.step3Label"),
      name: t("process.step3Title"),
      desc: t("process.step3Desc"),
      deliverables: [
        t("process.step3Deliverable1"),
        t("process.step3Deliverable2"),
        t("process.step3Deliverable3"),
      ],
    },
    {
      number: t("process.step4Number"),
      label: t("process.step4Label"),
      name: t("process.step4Title"),
      desc: t("process.step4Desc"),
      deliverables: [
        t("process.step4Deliverable1"),
        t("process.step4Deliverable2"),
        t("process.step4Deliverable3"),
      ],
    },
  ];

  return (
    <section
      id="process"
      className="w-full bg-[#fff] py-24 md:py-32 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-10 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A]">
              <span className="inline-block h-px w-[30px] bg-[#F5C400]" />
              {t("process.badge")}
            </div>
            <h2 className="max-w-[540px] text-[40px] font-extrabold leading-none tracking-[-0.03em] text-[#1A1A1A] md:text-[56px]">
              <span className="block">{t("process.title")}</span>
              <span className="block">{t("process.titleHighlight")}</span>
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
          <div className="absolute left-6 right-[calc(25%-24px)] top-6 hidden h-px xl:block bg-[repeating-linear-gradient(90deg,#F5C400_0,#F5C400_6px,transparent_6px,transparent_14px)]" />
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col xl:pr-8">
              <div className="relative z-10 mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5C400] text-[13px] font-bold text-[#1A1A1A] transition duration-300 hover:scale-110 hover:shadow-[0_8px_24px_rgba(245,196,0,0.4)]">
                {step.number}
              </div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#B0B0B0]">
                {step.label}
              </div>
              <h3 className="mb-3 text-[22px] font-extrabold tracking-[-0.02em] text-[#1A1A1A]">
                {step.name}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#7F7F7F]">
                {step.desc}
              </p>

              <div className="mt-6 border-t border-[#E8E8E8] pt-5">
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
                  {t("process.deliverablesLabel")}
                </div>
                <div className="flex flex-wrap gap-2">
                  {step.deliverables.map((deliverable) => (
                    <span
                      key={deliverable}
                      className="rounded-full border border-[#F5C400]/40 bg-[#F5C400]/10 px-3 py-1.5 text-[12px] font-semibold leading-none text-[#1A1A1A]"
                    >
                      {deliverable}
                    </span>
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

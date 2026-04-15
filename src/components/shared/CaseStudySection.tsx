"use client";

import { useTranslations } from "next-intl";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

// ─── Internal card components ─────────────────────────────────────────────────

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-[#F9F7F4] px-4 py-3">
      <span className="text-[22px] font-extrabold tracking-tight text-[#1A1A1A]" style={fontStyle}>
        {value}
      </span>
      <span className="text-[11px] font-medium text-[#9A9A9A]" style={fontStyle}>
        {label}
      </span>
    </div>
  );
}

function TextCard({
  number, client, service, problem, metrics,
}: {
  number: string;
  client: string;
  service: string;
  problem: string;
  metrics: { label: string; value: string }[];
}) {
  return (
    <div className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#9A9A9A]" style={fontStyle}>
            {client}
          </span>
          <span className="text-[38px] font-extrabold leading-none text-[#EBEBEB]" style={fontStyle}>
            {number}
          </span>
        </div>
        <span
          className="inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold"
          style={{ color: "#A07800", backgroundColor: "rgba(245,196,0,0.12)", ...fontStyle }}
        >
          {service}
        </span>
        <p className="text-[14px] leading-[1.8] text-[#6B6B6B]" style={fontStyle}>
          {problem}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {metrics.map((m) => (
          <MetricPill key={m.label} label={m.label} value={m.value} />
        ))}
      </div>
    </div>
  );
}

function ChartCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9A9A9A]" style={fontStyle}>
        {label}
      </p>
      {children}
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

interface Props {
  namespace: string;
  /** Chart rendered in Row 1 (right slot). Defaults to BarChart. */
  chart1?: React.ReactNode;
  /** Chart rendered in Row 2 (left slot). Defaults to LineChart. */
  chart2?: React.ReactNode;
}

export default function CaseStudySection({ namespace, chart1, chart2 }: Props) {
  const t = useTranslations(namespace);

  const resolvedChart1 = chart1 ?? <BarChart namespace={namespace} />;
  const resolvedChart2 = chart2 ?? <LineChart />;

  const case1Metrics = [
    { label: t("caseStudy.case1Metric1Label"), value: t("caseStudy.case1Metric1Value") },
    { label: t("caseStudy.case1Metric2Label"), value: t("caseStudy.case1Metric2Value") },
    { label: t("caseStudy.case1Metric3Label"), value: t("caseStudy.case1Metric3Value") },
  ];

  const case2Metrics = [
    { label: t("caseStudy.case2Metric1Label"), value: t("caseStudy.case2Metric1Value") },
    { label: t("caseStudy.case2Metric2Label"), value: t("caseStudy.case2Metric2Value") },
    { label: t("caseStudy.case2Metric3Label"), value: t("caseStudy.case2Metric3Value") },
  ];

  return (
    <section className="w-full bg-[#F5F2EB] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A]">
            <span className="inline-block h-px w-7.5 shrink-0 bg-[#F5C400]" />
            {t("caseStudy.badge")}
          </div>
          <h2
            className="text-[32px] font-extrabold leading-tight tracking-[-0.03em] text-[#1A1A1A] md:text-[42px]"
            style={fontStyle}
          >
            {t("caseStudy.title")}
          </h2>
        </div>

        {/* Row 1 — Text (wider) left · Chart right */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[11fr_9fr]">
          <TextCard
            number={t("caseStudy.case1Number")}
            client={t("caseStudy.case1Client")}
            service={t("caseStudy.case1Service")}
            problem={t("caseStudy.case1Problem")}
            metrics={case1Metrics}
          />
          <ChartCard label={t("caseStudy.case1ChartLabel")}>
            {resolvedChart1}
          </ChartCard>
        </div>

        {/* Row 2 — Chart left · Text (wider) right */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[9fr_11fr]">
          <ChartCard label={t("caseStudy.case2ChartLabel")}>
            {resolvedChart2}
          </ChartCard>
          <TextCard
            number={t("caseStudy.case2Number")}
            client={t("caseStudy.case2Client")}
            service={t("caseStudy.case2Service")}
            problem={t("caseStudy.case2Problem")}
            metrics={case2Metrics}
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

// ─── Bar Chart ────────────────────────────────────────────────────────────────

const BAR_DATA = [
  { month: "Mar", value: 1100 },
  { month: "Apr", value: 1280 },
  { month: "May", value: 1450 },
  { month: "Jun", value: 4200 },
  { month: "Jul", value: 8900 },
  { month: "Aug", value: 14600 },
];
const BAR_MAX = 15000;
const BAR_GRID = [0, 5000, 10000, 15000];

function BarChart({ legendBefore, legendAfter }: { legendBefore: string; legendAfter: string }) {
  const W = 440, H = 240;
  const pl = 48, pr = 16, pt = 20, pb = 40;
  const ch = H - pt - pb;
  const cw = W - pl - pr;
  const slotW = cw / BAR_DATA.length;
  const barW = Math.round(slotW * 0.52);

  return (
    <div className="flex flex-col gap-4">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-hidden="true">
        {/* Horizontal grid lines */}
        {BAR_GRID.map((v) => {
          const y = pt + ch - (v / BAR_MAX) * ch;
          return (
            <g key={v}>
              <line x1={pl} x2={W - pr} y1={y} y2={y} stroke="#EBEBEB" strokeWidth={1} />
              <text
                x={pl - 6}
                y={y + 4}
                textAnchor="end"
                fontSize={9}
                fill="#AAAAAA"
                fontFamily="inherit"
              >
                {v === 0 ? "0" : `${v / 1000}K`}
              </text>
            </g>
          );
        })}

        {/* Dashed divider between before / after */}
        <line
          x1={pl + 3 * slotW}
          x2={pl + 3 * slotW}
          y1={pt}
          y2={pt + ch}
          stroke="#CCCCCC"
          strokeWidth={1}
          strokeDasharray="4 3"
        />

        {/* Bars */}
        {BAR_DATA.map((d, i) => {
          const bh = Math.max(2, (d.value / BAR_MAX) * ch);
          const bx = pl + i * slotW + (slotW - barW) / 2;
          const by = pt + ch - bh;
          const isAfter = i >= 3;
          return (
            <g key={d.month}>
              <rect
                x={bx}
                y={by}
                width={barW}
                height={bh}
                fill={isAfter ? "#F5C400" : "#D8D8D8"}
                rx={3}
              />
              <text
                x={bx + barW / 2}
                y={H - pb + 16}
                textAnchor="middle"
                fontSize={9}
                fill="#9A9A9A"
                fontFamily="inherit"
              >
                {d.month}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex gap-5 px-1">
        {[
          { color: "#D8D8D8", label: legendBefore },
          { color: "#F5C400", label: legendAfter },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span
              className="inline-block h-2.5 w-2.5 shrink-0 rounded-sm"
              style={{ backgroundColor: l.color }}
            />
            <span className="text-[11px] text-[#9A9A9A]" style={fontStyle}>
              {l.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Line Chart ───────────────────────────────────────────────────────────────

const LINE_DATA = [
  { month: "Mar", value: 6800 },
  { month: "Apr", value: 10200 },
  { month: "May", value: 15600 },
  { month: "Jun", value: 22400 },
  { month: "Jul", value: 31800 },
  { month: "Aug", value: 43500 },
];
const LINE_MAX = 45000;
const LINE_GRID = [0, 15000, 30000, 45000];

function LineChart() {
  const W = 440, H = 240;
  const pl = 52, pr = 20, pt = 20, pb = 40;
  const ch = H - pt - pb;
  const cw = W - pl - pr;

  const pts = LINE_DATA.map((d, i) => ({
    x: pl + (i / (LINE_DATA.length - 1)) * cw,
    y: pt + ch - (d.value / LINE_MAX) * ch,
    month: d.month,
  }));

  const linePath = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(" ");

  const areaPath = `${linePath} L ${pts[pts.length - 1]!.x.toFixed(1)},${(pt + ch).toFixed(1)} L ${pts[0]!.x.toFixed(1)},${(pt + ch).toFixed(1)} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C400" stopOpacity={0.22} />
          <stop offset="100%" stopColor="#F5C400" stopOpacity={0} />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      {LINE_GRID.map((v) => {
        const y = pt + ch - (v / LINE_MAX) * ch;
        return (
          <g key={v}>
            <line x1={pl} x2={W - pr} y1={y} y2={y} stroke="#EBEBEB" strokeWidth={1} />
            <text
              x={pl - 6}
              y={y + 4}
              textAnchor="end"
              fontSize={9}
              fill="#AAAAAA"
              fontFamily="inherit"
            >
              {v === 0 ? "$0" : `$${v / 1000}K`}
            </text>
          </g>
        );
      })}

      {/* Area fill */}
      <path d={areaPath} fill="url(#areaGrad)" />

      {/* Line */}
      <path
        d={linePath}
        fill="none"
        stroke="#F5C400"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Data points + x-axis labels */}
      {pts.map((p) => (
        <g key={p.month}>
          <circle cx={p.x} cy={p.y} r={4} fill="#F5C400" stroke="white" strokeWidth={2} />
          <text
            x={p.x}
            y={H - pb + 16}
            textAnchor="middle"
            fontSize={9}
            fill="#9A9A9A"
            fontFamily="inherit"
          >
            {p.month}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ─── Card sub-components ──────────────────────────────────────────────────────

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-[#F9F7F4] px-4 py-3">
      <span
        className="text-[22px] font-extrabold tracking-tight text-[#1A1A1A]"
        style={fontStyle}
      >
        {value}
      </span>
      <span className="text-[11px] font-medium text-[#9A9A9A]" style={fontStyle}>
        {label}
      </span>
    </div>
  );
}

function TextCard({
  number,
  client,
  service,
  problem,
  metrics,
}: {
  number: string;
  client: string;
  service: string;
  problem: string;
  metrics: { label: string; value: string }[];
}) {
  return (
    <div className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
      {/* Top */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span
            className="text-[11px] font-bold uppercase tracking-widest text-[#9A9A9A]"
            style={fontStyle}
          >
            {client}
          </span>
          <span
            className="text-[38px] font-extrabold leading-none text-[#EBEBEB]"
            style={fontStyle}
          >
            {number}
          </span>
        </div>
        <span
          className="inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold"
          style={{
            color: "#A07800",
            backgroundColor: "rgba(245,196,0,0.12)",
            ...fontStyle,
          }}
        >
          {service}
        </span>
        <p className="text-[14px] leading-[1.8] text-[#6B6B6B]" style={fontStyle}>
          {problem}
        </p>
      </div>

      {/* Metrics */}
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
      <p
        className="text-[11px] font-semibold uppercase tracking-widest text-[#9A9A9A]"
        style={fontStyle}
      >
        {label}
      </p>
      {children}
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

interface Props {
  namespace: string;
}

export default function CaseStudySection({ namespace }: Props) {
  const t = useTranslations(namespace);

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

        {/* Row 1 — Text (wider) left · Bar chart right */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[11fr_9fr]">
          <TextCard
            number={t("caseStudy.case1Number")}
            client={t("caseStudy.case1Client")}
            service={t("caseStudy.case1Service")}
            problem={t("caseStudy.case1Problem")}
            metrics={case1Metrics}
          />
          <ChartCard label={t("caseStudy.case1ChartLabel")}>
            <BarChart
              legendBefore={t("caseStudy.legendBefore")}
              legendAfter={t("caseStudy.legendAfter")}
            />
          </ChartCard>
        </div>

        {/* Row 2 — Line chart left · Text (wider) right */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[9fr_11fr]">
          <ChartCard label={t("caseStudy.case2ChartLabel")}>
            <LineChart />
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

"use client";

import { useTranslations } from "next-intl";

const fontStyle = { fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif" };

const DATA = [
  { month: "Mar", value: 1100 },
  { month: "Apr", value: 1280 },
  { month: "May", value: 1450 },
  { month: "Jun", value: 4200 },
  { month: "Jul", value: 8900 },
  { month: "Aug", value: 14600 },
];
const MAX = 15000;
const GRID = [0, 5000, 10000, 15000];

interface Props {
  namespace?: string;
}

export default function BarChart({ namespace = "serviceSocial" }: Props) {
  const t = useTranslations(namespace);
  const legendBefore = t("caseStudy.legendBefore");
  const legendAfter = t("caseStudy.legendAfter");

  const W = 440, H = 240;
  const pl = 48, pr = 16, pt = 20, pb = 40;
  const ch = H - pt - pb;
  const cw = W - pl - pr;
  const slotW = cw / DATA.length;
  const barW = Math.round(slotW * 0.52);

  return (
    <div className="flex flex-col gap-4">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-hidden="true">
        {GRID.map((v) => {
          const y = pt + ch - (v / MAX) * ch;
          return (
            <g key={v}>
              <line x1={pl} x2={W - pr} y1={y} y2={y} stroke="#EBEBEB" strokeWidth={1} />
              <text x={pl - 6} y={y + 4} textAnchor="end" fontSize={9} fill="#AAAAAA" fontFamily="inherit">
                {v === 0 ? "0" : `${v / 1000}K`}
              </text>
            </g>
          );
        })}
        <line
          x1={pl + 3 * slotW} x2={pl + 3 * slotW}
          y1={pt} y2={pt + ch}
          stroke="#CCCCCC" strokeWidth={1} strokeDasharray="4 3"
        />
        {DATA.map((d, i) => {
          const bh = Math.max(2, (d.value / MAX) * ch);
          const bx = pl + i * slotW + (slotW - barW) / 2;
          const by = pt + ch - bh;
          return (
            <g key={d.month}>
              <rect x={bx} y={by} width={barW} height={bh} fill={i >= 3 ? "#F5C400" : "#D8D8D8"} rx={3} />
              <text x={bx + barW / 2} y={H - pb + 16} textAnchor="middle" fontSize={9} fill="#9A9A9A" fontFamily="inherit">
                {d.month}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="flex gap-5 px-1">
        {[{ color: "#D8D8D8", label: legendBefore }, { color: "#F5C400", label: legendAfter }].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-sm" style={{ backgroundColor: l.color }} />
            <span className="text-[11px] text-[#9A9A9A]" style={fontStyle}>{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

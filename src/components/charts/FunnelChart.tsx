"use client";

const fontStyle = { fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif" };

const STAGES = [
  { label: "Impressions",  value: "280,000", pct: null,   topW: 300, botW: 248 },
  { label: "Clicks",       value: "8,400",   pct: "3.0%", topW: 248, botW: 196 },
  { label: "Page Views",   value: "7,200",   pct: "85.7%",topW: 196, botW: 144 },
  { label: "Enquiries",    value: "1,080",   pct: "15.0%",topW: 144, botW: 96  },
  { label: "Conversions",  value: "486",     pct: "45.0%",topW: 96,  botW: 72  },
];

const STAGE_H = 36;
const GAP = 5;
const CX = 220;
const COLORS = ["#F5C400", "#D4AB00", "#B89300", "#9C7C00", "#7A6200"];

export default function FunnelChart() {
  const totalH = STAGES.length * STAGE_H + (STAGES.length - 1) * GAP;
  const W = 440;
  const H = totalH + 20; // padding top

  return (
    <div className="flex h-full flex-col justify-center">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-hidden="true">
        {STAGES.map((stage, i) => {
          const y = 10 + i * (STAGE_H + GAP);
          const x1 = CX - stage.topW / 2;
          const x2 = CX + stage.topW / 2;
          const x3 = CX + stage.botW / 2;
          const x4 = CX - stage.botW / 2;
          const points = `${x1},${y} ${x2},${y} ${x3},${y + STAGE_H} ${x4},${y + STAGE_H}`;
          const labelY = y + STAGE_H / 2 + 4;
          const opacity = 1 - i * 0.12;

          return (
            <g key={stage.label}>
              <polygon points={points} fill={COLORS[i]} opacity={opacity} />
              {/* Stage label */}
              <text
                x={CX}
                y={labelY}
                textAnchor="middle"
                fontSize={10}
                fontWeight="600"
                fill={i === 0 ? "#1A1A1A" : "white"}
                fontFamily="inherit"
              >
                {stage.label}
              </text>
              {/* Value on left */}
              <text
                x={x1 - 8}
                y={labelY}
                textAnchor="end"
                fontSize={10}
                fontWeight="700"
                fill="#1A1A1A"
                fontFamily="inherit"
              >
                {stage.value}
              </text>
              {/* Conversion rate on right */}
              {stage.pct && (
                <text
                  x={x2 + 8}
                  y={labelY}
                  textAnchor="start"
                  fontSize={10}
                  fill="#9A9A9A"
                  fontFamily="inherit"
                >
                  {stage.pct}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* ROAS callout */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-bold"
          style={{ backgroundColor: "rgba(245,196,0,0.12)", color: "#A07800", ...fontStyle }}
        >
          Final ROAS: 5.8×
        </span>
      </div>
    </div>
  );
}

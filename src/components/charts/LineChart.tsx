"use client";

const DATA = [
  { month: "Mar", value: 6800 },
  { month: "Apr", value: 10200 },
  { month: "May", value: 15600 },
  { month: "Jun", value: 22400 },
  { month: "Jul", value: 31800 },
  { month: "Aug", value: 43500 },
];
const MAX = 45000;
const GRID = [0, 15000, 30000, 45000];

export default function LineChart() {
  const W = 440, H = 240;
  const pl = 52, pr = 20, pt = 20, pb = 40;
  const ch = H - pt - pb;
  const cw = W - pl - pr;

  const pts = DATA.map((d, i) => ({
    x: pl + (i / (DATA.length - 1)) * cw,
    y: pt + ch - (d.value / MAX) * ch,
    month: d.month,
  }));

  const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L ${pts.at(-1)!.x.toFixed(1)},${(pt + ch).toFixed(1)} L ${pts[0]!.x.toFixed(1)},${(pt + ch).toFixed(1)} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="lcAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C400" stopOpacity={0.22} />
          <stop offset="100%" stopColor="#F5C400" stopOpacity={0} />
        </linearGradient>
      </defs>
      {GRID.map((v) => {
        const y = pt + ch - (v / MAX) * ch;
        return (
          <g key={v}>
            <line x1={pl} x2={W - pr} y1={y} y2={y} stroke="#EBEBEB" strokeWidth={1} />
            <text x={pl - 6} y={y + 4} textAnchor="end" fontSize={9} fill="#AAAAAA" fontFamily="inherit">
              {v === 0 ? "$0" : `$${v / 1000}K`}
            </text>
          </g>
        );
      })}
      <path d={areaPath} fill="url(#lcAreaGrad)" />
      <path d={linePath} fill="none" stroke="#F5C400" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p) => (
        <g key={p.month}>
          <circle cx={p.x} cy={p.y} r={4} fill="#F5C400" stroke="white" strokeWidth={2} />
          <text x={p.x} y={H - pb + 16} textAnchor="middle" fontSize={9} fill="#9A9A9A" fontFamily="inherit">
            {p.month}
          </text>
        </g>
      ))}
    </svg>
  );
}

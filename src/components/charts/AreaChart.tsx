"use client";

// 12-month smooth area chart — used for revenue / traffic growth pages
const DATA = [4200, 5100, 6200, 7800, 9400, 11200, 13500, 16100, 19200, 22800, 26100, 29800];
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const MAX = 32000;
const GRID = [0, 10000, 20000, 30000];

export default function AreaChart() {
  const W = 440, H = 240;
  const pl = 52, pr = 16, pt = 20, pb = 40;
  const ch = H - pt - pb;
  const cw = W - pl - pr;

  const pts = DATA.map((v, i) => ({
    x: pl + (i / (DATA.length - 1)) * cw,
    y: pt + ch - (v / MAX) * ch,
  }));

  // Smooth cubic bezier: horizontal control points for monotone growth
  const curvePath = pts.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x.toFixed(1)},${p.y.toFixed(1)}`;
    const prev = pts[i - 1]!;
    const cpx = (p.x - prev.x) * 0.5;
    return `${acc} C ${(prev.x + cpx).toFixed(1)},${prev.y.toFixed(1)} ${(p.x - cpx).toFixed(1)},${p.y.toFixed(1)} ${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  }, "");

  const areaPath = `${curvePath} L ${pts.at(-1)!.x.toFixed(1)},${(pt + ch).toFixed(1)} L ${pts[0]!.x.toFixed(1)},${(pt + ch).toFixed(1)} Z`;

  // Show every other month label to avoid crowding
  const labelMonths = MONTHS.filter((_, i) => i % 2 === 0);
  const labelPts = pts.filter((_, i) => i % 2 === 0);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="acAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C400" stopOpacity={0.3} />
          <stop offset="100%" stopColor="#F5C400" stopOpacity={0.02} />
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
      <path d={areaPath} fill="url(#acAreaGrad)" />
      <path d={curvePath} fill="none" stroke="#F5C400" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      {/* Only show dots at start and end */}
      <circle cx={pts[0]!.x} cy={pts[0]!.y} r={4} fill="#D8D8D8" stroke="white" strokeWidth={2} />
      <circle cx={pts.at(-1)!.x} cy={pts.at(-1)!.y} r={5} fill="#F5C400" stroke="white" strokeWidth={2} />
      {/* Month labels every other month */}
      {labelPts.map((p, i) => (
        <text key={i} x={p.x} y={H - pb + 16} textAnchor="middle" fontSize={9} fill="#AAAAAA" fontFamily="inherit">
          {labelMonths[i]}
        </text>
      ))}
    </svg>
  );
}

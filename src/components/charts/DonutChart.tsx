"use client";

const fontStyle = { fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif" };

const SEGMENTS = [
  { label: "Instagram", value: 45, color: "#F5C400" },
  { label: "TikTok",    value: 30, color: "#3D3D3D" },
  { label: "YouTube",   value: 15, color: "#6B6B6B" },
  { label: "Facebook",  value: 10, color: "#A0A0A0" },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(cx: number, cy: number, r: number, ir: number, start: number, end: number) {
  const s  = polarToCartesian(cx, cy, r, end);
  const e  = polarToCartesian(cx, cy, r, start);
  const is = polarToCartesian(cx, cy, ir, end);
  const ie = polarToCartesian(cx, cy, ir, start);
  const large = end - start <= 180 ? 0 : 1;
  return [
    `M ${s.x.toFixed(2)} ${s.y.toFixed(2)}`,
    `A ${r} ${r} 0 ${large} 0 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`,
    `L ${ie.x.toFixed(2)} ${ie.y.toFixed(2)}`,
    `A ${ir} ${ir} 0 ${large} 1 ${is.x.toFixed(2)} ${is.y.toFixed(2)}`,
    "Z",
  ].join(" ");
}

export default function DonutChart() {
  const cx = 100, cy = 100, R = 78, IR = 46;
  const total = SEGMENTS.reduce((s, seg) => s + seg.value, 0);

  let cursor = 0;
  const paths = SEGMENTS.map((seg) => {
    const start = (cursor / total) * 360;
    cursor += seg.value;
    const end = (cursor / total) * 360;
    return { ...seg, path: arcPath(cx, cy, R, IR, start, end) };
  });

  return (
    <div className="flex h-full items-center gap-6">
      {/* Donut */}
      <svg viewBox="0 0 200 200" className="w-[160px] shrink-0 h-auto" aria-hidden="true">
        {paths.map((seg) => (
          <path key={seg.label} d={seg.path} fill={seg.color} />
        ))}
        {/* Centre label */}
        <text x={cx} y={cy - 6}  textAnchor="middle" fontSize={11} fill="#9A9A9A" fontFamily="inherit">Video</text>
        <text x={cx} y={cy + 8}  textAnchor="middle" fontSize={11} fill="#9A9A9A" fontFamily="inherit">Views</text>
        <text x={cx} y={cy + 22} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1A1A1A" fontFamily="inherit">380K</text>
      </svg>

      {/* Legend */}
      <div className="flex flex-col gap-3">
        {SEGMENTS.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ backgroundColor: seg.color }} />
            <span className="text-[12px] text-[#4A4A4A]" style={fontStyle}>
              {seg.label}
            </span>
            <span className="ml-auto text-[12px] font-bold text-[#1A1A1A]" style={fontStyle}>
              {seg.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

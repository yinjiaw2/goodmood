"use client";

const fontStyle = { fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif" };

export interface CompareRow {
  label: string;
  before: string;
  after: string;
}

interface Props {
  rows: CompareRow[];
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterCard({
  rows,
  beforeLabel = "Before",
  afterLabel = "After",
}: Props) {
  return (
    <div className="flex h-full flex-col justify-center gap-0">
      {/* Column headers */}
      <div className="mb-4 grid grid-cols-[1fr_32px_1fr] items-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#BBBBBB]" style={fontStyle}>
          {beforeLabel}
        </span>
        <span />
        <span className="text-right text-[11px] font-bold uppercase tracking-widest" style={{ color: "#F5C400", ...fontStyle }}>
          {afterLabel}
        </span>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={row.label}
          className="grid grid-cols-[1fr_32px_1fr] items-center border-b border-black/6 py-4 last:border-0"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          {/* Before value */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[22px] font-extrabold leading-none text-[#CCCCCC]" style={fontStyle}>
              {row.before}
            </span>
          </div>

          {/* Arrow + label */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="text-[9px] font-semibold uppercase tracking-widest text-[#CCCCCC] leading-none text-center"
              style={fontStyle}
            >
              {row.label}
            </span>
            <span className="text-base leading-none" style={{ color: "#F5C400" }}>→</span>
          </div>

          {/* After value */}
          <div className="flex flex-col items-end gap-0.5">
            <span className="text-[22px] font-extrabold leading-none text-[#1A1A1A]" style={fontStyle}>
              {row.after}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

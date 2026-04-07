import content from "@/content/successCases.json";

const cases = content.cases;

const font = "var(--font-geist-sans), Arial, Helvetica, sans-serif";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i < count ? "#FB8C00" : "#e5e7eb"}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.951 2.878c-.785.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ item }: { item: (typeof cases)[0] }) {
  const initial = item.name.charAt(0);
  return (
    <div
      className="shrink-0 w-72 rounded-2xl p-6 bg-white border border-gray-100 shadow-sm mx-3 flex flex-col gap-3"
      style={{ fontFamily: font }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
          style={{ backgroundColor: item.avatarColor }}
        >
          {initial}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{item.name}</p>
          <StarRating count={item.stars} />
        </div>
      </div>
      <p className="text-sm font-bold text-gray-900">{item.headline}</p>
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-4">
        {item.review}
      </p>
    </div>
  );
}

const mid = Math.ceil(cases.length / 2);
const row1 = cases.slice(0, mid);
const row2 = cases.slice(mid);

export default function SuccessCases() {
  return (
    <section id="cases" className="w-full py-24 bg-white scroll-mt-16">
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 w-fit">
            <span
              className="text-xs font-semibold tracking-widest uppercase text-gray-500"
              style={{ fontFamily: font }}
            >
              {content.sectionLabel}
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            style={{ fontFamily: font, letterSpacing: "-0.03em" }}
          >
            {content.sectionTitle}
          </h2>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div
        className="overflow-hidden mb-4"
        style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}
      >
        <div
          className="flex w-max"
          style={{ animation: "marquee-left 55s linear infinite" }}
        >
          {[...row1, ...row1].map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div
        className="overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}
      >
        <div
          className="flex w-max"
          style={{ animation: "marquee-right 55s linear infinite" }}
        >
          {[...row2, ...row2].map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

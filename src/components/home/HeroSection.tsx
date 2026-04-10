import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("home");

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[80vh] w-full bg-[#0D1B2A]"
    >
      {/* Main two-column layout */}
      <div className="relative z-10 flex flex-row w-full max-w-7xl px-8 py-16 gap-12">
        {/* Left column */}
        <div className="flex flex-col justify-start w-1/2 gap-8">
          {/* Title box */}
          <div className="bg-gray-200 rounded shadow flex items-center justify-center h-44 w-3/4 mx-auto">
            <span className="text-5xl font-normal text-black">
              {t("title")}
            </span>
          </div>
          {/* Wide box (subtitle/description) */}
          <div className="bg-gray-200 rounded shadow h-56 w-full flex items-center px-8">
            <span className="text-2xl text-black">{t("slogan")}</span>
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col items-center justify-center w-1/2">
          <div className="bg-gray-200 rounded shadow flex flex-col items-center justify-center w-full h-[420px] relative">
            <span className="text-5xl text-black mb-8">Form</span>
            {/* Button at bottom right */}
            <div className="absolute bottom-8 right-8">
              <button className="bg-gray-600 rounded-full w-48 h-16 text-white text-xl font-semibold shadow">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

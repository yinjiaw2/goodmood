import { GraduationCap, FileText, Briefcase, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  FileText,
  Briefcase,
  Handshake,
};

const serviceKeys = [
  { key: "0", icon: "GraduationCap" },
  { key: "1", icon: "FileText" },
  { key: "2", icon: "Briefcase" },
  { key: "3", icon: "Handshake" },
] as const;

export default function CoreServices() {
  const t = useTranslations("coreServices");

  return (
    <section id="core-services" className="w-full min-h-[80vh] flex flex-col justify-center bg-white py-20 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col flex-1 justify-center">
        <div className="mb-12">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#FB8C00" }}
          >
            {t("sectionLabel")}
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
            style={{
              fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            {t("sectionTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceKeys.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.key}
                className="group flex flex-col rounded-2xl p-8 border border-gray-200 bg-gray-50 hover:bg-white hover:border-orange-400/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                <Icon size={36} className="mb-6 text-orange-400" />
                <h3
                  className="text-xl font-bold mb-4 text-gray-900 group-hover:text-orange-500 transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
                  }}
                >
                  {t(`services.${service.key}.title`)}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed flex-1"
                  style={{
                    fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
                  }}
                >
                  {t(`services.${service.key}.description`)}
                </p>
                <div className="mt-6 w-8 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

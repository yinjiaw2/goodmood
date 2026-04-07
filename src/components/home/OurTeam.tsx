import { Search, Map, Users, ClipboardList } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import content from "@/content/ourTeam.json";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Map,
  Users,
  ClipboardList,
};

export default function OurTeam() {
  return (
    <section id="our-team" className="w-full min-h-[80vh] flex flex-col justify-center bg-gray-50 py-20 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#FB8C00" }}
          >
            {content.sectionLabel}
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
            style={{
              fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            {content.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.members.map((member) => {
            const Icon = iconMap[member.icon];
            return (
              <div
                key={member.role}
                className="flex gap-6 rounded-2xl p-8 bg-white border border-gray-200 hover:border-orange-400/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#FFF3E0" }}
                >
                  <Icon size={24} style={{ color: "#FB8C00" }} />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-2"
                    style={{
                      fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
                    }}
                  >
                    {member.role}
                  </h3>
                  <p
                    className="text-sm text-gray-500 leading-relaxed"
                    style={{
                      fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
                    }}
                  >
                    {member.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

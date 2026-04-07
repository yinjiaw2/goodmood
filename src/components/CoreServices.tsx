import { GraduationCap, FileText, Briefcase, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: "培训中心",
    description:
      "开设行业实战课、软技能提升及本地职场文化融入课程，让您的能力与澳洲企业需求无缝对接。",
    Icon: GraduationCap,
  },
  {
    title: "简历美化",
    description:
      "由本地行业导师与 HR 专家联合优化简历，突出您的核心竞争力，通过关键词筛选，大幅提升面试邀约率。",
    Icon: FileText,
  },
  {
    title: "工作经验累积",
    description:
      "提供本地实习、项目实践及志愿者机会，帮您快速填补简历中的经验空白，建立真实可查的工作履历。",
    Icon: Briefcase,
  },
  {
    title: "雇主匹配",
    description:
      "基于您的职业目标与技能画像，精准推荐合作企业职位，并享有优先内推通道，让好工作主动找到您。",
    Icon: Handshake,
  },
];

export default function CoreServices() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col flex-1 justify-center">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#FB8C00" }}>
            我们能为您做什么
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
            style={{ fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif", letterSpacing: "-0.02em" }}
          >
            核心服务
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl p-8 border border-gray-200 bg-gray-50 hover:bg-white hover:border-orange-400/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              <service.Icon size={36} className="mb-6 text-orange-400" />
              <h3
                className="text-xl font-bold mb-4 text-gray-900 group-hover:text-orange-500 transition-colors duration-200"
                style={{ fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm text-gray-500 leading-relaxed flex-1"
                style={{ fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif" }}
              >
                {service.description}
              </p>
              <div className="mt-6 w-8 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Search, Map, Users, ClipboardList } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const team: { role: string; description: string; Icon: LucideIcon }[] = [
  {
    role: "高级猎聘顾问",
    description:
      "专注于为求职者对接真实岗位机会，尤其擅长中高端职位与紧缺岗位的精准推荐。我们不海投、不盲推，而是根据您的背景与目标，主动联系雇主、安排面试、跟进反馈，直到您拿到 offer。",
    Icon: Search,
  },
  {
    role: "职业规划师",
    description:
      "为您提供一对一的职业诊断与路径规划。我们会帮您分析：以您目前的情况，在澳洲职场最适合走哪条路、先补什么、后做什么。不空谈理论，只给可执行的方案，让您每一步都走得有方向。",
    Icon: Map,
  },
  {
    role: "专业讲师 / 资深员工团队",
    description:
      "由来自金融、IT、会计、护理、工程等行业的实战派导师组成。他们不是专职讲师，而是真正在澳洲企业工作过的资深员工。负责技能培训、项目带教、面试模拟和职场文化讲解，确保您学到的东西用完就能用。",
    Icon: Users,
  },
  {
    role: "资深 HR 经理",
    description:
      "站在雇主视角帮您优化简历、准备面试、理解招聘逻辑。我们知道澳洲 HR 在简历里看什么、面试中问什么、背调时查什么。帮您把国内或在校经历，翻译成澳洲雇主愿意看的语言，提升每一次投递的成功率。",
    Icon: ClipboardList,
  },
];

export default function OurTeam() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#FB8C00" }}
          >
            专业团队
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
            style={{
              fontFamily:
                "var(--font-geist-sans), Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            认识我们的团队
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.role}
              className="flex gap-6 rounded-2xl p-8 bg-white border border-gray-200 hover:border-orange-400/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#FFF3E0" }}
              >
                <member.Icon size={24} style={{ color: "#FB8C00" }} />
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{
                    fontFamily:
                      "var(--font-geist-sans), Arial, Helvetica, sans-serif",
                  }}
                >
                  {member.role}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  style={{
                    fontFamily:
                      "var(--font-geist-sans), Arial, Helvetica, sans-serif",
                  }}
                >
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

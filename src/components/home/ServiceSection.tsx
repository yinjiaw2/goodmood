"use client";

import Link from "next/link";

const cards = [
  {
    key: "social",
    icon: "📱",
    title: "Social Media Marketing",
    desc: "账号策划到数据优化，构建可持续增长的社媒矩阵，让每一条内容都在为品牌打工。",
    tags: ["账号定位", "内容制作", "社群运营"],
  },
  {
    key: "ecommerce",
    icon: "🛒",
    title: "Ecommerce",
    desc: "从落地页设计到 SEO 优化，打通完整电商转化漏斗，让流量变成真实收入。",
    tags: ["网站设计", "SEO优化", "数据分析"],
  },
  {
    key: "creative",
    icon: "🎨",
    title: "Creative",
    desc: "品牌视觉到视频制作，用创意驱动情感连接，让你的品牌在竞争中不可忽视。",
    tags: ["品牌设计", "视频制作", "广告素材"],
  },
  {
    key: "email",
    icon: "✉️",
    title: "Email Marketing",
    desc: "自有渠道，最高 ROI。从设计到文案到自动化流程，把邮件列表变成持续营收引擎。",
    tags: ["图形设计", "文案撰写", "自动化"],
  },
  {
    key: "web",
    icon: "💻",
    title: "Website Design",
    desc: "以转化为核心的网站设计。每一个按钮位置、每一行文案，都经过转化率逻辑的检验。",
    tags: ["Landing Page", "转化优化", "UX设计"],
  },
  {
    key: "ads",
    icon: "📊",
    title: "Paid Ads",
    desc: "Meta、小红书精准投放，用你的预算获取最高质量客户。数据说话，效果为王。",
    tags: ["Meta Ads", "小红书", "受众定向"],
  },
];

export default function ServiceSection() {
  return (
    <section className="w-full bg-[#1A1A1A] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-12">
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-[#F5C400]">
            我们的服务
          </div>

          <h2 className="mb-4 text-[34px] font-extrabold leading-[1.1] tracking-[-1px] text-white md:text-[46px]">
            全渠道增长解决方案
          </h2>

          <p className="max-w-[520px] text-[16px] leading-[1.6] text-white/50">
            悬停查看详情 · 点击了解更多
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.key}
              href={`/services/${card.key}`}
              className="group relative block min-h-[320px] overflow-hidden bg-[#1A1A1A] px-9 py-10"
              style={{ textDecoration: "none" }}
            >
              <div className="absolute inset-0 z-0 origin-bottom scale-y-0 bg-[#F5C400] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-y-100" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[rgba(245,196,0,0.12)] text-[20px] transition-colors duration-300 group-hover:bg-black/10">
                  {card.icon}
                </div>

                <h3 className="mb-3 text-[20px] font-bold tracking-[-0.3px] text-white transition-colors duration-300 group-hover:text-black">
                  {card.title}
                </h3>

                <p className="mb-5 text-[14.5px] leading-[1.65] text-white/50 transition-colors duration-300 group-hover:text-black/75">
                  {card.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pr-8">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-white/12 px-[10px] py-[4px] text-[11px] font-semibold leading-none whitespace-nowrap text-white/45 transition-all duration-300 group-hover:border-black/20 group-hover:text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-0 right-0 text-[20px] text-white/30 transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-black">
                  ↗
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
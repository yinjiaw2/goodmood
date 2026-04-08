"use client";

import { useTranslations } from "next-intl";

export default function NewsPage() {
  const t = useTranslations("news");

  return (
    <main className="pt-24 px-6">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p className="mt-4 text-lg text-gray-600">{t("subtitle")}</p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">{t("featured")}</h2>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">{t("latest")}</h2>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">{t("subscribe")}</h2>
      </section>
    </main>
  );
}
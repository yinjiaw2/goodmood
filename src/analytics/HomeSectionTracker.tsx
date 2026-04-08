"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";

const trackedSections = [
  { id: "hero", name: "hero" },
  { id: "numbers", name: "numbers" },
  { id: "core-services", name: "core_services" },
  { id: "our-team", name: "our_team" },
  { id: "process", name: "service_process" },
  { id: "cases", name: "success_cases" },
  { id: "faq", name: "faq" },
  { id: "contact", name: "contact" },
] as const;

export default function HomeSectionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const seenSections = new Set<string>();
    const sections = trackedSections
      .map((section) => {
        const element = document.getElementById(section.id);
        if (!element) return null;

        return { ...section, element };
      })
      .filter(
        (
          section,
        ): section is (typeof trackedSections)[number] & {
          element: HTMLElement;
        } => section !== null,
      );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const matchedSection = sections.find(
            (section) => section.element === entry.target,
          );

          if (!matchedSection || seenSections.has(matchedSection.name)) return;

          seenSections.add(matchedSection.name);
          sendGAEvent("event", "section_view", {
            section_id: matchedSection.id,
            section_name: matchedSection.name,
            page_type: "home",
          });
        });
      },
      {
        threshold: 0.45,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section.element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

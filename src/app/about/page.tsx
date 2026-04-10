import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";

export const metadata: Metadata = {
  title: "about page",
  description: "about page of siddeley talent link",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
    </>
  );
}

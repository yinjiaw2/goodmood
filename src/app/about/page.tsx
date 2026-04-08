import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutMap from "@/components/about/AboutMap";

export const metadata: Metadata = {
  title: "about page",
  description: "about page of siddeley talent link",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutMap />
    </>
  );
}

import { Hero } from "@/components/marketing/home/hero";
import { Problem } from "@/components/marketing/home/problem";
import { WhatWeDo } from "@/components/marketing/home/what-we-do";
import { HowItWorks } from "@/components/marketing/home/how-it-works";
import { Features } from "@/components/marketing/home/features";
import { Benefits } from "@/components/marketing/home/benefits";
import { WhoItsFor } from "@/components/marketing/home/who-its-for";
import { ClosingCTA } from "@/components/marketing/home/closing-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <WhatWeDo />
      <HowItWorks />
      <Features />
      <Benefits />
      <WhoItsFor />
      <ClosingCTA />
    </>
  );
}

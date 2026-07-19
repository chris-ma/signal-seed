import { Hero } from "@/components/marketing/home/hero";
import { Problem } from "@/components/marketing/home/problem";
import { WhatWeDo } from "@/components/marketing/home/what-we-do";
import { AreasWeCover } from "@/components/marketing/home/areas-we-cover";
import { FeaturesBenefits } from "@/components/marketing/home/features-benefits";
import { HowItWorks } from "@/components/marketing/home/how-it-works";
import { WhoItsFor } from "@/components/marketing/home/who-its-for";
import { ClosingCTA } from "@/components/marketing/home/closing-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <WhatWeDo />
      <AreasWeCover />
      <FeaturesBenefits />
      <HowItWorks />
      <WhoItsFor />
      <ClosingCTA />
    </>
  );
}

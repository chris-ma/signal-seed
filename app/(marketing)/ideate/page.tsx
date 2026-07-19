import type { Metadata } from "next";

import { ComingSoon } from "@/components/marketing/coming-soon";
import { LIFECYCLE_STAGES } from "@/lib/lifecycle-data";

export const metadata: Metadata = { title: "Ideate — Signal Seed" };

const stage = LIFECYCLE_STAGES.find((s) => s.slug === "ideate")!;

export default function IdeatePage() {
  return (
    <ComingSoon
      eyebrow="Ideate"
      title="Ideate is still germinating."
      description={`${stage.description} A dedicated Ideate workspace is on its way — for now, the Solution Ideation frameworks already cover HMW questions, brainstorming, and SCAMPER.`}
      themes={["HMW prompts", "Structured brainstorming", "SCAMPER"]}
      ctaHref="/frameworks#solution-ideation"
      ctaLabel="Explore Solution Ideation frameworks"
    />
  );
}

import type { Metadata } from "next";

import { ComingSoon } from "@/components/marketing/coming-soon";
import { LIFECYCLE_STAGES } from "@/lib/lifecycle-data";

export const metadata: Metadata = { title: "Research — Signal Seed" };

const stage = LIFECYCLE_STAGES.find((s) => s.slug === "research")!;

export default function ResearchPage() {
  return (
    <ComingSoon
      eyebrow="Research"
      title="Research is coming into focus."
      description={`${stage.description} A dedicated Research workspace is on its way — for now, the Problem Definition frameworks already cover pattern-finding from qualitative data.`}
      themes={["Interview synthesis", "Pattern finding", "Affinity mapping"]}
      ctaHref="/frameworks#problem-definition"
      ctaLabel="Explore Problem Definition frameworks"
    />
  );
}

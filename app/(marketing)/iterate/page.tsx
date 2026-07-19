import type { Metadata } from "next";

import { ComingSoon } from "@/components/marketing/coming-soon";
import { LIFECYCLE_STAGES } from "@/lib/lifecycle-data";

export const metadata: Metadata = { title: "Iterate — Signal Seed" };

const stage = LIFECYCLE_STAGES.find((s) => s.slug === "iterate")!;

export default function IteratePage() {
  return (
    <ComingSoon
      eyebrow="Iterate"
      title="Iterate is still growing."
      description={`${stage.description} A dedicated Iterate workspace is on its way — for now, the Decision & Next Steps frameworks already cover turning evidence into a clear go/no-go call.`}
      themes={["Evidence wall", "Decision board", "Compounding learning"]}
      ctaHref="/frameworks#decision-next-steps"
      ctaLabel="Explore Decision & Next Steps frameworks"
    />
  );
}

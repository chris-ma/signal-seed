import type { Metadata } from "next";

import { ComingSoon } from "@/components/marketing/coming-soon";
import { LIFECYCLE_STAGES } from "@/lib/lifecycle-data";

export const metadata: Metadata = { title: "Discover — Signal Seed" };

const stage = LIFECYCLE_STAGES.find((s) => s.slug === "discover")!;

export default function DiscoverPage() {
  return (
    <ComingSoon
      eyebrow="Discover"
      title="Discover is putting down roots."
      description={`${stage.description} A dedicated Discover workspace is on its way — for now, the Problem Definition frameworks already cover this stage in depth.`}
      themes={["Signal capture", "Problem framing", "Root-cause tools"]}
      ctaHref="/frameworks#problem-definition"
      ctaLabel="Explore Problem Definition frameworks"
    />
  );
}

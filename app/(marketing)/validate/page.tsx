import type { Metadata } from "next";

import { ComingSoon } from "@/components/marketing/coming-soon";
import { LIFECYCLE_STAGES } from "@/lib/lifecycle-data";

export const metadata: Metadata = { title: "Validate — Signal Seed" };

const stage = LIFECYCLE_STAGES.find((s) => s.slug === "validate")!;

export default function ValidatePage() {
  return (
    <ComingSoon
      eyebrow="Validate"
      title="Validate is taking shape."
      description={`${stage.description} A dedicated Validate workspace is on its way — for now, the Validation Design frameworks already cover assumptions mapping and lean experiments.`}
      themes={["Assumptions mapping", "Experiment canvas", "Mom Test interviews"]}
      ctaHref="/frameworks#validation-design"
      ctaLabel="Explore Validation Design frameworks"
    />
  );
}

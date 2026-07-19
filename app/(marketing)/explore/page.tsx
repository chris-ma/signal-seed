import type { Metadata } from "next";

import { ComingSoon } from "@/components/marketing/coming-soon";

export const metadata: Metadata = { title: "Explore — Signal Seed" };

export default function ExplorePage() {
  return (
    <ComingSoon
      eyebrow="Explore"
      title="Explore is taking root."
      description="A guided library of case studies and innovation stories is germinating. In the meantime, the Frameworks library is fully open for practice."
      themes={["Case studies", "Field notes", "Practitioner interviews"]}
    />
  );
}

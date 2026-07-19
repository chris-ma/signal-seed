import type { Metadata } from "next";

import { ComingSoon } from "@/components/marketing/coming-soon";

export const metadata: Metadata = { title: "Resources — SeedStudio" };

export default function ResourcesPage() {
  return (
    <ComingSoon
      eyebrow="Resources"
      title="Resources are still growing."
      description="Templates, guides, and reading lists are being prepared. Start with the Frameworks library — it's ready for you today."
      themes={["Templates", "Reading list", "Glossary"]}
    />
  );
}

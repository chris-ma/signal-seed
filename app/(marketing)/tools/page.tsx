import type { Metadata } from "next";

import { ComingSoon } from "@/components/marketing/coming-soon";

export const metadata: Metadata = { title: "Tools — SeedStudio" };

export default function ToolsPage() {
  return (
    <ComingSoon
      eyebrow="Tools"
      title="Tools are being cultivated."
      description="Interactive, AI-assisted versions of every framework are on the way. For now, each framework page includes everything you need to run it by hand."
      themes={["AI co-pilot", "Guided canvases", "Evidence tracking"]}
    />
  );
}

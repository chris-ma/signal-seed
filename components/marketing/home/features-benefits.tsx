import { Section } from "@/components/ui/section";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import type { IconName } from "@/lib/frameworks-data";

const FEATURES: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "ai",
    title: "AI-guided frameworks",
    description:
      "An AI collaborator walks you through the right framework at the right moment — never replacing your judgment, only sharpening it.",
  },
  {
    icon: "validate",
    title: "Structured validation",
    description:
      "Turn assumptions into experiments with clear thresholds, so “I think” becomes “we tested.”",
  },
  {
    icon: "insights",
    title: "Evidence tracking",
    description:
      "Every hypothesis, test, and result lives in one place — a decision record you can always point back to.",
  },
  {
    icon: "research",
    title: "Calm, premium tooling",
    description:
      "Editorial spacing, soft motion, and clear hierarchy, so the work feels considered instead of chaotic.",
  },
];

export function FeaturesBenefits() {
  return (
    <Section tone="bone">
      <div className="max-w-2xl">
        <p className="eyebrow text-graphite">Features &amp; benefits</p>
        <h2 className="text-display-sm mt-4 text-charcoal">
          Everything you need to move an idea forward, honestly.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {FEATURES.map((feature) => (
          <Card key={feature.title} className="flex flex-col gap-4 p-8">
            <IconTile icon={feature.icon} />
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </Card>
        ))}
      </div>
    </Section>
  );
}

import { Section } from "@/components/ui/section";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import type { IconName } from "@/lib/frameworks-data";

const PRINCIPLES: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "insights",
    title: "Curiosity before certainty",
    description:
      "Every project starts with a question worth asking, not an answer worth defending.",
  },
  {
    icon: "validate",
    title: "Evidence over opinion",
    description:
      "Decisions are backed by what people actually do, not what the loudest voice believes.",
  },
  {
    icon: "iterate",
    title: "Systems over shortcuts",
    description: "A repeatable process beats a lucky guess, every time you run it again.",
  },
];

export function WhatWeDo() {
  return (
    <Section tone="bone">
      <div className="max-w-2xl">
        <p className="eyebrow text-graphite">What we do</p>
        <h2 className="text-display-sm mt-4 text-charcoal">
          SeedStudio is an AI-guided innovation operating system.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-charcoal/70 md:text-lg">
          It gives teams a structured, evidence-based path from Ideation to
          Validation to Execution — replacing scattered docs, guesswork, and
          gut-feel roadmaps with a calm, repeatable practice for turning
          uncertainty into opportunity.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {PRINCIPLES.map((principle) => (
          <Card key={principle.title}>
            <IconTile icon={principle.icon} />
            <CardTitle className="mt-5">{principle.title}</CardTitle>
            <CardDescription className="mt-2">{principle.description}</CardDescription>
          </Card>
        ))}
      </div>
    </Section>
  );
}

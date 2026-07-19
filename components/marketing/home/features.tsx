import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { IconTile } from "@/components/ui/icon-tile";
import type { IconName } from "@/lib/frameworks-data";

const FEATURES: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "ai",
    title: "AI Research Copilot",
    description: "Ask questions, synthesize interviews and surface patterns in minutes, not days.",
  },
  {
    icon: "validate",
    title: "Validation Boards",
    description: "Track hypotheses, experiments and evidence in one visual workspace.",
  },
  {
    icon: "insights",
    title: "Framework Library",
    description: "70+ proven frameworks — 5 Whys to Pugh Matrix — built into every stage.",
  },
  {
    icon: "growth",
    title: "Living Roadmaps",
    description: "Ideas evolve as evidence comes in, so your roadmap reflects reality.",
  },
];

export function Features() {
  return (
    <Section tone="forest">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[13px] font-semibold tracking-[1px] text-bone uppercase">Features</p>
        <h2 className="text-display-sm mt-4 text-bone">Built to make evidence effortless.</h2>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <Card key={feature.title} className="border-none bg-charcoal p-7">
            <IconTile icon={feature.icon} tone="dark" />
            <CardTitle className="mt-4 text-bone">{feature.title}</CardTitle>
            <CardDescription className="mt-2 text-stone">{feature.description}</CardDescription>
          </Card>
        ))}
      </div>
    </Section>
  );
}

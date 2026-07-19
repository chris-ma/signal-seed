import { Section } from "@/components/ui/section";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import type { IconName } from "@/lib/frameworks-data";

const AREAS: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "discover",
    title: "Discover",
    description: "Uncover real problems worth solving through root-cause analysis.",
  },
  {
    icon: "research",
    title: "Research",
    description: "Understand people, markets and context with structured methods.",
  },
  {
    icon: "ideate",
    title: "Ideate",
    description: "Generate and refine meaningful solutions, not just more ideas.",
  },
  {
    icon: "validate",
    title: "Validate",
    description: "Test assumptions with lean experiments before you commit.",
  },
];

export function AreasWeCover() {
  return (
    <Section tone="white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[13px] font-semibold tracking-[1px] text-moss uppercase">
          Areas we cover
        </p>
        <h2 className="text-display-sm mt-4 text-charcoal">
          Every stage of the innovation lifecycle, covered.
        </h2>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {AREAS.map((area) => (
          <Card key={area.title} className="p-7">
            <IconTile icon={area.icon} />
            <CardTitle className="mt-4">{area.title}</CardTitle>
            <CardDescription className="mt-2">{area.description}</CardDescription>
          </Card>
        ))}
      </div>
    </Section>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { PHASES, getFrameworksByPhase } from "@/lib/frameworks-data";

export const metadata: Metadata = {
  title: "Frameworks — Signal Seed",
  description:
    "Fourteen structured frameworks across five phases, from problem definition to decision and next steps.",
};

export default function FrameworksPage() {
  return (
    <>
      <Section tone="charcoal" className="pb-16">
        <Badge tone="dark">Frameworks</Badge>
        <h1 className="text-display-sm md:text-display mt-6 max-w-3xl text-bone">
          A structured practice for every stage of the journey.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-bone/70 md:text-lg">
          Fourteen field-tested tools, organized into five phases — from naming
          the real problem to deciding what to build, pivot, or kill.
        </p>
      </Section>

      {PHASES.map((phase) => {
        const frameworks = getFrameworksByPhase(phase.slug);
        return (
          <Section
            key={phase.slug}
            id={phase.slug}
            tone="bone"
            className="border-t border-stone/50 py-16 md:py-20"
          >
            <div className="max-w-2xl">
              <p className="eyebrow text-graphite">Phase {phase.number}</p>
              <h2 className="text-display-sm mt-4 text-charcoal">{phase.name}</h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/70">{phase.goal}</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {frameworks.map((framework) => (
                <Link key={framework.slug} href={`/frameworks/${framework.slug}`}>
                  <Card className="h-full transition-colors hover:border-forest/40 hover:bg-sage/10">
                    <CardTitle>{framework.name}</CardTitle>
                    <CardDescription className="mt-2">{framework.tagline}</CardDescription>
                    <p className="mt-4 font-mono text-xs text-graphite">
                      {framework.timeEstimate}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}

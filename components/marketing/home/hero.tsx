import Link from "next/link";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroThemeSentinel } from "@/lib/header-theme-context";
import { BonsaiDiagram } from "@/components/marketing/home/bonsai-diagram";

export function Hero() {
  return (
    <Section tone="charcoal" className="pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        <div>
          <Badge tone="dark">Ideas are living systems</Badge>
          <h1 className="text-display-sm md:text-display-lg mt-6 font-normal text-bone">
            From ideation to validation.
          </h1>
          <p className="mt-6 max-w-md text-base text-bone/70 md:text-lg">
            All the tools you need to turn uncertainty into opportunity —
            structured thinking, AI guidance, and evidence at every stage.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="primary" surface="dark" size="lg">
              <Link href="/join">Start your first project</Link>
            </Button>
            <Button asChild variant="secondary" surface="dark" size="lg">
              <Link href="/frameworks">Explore the frameworks</Link>
            </Button>
          </div>
        </div>
        <BonsaiDiagram />
      </div>
      <HeroThemeSentinel />
    </Section>
  );
}

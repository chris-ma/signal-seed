import Link from "next/link";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BlueprintGrid } from "@/components/marketing/home/blueprint-grid";
import { HeroVisual } from "@/components/marketing/home/hero-visual";

export function Hero() {
  return (
    <Section tone="charcoal" className="relative overflow-hidden">
      <BlueprintGrid className="hidden lg:block" />
      <div className="relative flex flex-col gap-16 lg:flex-row lg:items-center">
        <div className="lg:w-[420px] lg:shrink-0">
          <p className="text-[13px] font-semibold tracking-[1px] text-bone/70 uppercase">
            Ideas are living systems
          </p>
          <h1 className="text-display-sm md:text-display-lg mt-6 font-normal text-bone">
            From ideation to validation.
          </h1>
          <p className="mt-6 max-w-md text-base text-bone/70 md:text-lg">
            All the tools you need to turn uncertainty into opportunity.
          </p>
          <div className="mt-10">
            <Button asChild variant="primary" surface="dark" size="lg">
              <Link href="/join">Start your first project</Link>
            </Button>
          </div>
        </div>
        <HeroVisual />
      </div>
    </Section>
  );
}

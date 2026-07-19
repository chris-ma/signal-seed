import Link from "next/link";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function ClosingCTA() {
  return (
    <Section tone="charcoal" className="text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-display-sm text-bone">
          Grow your next idea like a forest, not a factory.
        </h2>
        <p className="mt-6 text-base text-bone/65 md:text-lg">
          Start with one problem worth solving. SeedStudio will help you carry
          it all the way to evidence.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild variant="primary" surface="dark" size="lg">
            <Link href="/join">Start your first project</Link>
          </Button>
          <Button asChild variant="ghost" surface="dark" size="lg">
            <Link href="/frameworks">Explore the frameworks</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

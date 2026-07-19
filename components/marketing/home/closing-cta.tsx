import Link from "next/link";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function ClosingCTA() {
  return (
    <Section tone="charcoal" className="text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-display-sm text-bone">From ideation to validation.</h2>
        <p className="mt-6 text-base text-stone md:text-lg">
          All the tools needed to transform uncertainty into opportunity.
        </p>
        <div className="mt-10">
          <Button asChild variant="primary" surface="dark" size="lg">
            <Link href="/join">Start your first project</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

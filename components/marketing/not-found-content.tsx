import Link from "next/link";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function NotFoundContent() {
  return (
    <Section tone="sand" className="pb-24 text-center">
      <div className="mx-auto max-w-xl">
        <p className="text-[13px] font-semibold tracking-[1px] text-charcoal/70 uppercase">
          404
        </p>
        <h1 className="text-display-sm mt-6 text-charcoal">
          This path hasn&apos;t been cleared yet.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-charcoal/70">
          The page you&apos;re looking for doesn&apos;t exist, or has moved.
        </p>
        <div className="mt-10">
          <Button asChild variant="primary" surface="light" size="lg">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

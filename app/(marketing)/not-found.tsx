import Link from "next/link";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section tone="sand" className="pb-24 text-center">
      <div className="mx-auto max-w-xl">
        <div className="flex justify-center">
          <Badge tone="light">404</Badge>
        </div>
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

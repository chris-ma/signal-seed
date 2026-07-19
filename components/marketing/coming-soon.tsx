import Link from "next/link";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

interface ComingSoonProps {
  eyebrow: string;
  title: string;
  description: string;
  themes?: string[];
  ctaHref?: string;
  ctaLabel?: string;
}

export function ComingSoon({
  eyebrow,
  title,
  description,
  themes,
  ctaHref = "/frameworks",
  ctaLabel = "Explore the frameworks",
}: ComingSoonProps) {
  return (
    <Section tone="sand" className="pb-24 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="text-[13px] font-semibold tracking-[1px] text-charcoal/70 uppercase">
          {eyebrow}
        </p>
        <h1 className="text-display-sm mt-6 text-charcoal">{title}</h1>
        <p className="mt-6 text-base leading-relaxed text-charcoal/70 md:text-lg">
          {description}
        </p>

        {themes && themes.length > 0 ? (
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {themes.map((theme) => (
              <span
                key={theme}
                className="rounded-full border border-charcoal/15 px-4 py-1.5 text-xs text-charcoal/60"
              >
                {theme}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-10">
          <Button asChild variant="primary" surface="light" size="lg">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

import * as React from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

const TONE_CLASSES = {
  bone: "bg-bone text-charcoal",
  charcoal: "bg-charcoal text-bone",
  sand: "bg-sand text-charcoal",
  forest: "bg-forest text-bone",
} as const;

export type SectionTone = keyof typeof TONE_CLASSES;

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  containerClassName?: string;
}

function Section({
  tone = "bone",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-20 md:py-28", TONE_CLASSES[tone], className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export { Section };

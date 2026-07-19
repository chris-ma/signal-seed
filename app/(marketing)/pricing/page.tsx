import type { Metadata } from "next";

import { ComingSoon } from "@/components/marketing/coming-soon";

export const metadata: Metadata = { title: "Pricing — SeedStudio" };

export default function PricingPage() {
  return (
    <ComingSoon
      eyebrow="Pricing"
      title="Pricing is being planned."
      description="We're designing pricing that respects both your budget and your time. Join now and we'll let you know the moment plans open."
      ctaHref="/join"
      ctaLabel="Join the waitlist"
    />
  );
}

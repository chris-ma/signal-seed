import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

const PERSONAS = [
  {
    title: "Product Managers",
    description:
      "Prioritize with evidence and bring a defensible case to every roadmap review.",
  },
  {
    title: "Founders & Innovation Teams",
    description:
      "Validate before you build, and avoid the six-month detour on the wrong idea.",
  },
  {
    title: "Design & Research Leads",
    description: "Run structured research without stitching together five different tools.",
  },
  {
    title: "Innovation Consultants",
    description: "Deliver a repeatable, evidence-based process clients can see and trust.",
  },
];

export function WhoItsFor() {
  return (
    <Section tone="ricepaper">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[13px] font-semibold tracking-[1px] text-moss uppercase">
          Who it&apos;s for
        </p>
        <h2 className="text-display-sm mt-4 text-charcoal">
          Built for teams who&apos;d rather be right than fast.
        </h2>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PERSONAS.map((persona) => (
          <Card key={persona.title} className="bg-bone p-6">
            <CardTitle className="text-base">{persona.title}</CardTitle>
            <CardDescription className="mt-2 text-[13.5px]">
              {persona.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </Section>
  );
}

import { Section } from "@/components/ui/section";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

const PERSONAS = [
  {
    title: "Product & innovation teams",
    description:
      "Replace scattered docs and gut-feel roadmaps with one shared, evidence-based practice.",
  },
  {
    title: "Founders & early-stage teams",
    description:
      "Validate the riskiest assumption before you spend runway building the wrong thing.",
  },
  {
    title: "Strategy & innovation consultancies",
    description: "Run a consistent, defensible methodology across every client engagement.",
  },
];

export function WhoItsFor() {
  return (
    <Section tone="bone">
      <div className="max-w-2xl">
        <p className="eyebrow text-graphite">Who it&apos;s for</p>
        <h2 className="text-display-sm mt-4 text-charcoal">
          Built for teams who&apos;d rather test an idea than defend one.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {PERSONAS.map((persona) => (
          <Card key={persona.title}>
            <CardTitle>{persona.title}</CardTitle>
            <CardDescription className="mt-3">{persona.description}</CardDescription>
          </Card>
        ))}
      </div>
    </Section>
  );
}

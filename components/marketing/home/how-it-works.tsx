import { Section } from "@/components/ui/section";

const STEPS = [
  {
    number: "01",
    title: "Start a project",
    description: "Name the problem you're facing with a guided canvas, not a blank page.",
  },
  {
    number: "02",
    title: "Pick your framework",
    description:
      "SeedStudio recommends the right tool for where you are — root-cause analysis, ideation, or validation.",
  },
  {
    number: "03",
    title: "Run the test",
    description: "Design a lean experiment, capture the result, and let the evidence speak.",
  },
  {
    number: "04",
    title: "Decide, backed by data",
    description:
      "Build, pivot, or kill — with a clear record of why, for the next person who asks.",
  },
];

export function HowItWorks() {
  return (
    <Section tone="forest">
      <div className="max-w-2xl">
        <p className="eyebrow text-sage">How it works</p>
        <h2 className="text-display-sm mt-4 text-bone">
          A calm, repeatable rhythm for every idea.
        </h2>
      </div>
      <div className="mt-14 grid gap-10 md:grid-cols-4">
        {STEPS.map((step) => (
          <div key={step.number}>
            <p className="font-mono text-sm text-sage">{step.number}</p>
            <p className="mt-3 font-serif text-lg text-bone">{step.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-bone/60">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

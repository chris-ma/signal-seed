import { Section } from "@/components/ui/section";

const STEPS = [
  {
    number: 1,
    title: "Discover & Research",
    description: "Define the real problem and ground it in evidence, not assumption.",
  },
  {
    number: 2,
    title: "Ideate & Prototype",
    description: "Generate options with structured brainstorming and AI collaboration.",
  },
  {
    number: 3,
    title: "Validate",
    description: "Run lean experiments against your riskiest assumptions.",
  },
  {
    number: 4,
    title: "Iterate & Grow",
    description: "Learn, adapt and compound what's working into your roadmap.",
  },
];

export function HowItWorks() {
  return (
    <Section tone="bone">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[13px] font-semibold tracking-[1px] text-moss uppercase">
          How it works
        </p>
        <h2 className="text-display-sm mt-4 text-charcoal">
          From uncertain idea to validated opportunity.
        </h2>
      </div>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div key={step.number}>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal">
              <span className="text-sm font-semibold text-bone">{step.number}</span>
            </div>
            <p className="mt-3 font-semibold text-charcoal">{step.title}</p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-graphite">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

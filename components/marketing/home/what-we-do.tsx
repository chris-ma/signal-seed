import { Section } from "@/components/ui/section";

const ITEMS = [
  {
    title: "Discover & Research",
    description: "Ground every idea in real problems and real evidence before you build.",
  },
  {
    title: "Ideate & Prototype",
    description:
      "Generate and shape solution options with AI as a collaborator, not a crutch.",
  },
  {
    title: "Validate & Iterate",
    description:
      "Design lean experiments, read the results honestly, and decide with confidence.",
  },
];

export function WhatWeDo() {
  return (
    <Section tone="ricepaper">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[13px] font-semibold tracking-[1px] text-moss uppercase">
            What we do
          </p>
          <h2 className="text-display-sm mt-4 text-charcoal">
            One connected system from ideation to validation.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-graphite">
            Signal Seed combines systems thinking, structured research, lean
            experimentation and AI guidance into a single calm workspace — so your
            team moves through the innovation lifecycle with evidence, not
            guesswork.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {ITEMS.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-moss" />
              <div>
                <p className="font-semibold text-charcoal">{item.title}</p>
                <p className="mt-1 text-sm text-graphite">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

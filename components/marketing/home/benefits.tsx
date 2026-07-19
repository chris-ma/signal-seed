import { Section } from "@/components/ui/section";

const BENEFITS = [
  {
    title: "Move faster, with less risk",
    description: "Catch a bad bet in days, not after months of engineering time.",
  },
  {
    title: "Decisions everyone trusts",
    description: "Every recommendation is backed by evidence you can point back to, not a hunch.",
  },
  {
    title: "Skip the reinventing",
    description: "70+ proven frameworks mean your team never starts from a blank page.",
  },
  {
    title: "A calmer way to build",
    description: "Replace scattered docs and gut-feel roadmaps with one clear, repeatable practice.",
  },
];

export function Benefits() {
  return (
    <Section tone="white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[13px] font-semibold tracking-[1px] text-moss uppercase">Benefits</p>
        <h2 className="text-display-sm mt-4 text-charcoal">
          Why teams stick with a structured practice.
        </h2>
      </div>
      <div className="mx-auto mt-14 grid max-w-3xl gap-x-12 gap-y-8 sm:grid-cols-2">
        {BENEFITS.map((benefit) => (
          <div key={benefit.title} className="flex gap-4">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-moss" />
            <div>
              <p className="font-semibold text-charcoal">{benefit.title}</p>
              <p className="mt-1 text-sm text-graphite">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

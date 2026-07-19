import { Section } from "@/components/ui/section";

export function Problem() {
  return (
    <Section tone="bone">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
        <p className="text-[13px] font-semibold tracking-[1px] text-graphite uppercase">
          The problem
        </p>
        <div className="space-y-6">
          <h2 className="text-display-sm text-charcoal">
            Most ideas don&apos;t fail because they&apos;re bad. They fail
            because no one tested them before building.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-charcoal/70 md:text-lg">
            Teams chase conviction instead of evidence. Roadmaps get built on
            the loudest opinion in the room. Months of engineering ship before
            anyone asks a real customer a real question — and by the time the
            data arrives, it&apos;s too expensive to listen to. The cost
            isn&apos;t just wasted work. It&apos;s the good ideas that quietly
            die in a slide deck because no one gave them a structured way to
            prove themselves.
          </p>
        </div>
      </div>
    </Section>
  );
}

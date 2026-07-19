import { LIFECYCLE_STAGES } from "@/lib/lifecycle-data";
import { Section } from "@/components/ui/section";
import { IconTile } from "@/components/ui/icon-tile";

export function AreasWeCover() {
  return (
    <Section tone="sand">
      <div className="max-w-2xl">
        <p className="eyebrow text-graphite">Areas we cover</p>
        <h2 className="text-display-sm mt-4 text-charcoal">
          One continuous journey, from first hunch to lasting growth.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-charcoal/70 md:text-lg">
          Every feature in SeedStudio supports one stage of the innovation
          lifecycle — so nothing gets skipped, and nothing gets built before
          it&apos;s earned its place.
        </p>
      </div>

      <div className="-mx-6 mt-14 overflow-x-auto px-6 md:mx-0 md:overflow-visible md:px-0">
        <div className="flex gap-6 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10 lg:grid-cols-8">
          {LIFECYCLE_STAGES.map((stage) => (
            <div key={stage.slug} className="w-52 flex-shrink-0 md:w-auto">
              <IconTile icon={stage.icon} />
              <p className="mt-4 font-mono text-xs text-graphite">
                {String(stage.order).padStart(2, "0")}
              </p>
              <p className="mt-1 font-serif text-base text-charcoal">{stage.name}</p>
              <p className="mt-2 text-sm leading-snug text-charcoal/60">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

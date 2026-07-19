import { getHeroCalloutStages } from "@/lib/lifecycle-data";
import { BonsaiIllustration } from "@/components/marketing/home/bonsai-illustration";

export function HeroVisual() {
  const stages = getHeroCalloutStages();

  return (
    <div className="lg:flex-1">
      {/* Desktop: illustration + leader-line-style callouts side by side */}
      <div className="hidden items-start gap-10 lg:flex">
        <div className="relative aspect-[1342/800] w-full max-w-[560px] shrink-0 text-sage/80">
          <BonsaiIllustration />
        </div>
        <ol className="flex flex-col gap-8 pt-2">
          {stages.map((stage, index) => (
            <li key={stage.slug} className="flex gap-3">
              <span className="pt-0.5 font-mono text-xs text-graphite">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="max-w-[190px]">
                <p className="text-[13px] font-semibold tracking-[0.8px] text-bone uppercase">
                  {stage.name}
                </p>
                <p className="mt-1 text-[12.5px] leading-snug text-stone">
                  {stage.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile/tablet: illustration full-width, plain stacked list below */}
      <div className="lg:hidden">
        <div className="relative aspect-[1342/800] w-full text-sage/80">
          <BonsaiIllustration />
        </div>
        <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {stages.map((stage, index) => (
            <li key={stage.slug} className="flex items-start gap-3">
              <span className="font-mono text-xs text-moss">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-medium text-bone">{stage.name}</p>
                <p className="mt-0.5 text-xs leading-snug text-bone/55">{stage.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

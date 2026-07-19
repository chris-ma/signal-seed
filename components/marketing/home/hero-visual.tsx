import Image from "next/image";

import { getHeroCalloutStages } from "@/lib/lifecycle-data";

const BONSAI_ALT =
  "A bonsai tree with an exposed, tangled root system — ideas grow from structure and evidence, not shortcuts.";

export function HeroVisual() {
  const stages = getHeroCalloutStages();

  return (
    <div className="lg:flex-1">
      {/* Desktop: photo + leader-line-style callouts side by side */}
      <div className="hidden items-start gap-10 lg:flex">
        <div className="relative aspect-[1342/800] w-full max-w-[560px] shrink-0 overflow-hidden rounded-lg">
          <Image
            src="/images/bonsai.jpg"
            alt={BONSAI_ALT}
            fill
            sizes="560px"
            className="object-cover"
            priority
          />
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

      {/* Mobile/tablet: photo full-width, plain stacked list below */}
      <div className="lg:hidden">
        <div className="relative aspect-[1342/800] w-full overflow-hidden rounded-lg">
          <Image src="/images/bonsai.jpg" alt={BONSAI_ALT} fill sizes="100vw" className="object-cover" />
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

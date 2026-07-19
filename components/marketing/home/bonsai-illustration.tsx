import { cn } from "@/lib/utils";

interface BonsaiIllustrationProps {
  className?: string;
}

/**
 * Hand-drawn solid-silhouette bonsai with an exposed root system —
 * a stand-in for the real photograph, single-fill so it recolors via `currentColor`.
 */
export function BonsaiIllustration({ className }: BonsaiIllustrationProps) {
  return (
    <svg
      viewBox="0 0 1342 800"
      className={cn("h-full w-full", className)}
      fill="currentColor"
      aria-hidden
    >
      {/* Roots */}
      <path d="M593,555 Q470,580 350,660 Q480,600 607,562 Z" />
      <path d="M608,558 Q490,630 410,720 Q535,635 622,562 Z" />
      <path d="M623,560 Q540,660 480,760 Q555,655 637,563 Z" />
      <path d="M643,562 Q590,680 560,780 Q600,670 657,565 Z" />
      <path d="M664,565 Q671,690 671,790 Q678,690 685,565 Z" />
      <path d="M699,562 Q750,680 780,780 Q712,670 685,565 Z" />
      <path d="M719,560 Q800,660 860,760 Q725,655 705,563 Z" />
      <path d="M734,558 Q850,630 930,720 Q745,635 720,562 Z" />
      <path d="M749,555 Q870,580 990,660 Q735,600 735,562 Z" />

      {/* Trunk */}
      <path
        d="M645,558
           C630,470 655,380 680,300
           C686,280 700,270 712,264
           C707,282 696,305 690,332
           C674,420 660,488 700,558
           Z"
      />

      {/* Canopy clusters */}
      <ellipse cx="712" cy="222" rx="92" ry="70" transform="rotate(-8 712 222)" />
      <ellipse cx="556" cy="262" rx="102" ry="76" transform="rotate(6 556 262)" />
      <ellipse cx="866" cy="250" rx="96" ry="72" transform="rotate(-4 866 250)" />
      <ellipse cx="628" cy="156" rx="70" ry="55" transform="rotate(10 628 156)" />
      <ellipse cx="802" cy="148" rx="76" ry="58" transform="rotate(-10 802 148)" />
      <ellipse cx="498" cy="340" rx="80" ry="60" transform="rotate(14 498 340)" />
      <ellipse cx="720" cy="130" rx="52" ry="42" />
    </svg>
  );
}

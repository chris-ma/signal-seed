import { cn } from "@/lib/utils";

interface BonsaiIllustrationProps {
  className?: string;
}

/**
 * Hand-drawn bonsai with an exposed root system, modeled on a reference photo
 * of a bonsai with a wide, tangled root mass — a stand-in for the real
 * photograph. Two-tone (moss canopy, stone trunk/branches/roots) rather than
 * a literal photo.
 */
export function BonsaiIllustration({ className }: BonsaiIllustrationProps) {
  return (
    <svg viewBox="0 0 1342 800" className={cn("h-full w-full", className)} aria-hidden>
      <g style={{ fill: "var(--color-stone)" }}>
        {/* Root crown flare */}
        <path d="M590,555 Q555,585 535,618 Q580,600 630,568 Z" />
        <path d="M638,562 Q612,605 602,645 Q645,610 660,568 Z" />
        <path d="M700,566 Q693,612 696,650 Q715,610 715,568 Z" />
        <path d="M752,562 Q772,605 784,642 Q745,610 732,568 Z" />
        <path d="M800,555 Q838,585 858,616 Q815,600 762,568 Z" />

        {/* Fine roots — wavy, overlapping, varied angles */}
        <path d="M552,566 Q480,572 420,570 Q380,592 300,600 Q400,585 470,588 Q520,578 566,562 Z" />
        <path d="M562,570 Q500,600 460,630 Q410,672 380,660 Q440,640 470,610 Q515,585 588,566 Z" />
        <path d="M580,574 Q530,635 505,672 Q470,730 430,715 Q485,680 505,645 Q535,610 602,570 Z" />
        <path d="M602,578 Q565,660 548,700 Q525,755 480,760 Q525,715 542,678 Q560,635 622,573 Z" />
        <path d="M630,580 Q608,675 596,720 Q582,775 560,780 Q590,725 598,685 Q608,645 650,576 Z" />
        <path d="M665,582 Q662,690 664,745 Q665,790 671,795 Q676,790 675,745 Q676,690 683,580 Z" />
        <path d="M700,580 Q722,675 736,720 Q752,775 780,780 Q745,725 736,685 Q724,645 690,576 Z" />
        <path d="M732,578 Q772,660 792,700 Q818,755 860,760 Q812,715 795,678 Q775,635 712,573 Z" />
        <path d="M760,574 Q815,635 843,672 Q880,730 918,715 Q862,680 840,645 Q808,610 740,570 Z" />
        <path d="M780,570 Q845,600 888,630 Q935,672 962,660 Q900,640 868,610 Q822,585 748,566 Z" />
        <path d="M790,566 Q862,572 925,570 Q968,592 1040,600 Q940,585 868,588 Q815,578 772,562 Z" />
        <path d="M490,608 Q440,622 405,632 Q370,648 335,648 Q385,632 415,616 Q450,600 502,590 Z" opacity="0.75" />
        <path d="M850,608 Q905,622 940,632 Q975,648 1010,648 Q955,632 925,616 Q890,600 840,590 Z" opacity="0.75" />
        <path d="M535,660 Q495,690 470,712 Q510,682 545,662 Z" opacity="0.65" />
        <path d="M810,662 Q850,692 875,714 Q835,684 800,664 Z" opacity="0.65" />

        {/* Branches connecting the trunk to each canopy cluster */}
        <path
          d="M726,244 Q742,190 758,140"
          fill="none"
          stroke="var(--color-stone)"
          strokeWidth="13"
          strokeLinecap="round"
        />
        <path
          d="M718,240 Q690,205 666,168"
          fill="none"
          stroke="var(--color-stone)"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <path
          d="M700,252 Q630,258 578,248"
          fill="none"
          stroke="var(--color-stone)"
          strokeWidth="15"
          strokeLinecap="round"
        />
        <path
          d="M714,258 Q800,268 900,278"
          fill="none"
          stroke="var(--color-stone)"
          strokeWidth="15"
          strokeLinecap="round"
        />
        <path
          d="M694,278 Q590,310 512,336"
          fill="none"
          stroke="var(--color-stone)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M700,292 Q840,340 948,372"
          fill="none"
          stroke="var(--color-stone)"
          strokeWidth="9"
          strokeLinecap="round"
        />

        {/* Trunk */}
        <path
          d="M645,560
             C628,478 650,400 672,340
             C680,308 692,282 706,262
             C712,248 720,240 730,236
             C722,254 708,278 700,304
             C682,368 664,420 678,470
             C688,505 700,530 705,560
             Z"
        />
        {/* Bark texture lines */}
        <path
          d="M660,540 C650,470 665,400 685,330"
          fill="none"
          stroke="var(--color-graphite)"
          strokeOpacity="0.35"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M694,548 C700,480 690,415 704,350"
          fill="none"
          stroke="var(--color-graphite)"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <ellipse cx="668" cy="410" rx="6" ry="9" fill="var(--color-charcoal)" opacity="0.35" />
      </g>

      <g style={{ fill: "var(--color-moss)" }}>
        {/* Canopy clusters */}
        <ellipse cx="760" cy="112" rx="108" ry="82" transform="rotate(-6 760 112)" />
        <ellipse cx="660" cy="148" rx="66" ry="52" transform="rotate(8 660 148)" />
        <ellipse cx="562" cy="228" rx="128" ry="92" transform="rotate(8 562 228)" />
        <ellipse cx="922" cy="262" rx="122" ry="88" transform="rotate(-6 922 262)" />
        <ellipse cx="486" cy="342" rx="92" ry="66" transform="rotate(14 486 342)" />
        <ellipse cx="978" cy="380" rx="66" ry="46" transform="rotate(-10 978 380)" opacity="0.9" />
      </g>
    </svg>
  );
}

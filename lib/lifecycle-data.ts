import type { IconName } from "@/lib/frameworks-data";

export interface LifecycleStage {
  slug: string;
  order: number;
  name: string;
  icon: IconName;
  description: string;
  heroCallout: boolean;
}

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    slug: "discover",
    order: 1,
    name: "Discover",
    icon: "discover",
    heroCallout: true,
    description:
      "Notice the friction worth paying attention to, before it has a name.",
  },
  {
    slug: "research",
    order: 2,
    name: "Research",
    icon: "research",
    heroCallout: true,
    description:
      "Trade opinion for evidence by watching and listening to the people living the problem.",
  },
  {
    slug: "ideate",
    order: 3,
    name: "Ideate",
    icon: "ideate",
    heroCallout: true,
    description:
      "Widen the field of possible solutions before narrowing to the strongest ones.",
  },
  {
    slug: "prototype",
    order: 4,
    name: "Prototype",
    icon: "prototype",
    heroCallout: false,
    description: "Give the idea just enough shape to be tested, not enough to be precious.",
  },
  {
    slug: "validate",
    order: 5,
    name: "Validate",
    icon: "validate",
    heroCallout: true,
    description:
      "Test the riskiest assumption first, and let real behavior settle the argument.",
  },
  {
    slug: "iterate",
    order: 6,
    name: "Iterate",
    icon: "iterate",
    heroCallout: true,
    description: "Fold what you learned back into the idea, and run the loop again.",
  },
  {
    slug: "launch",
    order: 7,
    name: "Launch",
    icon: "growth",
    heroCallout: false,
    description: "Bring the validated idea into the world on purpose, not by accident.",
  },
  {
    slug: "grow",
    order: 8,
    name: "Grow",
    icon: "growth",
    heroCallout: false,
    description: "Compound small, evidenced wins into lasting change.",
  },
];

export function getHeroCalloutStages(): LifecycleStage[] {
  return LIFECYCLE_STAGES.filter((s) => s.heroCallout);
}

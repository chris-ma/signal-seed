import * as React from "react";
import type { IconName } from "@/lib/frameworks-data";

type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Discover(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 21 21" />
      <path d="M8 10.5c0-1.4 1.1-2.5 2.5-2.5" />
    </svg>
  );
}

function Research(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5c1.6-.9 3.4-1.3 5-1.1 1 .1 1.7.5 2 1v13c-.3-.5-1-.9-2-1-1.6-.2-3.4.2-5 1.1z" />
      <path d="M20 5.5c-1.6-.9-3.4-1.3-5-1.1-1 .1-1.7.5-2 1v13c.3-.5 1-.9 2-1 1.6-.2 3.4.2 5 1.1z" />
    </svg>
  );
}

function Interview(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 4.5h9a2 2 0 0 1 2 2V12a2 2 0 0 1-2 2h-5l-3.5 3v-3H9a2 2 0 0 1-2-2V9" />
      <path d="M5 8.5h6a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2H8l-2.5 2.2V17H5a2 2 0 0 1-2-2v-4.5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function Ideate(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a5.5 5.5 0 0 0-3 10.1c.6.4 1 1.1 1 1.9v.5h4v-.5c0-.8.4-1.5 1-1.9A5.5 5.5 0 0 0 12 3Z" />
      <path d="M9 8c0-1.3 1.3-2.5 3-2.5" />
    </svg>
  );
}

function Prototype(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="9" height="9" rx="1" />
      <path d="M9.5 13v4a2 2 0 0 0 2 2H16a2 2 0 0 0 2-2v-4.5" />
      <path d="M13 9h7" strokeDasharray="1.5 2.2" />
    </svg>
  );
}

function Validate(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c2.7 1 4.6 1.2 7 1.1 0 8-2.8 12-7 15-4.2-3-7-7-7-15 2.4.1 4.3-.1 7-1.1Z" />
      <path d="m9 12 2 2 4-4.2" />
    </svg>
  );
}

function Iterate(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12a7.5 7.5 0 0 1 12.6-5.5" />
      <path d="M19.5 12a7.5 7.5 0 0 1-12.6 5.5" />
      <path d="M17 3.5v3.4h-3.4" />
      <path d="M7 20.5v-3.4h3.4" />
    </svg>
  );
}

function Growth(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20h16" />
      <path d="M8 20v-5" />
      <path d="M12 20v-9" />
      <path d="M16 20v-3" />
      <path d="m4 11 5-5 3 3 7-7" />
      <path d="M15 2h4v4" />
    </svg>
  );
}

function AI(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v3.2" />
      <path d="M12 17.8V21" />
      <path d="M3 12h3.2" />
      <path d="M17.8 12H21" />
      <path d="M12 9.4 13.4 12 12 14.6 10.6 12z" />
      <path d="m6.3 6.3 1.7 1.7" />
      <path d="m16 16 1.7 1.7" />
      <path d="m17.7 6.3-1.7 1.7" />
      <path d="m8 16-1.7 1.7" />
    </svg>
  );
}

function Insights(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

export const ICONS: Record<IconName, (props: IconProps) => React.ReactElement> = {
  discover: Discover,
  research: Research,
  interview: Interview,
  ideate: Ideate,
  prototype: Prototype,
  validate: Validate,
  iterate: Iterate,
  growth: Growth,
  ai: AI,
  insights: Insights,
};

export {
  Discover,
  Research,
  Interview,
  Ideate,
  Prototype,
  Validate,
  Iterate,
  Growth,
  AI,
  Insights,
};

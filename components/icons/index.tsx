import * as React from "react";
import type { IconName } from "@/lib/frameworks-data";

type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  stroke: "none",
};

function Discover(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 3.5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
      />
      <rect x="15.2" y="14.6" width="2.2" height="8" rx="1.1" transform="rotate(45 16.3 14.6)" />
    </svg>
  );
}

function Research(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11 5.2c-1.8-1-3.9-1.3-6-1.1A1 1 0 0 0 4 5.1v13.4a1 1 0 0 0 1.2 1c1.9-.4 3.9-.1 5.5.9a.6.6 0 0 0 .3.1V5.2Z" />
      <path d="M13 5.2v15.3a.6.6 0 0 0 .3-.1c1.6-1 3.6-1.3 5.5-.9a1 1 0 0 0 1.2-1V5.1a1 1 0 0 0-1-1c-2.1-.2-4.2.1-6 1.1Z" />
    </svg>
  );
}

function Interview(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        opacity="0.5"
        d="M3.5 8a2 2 0 0 1 2-2H12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8.4l-2.9 2.3a.6.6 0 0 1-1-.47V15h-.5a2 2 0 0 1-2-2Z"
      />
      <path d="M10 9.5a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H18v2.3a.6.6 0 0 1-1 .47L14.1 17H12a2 2 0 0 1-2-2Z" />
    </svg>
  );
}

function Ideate(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5a6.5 6.5 0 0 0-3.6 11.9c.5.35.85.9.9 1.5h5.4c.05-.6.4-1.15.9-1.5A6.5 6.5 0 0 0 12 2.5Z" />
      <rect x="9.3" y="17.5" width="5.4" height="1.6" rx="0.8" />
      <path d="M10.2 20.6h3.6a.4.4 0 0 1 .3.66l-.8.9a1 1 0 0 1-.75.34h-1.1a1 1 0 0 1-.75-.34l-.8-.9a.4.4 0 0 1 .3-.66Z" />
    </svg>
  );
}

function Prototype(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9.2a2 2 0 0 0 1.4-.6l3.8-3.8a2 2 0 0 0 .6-1.4V5a2 2 0 0 0-2-2Z" />
      <path opacity="0.5" d="M14.5 20.6V16a1 1 0 0 1 1-1H20Z" />
    </svg>
  );
}

function Validate(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.2c2.4.95 4.6 1.2 7 1.1a1 1 0 0 1 1 1c0 8.4-3 12.8-7.6 15.9a1 1 0 0 1-1 0C6.9 17.1 4 12.7 4 4.3a1 1 0 0 1 1-1c2.4.1 4.6-.15 7-1.1Zm3.66 6.98a1 1 0 0 0-1.42-1.36l-3.5 3.65-1.28-1.34a1 1 0 1 0-1.44 1.38l2 2.1a1 1 0 0 0 1.45-.01Z"
      />
    </svg>
  );
}

function Iterate(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4a8 8 0 0 0-7.75 6 1 1 0 0 0 1.94.5A6 6 0 0 1 12 6Z" />
      <path d="M17 3.4V8a1 1 0 0 1-1 1h-4.6a1 1 0 0 1-.7-1.7l4.6-4.6A1 1 0 0 1 17 3.4Z" />
      <path d="M12 20a8 8 0 0 0 7.75-6 1 1 0 0 0-1.94-.5A6 6 0 0 1 12 18Z" />
      <path d="M7 20.6V16a1 1 0 0 1 1-1h4.6a1 1 0 0 1 .7 1.7l-4.6 4.6a1 1 0 0 1-1.7-.7Z" />
    </svg>
  );
}

function Growth(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="15" width="3.2" height="6" rx="0.8" />
      <rect x="10.4" y="11" width="3.2" height="10" rx="0.8" />
      <rect x="16.8" y="7" width="3.2" height="14" rx="0.8" />
      <path d="M14.5 5.3a1 1 0 0 1 1-1.1h4.2a1 1 0 0 1 1 1v4.2a1 1 0 0 1-1.7.7l-1-1-3.9 3.9a1 1 0 0 1-1.4-1.4l3.9-3.9-1-1a1 1 0 0 1-.1-1.4Z" />
    </svg>
  );
}

function AI(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5c.4 3.2 1.1 5.4 2.2 6.6 1.2 1.2 3.4 1.9 6.6 2.2-3.2.4-5.4 1.1-6.6 2.2-1.2 1.2-1.8 3.4-2.2 6.6-.4-3.2-1-5.4-2.2-6.6-1.2-1.2-3.4-1.8-6.6-2.2 3.2-.3 5.4-1 6.6-2.2 1.2-1.2 1.8-3.4 2.2-6.6Z" />
      <path d="M19 3c.15 1.15.4 1.9.8 2.3.4.4 1.15.65 2.2.8-1.05.15-1.8.4-2.2.8-.4.4-.65 1.15-.8 2.2-.15-1.05-.4-1.8-.8-2.2-.4-.4-1.15-.65-2.2-.8 1.05-.15 1.8-.4 2.2-.8.4-.4.65-1.15.8-2.3Z" />
    </svg>
  );
}

function Insights(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.5c5 0 8.9 3.7 10.4 6a1 1 0 0 1 0 1c-1.5 2.3-5.4 6-10.4 6S3.1 14.8 1.6 12.5a1 1 0 0 1 0-1C3.1 9.2 7 5.5 12 5.5Zm0 3.3a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Zm0 2a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4Z"
      />
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

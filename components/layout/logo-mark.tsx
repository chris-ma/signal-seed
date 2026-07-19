import * as React from "react";

export function LogoMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      {...props}
    >
      <circle cx="16" cy="18" r="9" />
      <path d="M16 9V4" />
      <circle cx="16" cy="4" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}
